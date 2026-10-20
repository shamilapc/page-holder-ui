import React, { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import BookBanner from '../components/BookBanner'
import { getAllBooksApi } from '../api/allApi';



function Home() {
 const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  });

  const fetchBooks = async () => {

      const res = await getAllBooksApi();
      setBooks(res.data )

    }

  return (
    <div className='pageHolder' style={{minHeight:'100vh',backgroundColor:' #F7F4EC'}}>
        <div className="p-4 p-md-5">
            <h2 className='fw-0' style={{fontWeight:'normal'}}>My Library</h2>
            <span>Keep track of every story.</span>
            <StatCard books={books}/>
            <BookBanner books={books}/>
        </div>
    </div>
  )
}

export default Home