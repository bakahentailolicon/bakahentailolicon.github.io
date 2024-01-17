const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    volume: 0.1,
    audio: [
        {
            name: 'gentle gaze',
            artist: 'unknow',
            url: '/music/gentle_gaze.mp3'
        }
    ]
});