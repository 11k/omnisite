export const embedUrlForEmbedDetails = (embedDetails) => {
    const { platform, channel } = embedDetails
    let params
    switch (platform) {
        case 'twitch':
            params = new URLSearchParams({
                channel: channel,
            })
            return 'https://player.twitch.tv?' + params.toString()
        case 'youtube':
            return 'https://www.youtube.com/embed/' + channel
        case 'twitch-vod':
            params = new URLSearchParams({
                video: channel,
            })
            return 'https://player.twitch.tv?' + params.toString()
        default:
            throw new Error('This platform is unsupported.')
    }
}
