
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'

import Blogs from './compunent/Bloges/Blogs'

import Header from './compunent/header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const HandelBookmarks = blog => {

    const NewBookmarks = [...bookmarks, blog]
    setBookmarks(NewBookmarks)

  }



  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs HandelBookmarks={HandelBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>

      </main>
    </>
  )
}

export default App
