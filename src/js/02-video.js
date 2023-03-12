import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector("iframe");
const player = new VimeoPlayer(iframe);

player.on('timeupdate', () => {
    localStorage.setItem("videoplayer-current-time", 1);
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
}).catch(function(error) {})
})


player.on('play', function () {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time") ? localStorage.getItem("videoplayer-current-time") : 0);
    });

