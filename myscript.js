// 他人のいいねを消す処理
doJudge = (i, elem) => {
    const checked = "likeremover-checked";
    
    // チェック済みかどうか判定
    if($(elem).hasClass(checked)) {
        return;
    }
    
    const json_raw = $(elem).attr('data-suggestion-json');
    const json = JSON.parse(json_raw);
    if(json["suggestion_details"]["suggestion_type"] === "ActivityTweet") {
        $(elem).addClass("likeremover-like-tweet")
    }
    
    
    $(elem).addClass(checked);
}

// DOM変更時に行う処理
runTask = () => {
    $('li[data-suggestion-json]').each(doJudge);
}

// DOM変更を検出
let target = document.getElementsByTagName('html')[0];
let observer = new MutationObserver(runTask);
let config = {childList: true, subtree: true};
observer.observe(target, config)