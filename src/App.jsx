
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'

import Blogs from './compunent/Bloges/Blogs'

import Header from './compunent/header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [redingTime, setRedingTime] = useState(0);

  const HandelBookmarks = blog => {

    const NewBookmarks = [...bookmarks, blog]
    setBookmarks(NewBookmarks)

  }
  const HandelRedingTime = (id, time) => {
    const NewTime = redingTime + time
    setRedingTime(NewTime)
    //remove the read blog from bookmark 
    // console.log('remove bookmark id', id)
    const ReaminingBookmark = bookmarks.filter(bookmark => bookmark.id != id);
    setBookmarks(ReaminingBookmark);

  }


  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs HandelBookmarks={HandelBookmarks} HandelRedingTime={HandelRedingTime} ></Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime} ></Bookmarks>

      </main>
    </>
  )
}

export default App
