'use client'
import styles from './SearchBar.module.css'
import { useState, useEffect } from 'react'

interface SearchBarProps {
    placeholder: any,
    data: any
}

function SearchBar({placeholder, data}: SearchBarProps) {
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchData, setSearchData] = useState<any[]>([]);

    useEffect(() => {
        setSearchData(data);
      }, [data]);
      
    const inputFilterHandler = (e: any) => {
        const input = e.target.value
        const filteredVideoTitlesArr = searchData.filter((item: any) => {
            return item.snippet.title.toLowerCase().includes(input.toLowerCase())
        }) 
        if(input === ''){
            setFilteredData([])
        } else {
            setFilteredData(filteredVideoTitlesArr)
        }
    }

  return (
    <div className={styles.search}>
        <div className={styles.search_inputs}>
            <input className={styles.search_input}type="text" placeholder={placeholder} onChange={inputFilterHandler}/>
            <div className={styles.search_icon}></div>
        </div>
        {filteredData.length != 0 && (
            <div className={styles.data_result}>
            {filteredData.slice(0, 5).map((item: any) => {
                return <a   
                            className={styles.data_item} 
                            href={`https://www.youtube.com/watch?v=${item.id.videoId}`} 
                            target="_blank"
                            key={item.id.videoId}
                        > 
                        <p>{item.snippet.title} </p>
                        </a>
                    })
                    }
            </div>
        )}
    </div>
  )
}

export default SearchBar