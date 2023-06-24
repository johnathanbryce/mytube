const maxResults = 10;

const youtubeURLS = [
    {
        type: 'Coding',
        urls: [
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC29ju8bIPH5as8OGnQzwJyA&maxResults=${maxResults}&order=date&type=video`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFbNIlppjAuEX4znoulh0Cw&maxResults=${maxResults}&order=date&type=video`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UClb90NQQcskPUGDIXsQEz5Q&maxResults=${maxResults}&order=date&type=video`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJZv4d5rbIKd4QHMPkcABCw&maxResults=${maxResults}&order=date&type=video`
        ]
    },
    {
        type: 'Entertainment',
        urls: [
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_AFyA9FqrZ57bb9QRH77wg&maxResults=${maxResults}&order=date&type=video`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCR1D15p_vdP3HkrH8wgjQRw&maxResults=${maxResults}&order=date&type=video`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqFMzb-4AUf6WAIbl132QKA&maxResults=${maxResults}&order=date&type=video`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDoJIpPvtEwFvfNXsZvCqKw&maxResults=${maxResults}&order=date&type=video`
        ]
    },
]

export default youtubeURLS;