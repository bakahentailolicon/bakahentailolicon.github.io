const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
        {
            name: '竹节虫',
            artist: 'unknow',
            url: '/music/warm.mp3'
        }
    ]
});