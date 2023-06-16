const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

interface fetchYoutubePlaylistDataProps {
  urls: any;
}

async function fetchYoutubePlaylistData({ urls }: fetchYoutubePlaylistDataProps) {
    try {
      const dataPromises = urls.map((url: any) => fetchPlaylistData(url));
      const data = await Promise.all(dataPromises);

      return data;
    } catch (err) {
      throw new Error('Failed to fetch YouTube playlist data');
    }
  }
  
  async function fetchPlaylistData(url: string) {
    try {
      const res = await fetch(`${url}&key=${apiKey}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data from the YouTube API');
      }
      const data = await res.json();
      return data.items;
    } catch (err) {
      console.error(err);
      return [];
    }
  }



  
  

  

export default fetchYoutubePlaylistData;