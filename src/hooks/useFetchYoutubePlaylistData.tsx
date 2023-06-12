'use client'
import { useState, useEffect} from 'react'

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

interface useFetchYoutubePlaylistDataProps {
  url: any
}

function useFetchYoutubePlaylistData({url}: useFetchYoutubePlaylistDataProps) {
    const [playlistData, setPlaylistData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchData();
    }, [url]);
    
    const fetchData = async () =>{
        try{
            const res = await fetch(`${url}&key=${apiKey}`)
            const data = await res.json()
            console.log(data.items)
            setPlaylistData(data.items)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

  return {playlistData, loading}
}

export default useFetchYoutubePlaylistData