const SHARE = document.querySelector('.social__share');

SHARE.addEventListener('click', function(e) {
    let shareBlock = document.querySelector('.share');
    shareBlock.classList.toggle('share_active');
    SHARE.classList.toggle('social__share_active');
});