import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function StatCard({ books }) {
  const totalBooks = books.length;
  const currentlyReadingCount = books.filter(book => book.readingStatus === "Currently Reading").length;
  const completedCount = books.filter(book => book.readingStatus === "Completed").length;
  return (
  <div className="row mt-5 g-4 ">

  <div className="col-lg-4 col-md-6">
    <Card className="border-0 shadow-sm p-3"
      style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
      <Card.Body>
        <i className="fa-solid fa-book-open fs-3 mb-2"
          style={{ color: '#243C35' }}></i>

        <Card.Title style={{ color: '#66736B' }}>
          Total Books
        </Card.Title>

        <Card.Text className="fs-2 fw-bold mb-0"style={{ color: '#243C35' }}>
          {totalBooks}
        </Card.Text>

        <small style={{color:'#243C35'}}>
          Books in your library
        </small>
      </Card.Body>
    </Card>
  </div>

  <div className="col-lg-4 col-md-6">
    <Card className="border-0 shadow-sm p-3"
      style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
      <Card.Body>
        <i className="fa-solid fa-book-bookmark fs-3 mb-2"
          style={{ color: '#C69C58' }}></i>

        <Card.Title style={{ color: '#66736B' }}>
          Currently Reading
        </Card.Title>

        <Card.Text className="fs-2 fw-bold mb-0"
          style={{ color: '#243C35' }}>
          {currentlyReadingCount}
        </Card.Text>

        <small style={{color:'#243C35'}}>
          Books in progress
        </small>
      </Card.Body>
    </Card>
  </div>

  <div className="col-lg-4 col-md-6">
    <Card className="border-0 shadow-sm p-3"
      style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
      <Card.Body>
        <i className="fa-solid fa-book-open-reader fs-3 mb-2"
          style={{ color: '#719477' }}></i>

        <Card.Title style={{ color: '#66736B' }}>
          Completed
        </Card.Title>

        <Card.Text className="fs-2 fw-bold mb-0"
          style={{ color: '#243C35' }}>
         {completedCount}
        </Card.Text>

        <small style={{color:'#243C35'}}>
          Books you've finished
        </small>
      </Card.Body>
    </Card>
  </div>

</div>
  )
}

export default StatCard