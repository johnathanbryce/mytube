const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

interface fetchYoutubePlaylistDataProps {
  urls: string[];
}

async function fetchYoutubePlaylistData({ urls }: fetchYoutubePlaylistDataProps) {
    try {
      const dataPromises = urls.map((url: any) => fetchPlaylistData(url));
      const data = await Promise.all(dataPromises);
      return { data, error: false};
    } catch (err) {
      return { data: [], error: true};                    // change to false if testing for error messages in dev
    }
  }
  
  async function fetchPlaylistData(url: string) {
    try {
      const res = await fetch(`${url}&key=${apiKey}`);
      console.log('data fetched')
      if (!res.ok) {
        throw new Error('Failed to fetch data');         // triggers catch statement below
      }
      const data = await res.json();
      return data.items;
    } catch (err) {
      console.log(err)
      throw new Error('Error fetching data')             // triggers catch statement above
      //return [];
    }
  }

export default fetchYoutubePlaylistData;