import React from 'react'
import { Card, Badge, ProgressBar } from 'react-bootstrap';
import { deleteBookApi } from '../api/allApi';
import { Link } from 'react-router-dom';

function BookCards({ filteredBooks}) {
  const deleteBook= async(id)=>{
    const res = await deleteBookApi(id)
  }
  
  return (

    <>
      <div className="row mt-3">
        {filteredBooks?.map((book) => {
          const progress = book.totalPages > 0 
            ? Math.min(100, Math.round((Number(book.currentPage) / Number(book.totalPages)) * 100)) 
            : 0

          return (
            <div className="col-lg-3 col-12 mb-4" key={book.id || book.bookTitle}>
              <Card style={{ width: '100%', borderRadius: '16px', border: '1px solid #eaeaea', padding: '12px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)', position: 'relative' }}>
                
                <div style={{ position: 'absolute', top: '25px', left: '25px', right: '25px', display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
             <div className='d-flex justify-content-center align-items-center shadow-sm'   style={{ height: '30px',width: '30px',borderRadius: '50%', backgroundColor: 'white',}}> 
              <Link to={`/${book.id}/edit-books`}> 
           <i  className="fa-solid fa-pen"  style={{ fontSize: '13px', color: '#C69C58' }}  />
           </Link>
              </div> 


          <div className='d-flex justify-content-center align-items-center shadow-sm' style={{ height: '30px', width: '30px',  borderRadius: '50%',  backgroundColor: 'white', }}> 
             <i  className="fa-solid fa-trash" style={{ fontSize: '13px', color: '#f06e42' }} onClick={()=>deleteBook(book.id)}/>
            </div> 
            </div>

                <div style={{ backgroundColor: '#a3c9b8', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4 / 5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Card.Img src={book.bookCover} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <Card.Body className="p-2 pt-3 border-0">
                  <div className="mb-2">
                    <Badge bg="none" style={{ backgroundColor: '#fdeee9', color: '#f06e42', fontSize: '12px', fontWeight: '600', padding: '6px 10px', borderRadius: '6px' }}>
                      {book.readingStatus}
                    </Badge>
                  </div>

                  <Card.Title as="h5" className='d-block text-truncate' style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px' }}>
                    {book.bookTitle}
                  </Card.Title>

                  <Card.Text style={{ fontSize: '13px', color: '#6c757d', marginBottom: '12px' }}>
                    {book.authorName} <span style={{ margin: '0 2px' }}>•</span> {book.genre}
                  </Card.Text>

                  <ProgressBar style={{ height: '6px', backgroundColor: '#e9ecef', borderRadius: '4px', marginBottom: '6px' }}
                    children={<div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#718b7e', borderRadius: '4px' }} />} />

                  <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '500' }}>
                    {progress}% completed
                  </div>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BookCards