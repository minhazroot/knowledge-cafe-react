
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'

import Blogs from './compunent/Bloges/Blogs'

import Header from './compunent/header/Header'


function App() {


  return (
    <>
      <Header></Header>
      <main className='md:flex '>
        <Blogs></Blogs>
        <Bookmarks ></Bookmarks>

      </main>
    </>
  )
}

export default App
