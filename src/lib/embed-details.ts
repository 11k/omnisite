type EmbedDetails = {
  platform: string
  channel: string
}

export const embedUrlForEmbedDetails = (embedDetails: EmbedDetails): string => {
  const { platform, channel } = embedDetails
  let params
  switch (platform) {
    case 'twitch':
      params = new URLSearchParams({
        channel,
        parent: process.env.NEXT_PUBLIC_TWITCH_EMBED_PARENT,
      })
      return `https://player.twitch.tv?${params.toString()}`
    case 'youtube':
      return `https://www.youtube.com/embed/${channel}`
    case 'twitch-vod':
      params = new URLSearchParams({
        video: channel,
        parent: process.env.NEXT_PUBLIC_TWITCH_EMBED_PARENT,
      })
      return `https://player.twitch.tv?${params.toString()}`
    default:
      return null
  }
}

export const embedDetailsFromHash = (hash: string): EmbedDetails => {
  if (!hash) {
    return null
  }

  hash = hash.substr(1)
  if (!hash) {
    return null
  }

  const [platform, channel] = hash.split('/')
  if (!platform || !channel) {
    return null
  }

  return {
    platform,
    channel,
  }
}
