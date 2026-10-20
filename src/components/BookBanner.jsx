import React from 'react';
import { Link } from 'react-router-dom';

function BookBanner({ books }) {
  const currentBooks = books?.filter(book => book.readingStatus === "Currently Reading") || [];

  return (
    <div className="row mt-4 mx-0">
      <div className="col-12 p-4" style={{ backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
        {currentBooks.length > 0 ? 
          currentBooks.map((currentBook, index) => {
            const progress = Number(currentBook.totalPages) > 0
              ? Math.min(100, Math.round((Number(currentBook.currentPage) / Number(currentBook.totalPages)) * 100))
              : 0

            return (
              <div 
                className={`d-flex align-items-center gap-3 ${index > 0 ? 'mt-4 pt-4 border-top' : ''}`}
              >
                <img
                  src={currentBook.bookCover || "https://placehold.co/100x130/e0dfc5/344b40?text=No+Cover"}
                  alt={currentBook.bookTitle}
                  style={{
                    width: '88px',
                    height: '130px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    border: '1px solid #d6d2b8'
                  }}
                />

                <div className="flex-grow-1">
                  <h5 className="mb-1" style={{ color: '#243C35', fontSize: '20px', fontWeight: '600' }}>
                    {currentBook.bookTitle}
                  </h5>
                  <p className="mb-3" style={{ color: '#66736B', fontSize: '15px' }}>
                    by {currentBook.authorName} • <span style={{ textTransform: 'capitalize' }}>{currentBook.genre}</span>
                  </p>

                  <div style={{ height: '7px', backgroundColor: '#e8e4da', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#A8BDA5', borderRadius: '10px', transition: 'width 0.4s ease' }}></div>
                  </div>

                  <p className="mt-2 mb-0" style={{ color: '#66736B', fontSize: '14px', fontWeight: '500' }}>
                    {progress}% completed <span className="text-muted" style={{ fontSize: '12px' }}>({currentBook.currentPage} / {currentBook.totalPages} pages)</span>
                  </p>
                </div>
              </div>
            );
          })
         : 
          <div className="text-center py-4">
            <h5 style={{ color: '#243C35', fontWeight: '600' }}>No book currently reading</h5>
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
              Update a book's status to "Currently Reading" to track your progress here!
            </p>
          </div>
        }

        <Link 
          to={'/add-books'}
          className="btn py-2 w-100 mt-4 border-0" 
          style={{ backgroundColor: '#243C35', color: '#ffffff', borderRadius: '8px', fontSize: '18px', fontWeight: '600', textDecoration: 'none', display: 'block', textAlign: 'center' }}
        >
          + Add a Book
        </Link>
      </div>
    </div>
  )
}

export default BookBanner