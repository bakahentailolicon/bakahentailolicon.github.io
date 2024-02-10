const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    volume: 0.1,
	narrow: true,
    audio: [
        {
            name: 'gentle gaze',
            artist: 'unknow',
            url: '/music/gentle_gaze.mp3'
        }
    ]
});

$(document).on('pjax:start', function () {
    if (window.aplayers) {
        for (let i = 0; i < window.aplayers.length; i++) {
            window.aplayers[i].destroy();
        }
        window.aplayers = [];
    }
});