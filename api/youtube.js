export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = "UCD-D-gafhlFd3wc-rV3AvPQ";

  try {
    // ライブ配信確認
    const liveResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
    );

    const liveData = await liveResponse.json();

    if (liveData.items && liveData.items.length > 0) {
      const liveVideo = liveData.items[0];

      return res.status(200).json({
        live: true,
        videoId: liveVideo.id.videoId,
        title: liveVideo.snippet.title
      });
    }

    // ライブしていない場合
    return res.status(200).json({
      live: false
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
}
