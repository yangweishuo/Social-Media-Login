document.getElementById('facebook').addEventListener('click', function() {
    openLoginPage('https://www.facebook.com/login');
});

document.getElementById('twitter').addEventListener('click', function() {
    openLoginPage('https://twitter.com/login');
});
document.getElementById('instagram').addEventListener('click', function() {
    openLoginPage('https://www.instagram.com/');
});
document.getElementById('youtube').addEventListener('click', function() {
    openLoginPage('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dzh-CN%26next%3D%252F&ec=65620&hl=zh-CN&passive=true&service=youtube&uilel=3&ifkv=AaSxoQy_PYKQygEZ-iT5lViKQcOIjme2QgmDO_r5nLx5TgwLitVMhU7JaWehb3VEAfMhHL7Ccyzd&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
});
document.getElementById('redbook').addEventListener('click', function() {
    openLoginPage('https://www.xiaohongshu.com/explore');
});
document.getElementById('douyin').addEventListener('click', function() {
    openLoginPage('https://www.douyin.com/?recommend=1');
});
document.getElementById('kuaishou').addEventListener('click', function() {
    openLoginPage('https://www.kuaishou.com/new-reco');
});
document.getElementById('bilibili').addEventListener('click', function() {
    openLoginPage('https://passport.bilibili.com/pc/passport/login?gourl=https%3A%2F%2Fspace.bilibili.com');
});
document.getElementById('shipinhao').addEventListener('click', function() {
    openLoginPage('https://channels.weixin.qq.com/login.html');
});
document.getElementById('toutiao').addEventListener('click', function() {
    openLoginPage('https://mp.toutiao.com/auth/page/login');
});


// 添加其他社交媒体登录按钮的事件处理凄凄切切
// 例如：document.getElementById('instagram').addEventListener('click', function() { openLoginPage('https://www.instagram.com/accounts/login/'); });

/**
 * 打开登录页面
 *
 * @param url 登录页面链接
 */
function openLoginPage(url) {
    chrome.tabs.create({ url: url });
}
// function addSocialMediaButtons() {
//     // Create container for buttons
//     var container = document.createElement('div');
//     container.id = 'socialMediaButtonsContainer';
//     container.style.position = 'fixed';
//     container.style.bottom = '20px';
//     container.style.left = '20px';
//     container.style.zIndex = '9999';
//
//     // Create buttons for each social media
//     var facebookButton = createButton('Facebook', 'https://www.facebook.com/');
//     var twitterButton = createButton('Twitter', 'https://twitter.com/');
//     var instagramButton = createButton('Instagram', 'https://www.instagram.com/');
//
//     // Append buttons to container
//     container.appendChild(facebookButton);
//     container.appendChild(twitterButton);
//     container.appendChild(instagramButton);
//
//     // Append container to body
//     document.body.appendChild(container);
// }
//
// function createButton(text, url) {
//     var button = document.createElement('a');
//     button.href = url;
//     button.target = '_blank';
//     button.innerText = text;
//     button.style.display = 'inline-block';
//     button.style.marginRight = '10px';
//     button.style.padding = '5px 10px';
//     button.style.backgroundColor = '#4267B2'; // Facebook blue color
//     button.style.color = '#fff';
//     button.style.textDecoration = 'none';
//     button.style.borderRadius = '5px';
//     button.style.fontFamily = 'Arial, sans-serif';
//     button.style.fontSize = '14px';
//     return button;
// }
//
// addSocialMediaButtons();