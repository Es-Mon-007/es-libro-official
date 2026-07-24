export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = "UCD-D-gafhlFd3wc-rV3AvPQ";

  try {

    // ライブ確認
    const liveResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
    );

    const liveData = await liveResponse.json();

    // 最新アーカイブ取得
    const archiveResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=3&key=${apiKey}`
    );

    const archiveData = await archiveResponse.json();

    const archives = archiveData.items.map(item => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      videoId: item.id.videoId,
      date: item.snippet.publishedAt.substring(0,10)
    }));

    res.status(200).json({

      live:
        liveData.items &&
        liveData.items.length > 0,

      liveVideo:
        liveData.items &&
        liveData.items.length > 0
          ? {
              title: liveData.items[0].snippet.title,
              videoId: liveData.items[0].id.videoId
            }
          : null,

      archives

    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
}
