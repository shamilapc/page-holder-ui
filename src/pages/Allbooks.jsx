 import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllBooksApi } from '../api/allApi';


function Allbooks() {

  useEffect(() => {
   displayBooks()
  })
  

const [books,setBooks] = useState([])
const [selectedFilter, setSelectedFilter] = useState("All Books");
const displayBooks=async()=>{
  const res = await getAllBooksApi()
  setBooks(res.data)
  console.log(res);
  
  
}
const getButtonStyle = (filterName) => {
    const isActive = selectedFilter === filterName;
    return {
      backgroundColor: isActive ? '#243C35' : '#ffffff',
      color: isActive ? '#ffffff' : '#1e3a34',
      border: '1px solid #d1d5db',
      borderRadius: '50px',
      padding: '6px 16px',
      fontSize: '13px',
      fontWeight: '500',
      outline: 'none'
    }
  }
  const filteredBooks = books.filter(book => {
    if (selectedFilter === "All Books") return true;
    return book.readingStatus === selectedFilter;
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F4EC' }}>
      <Container fluid className="px-4 px-md-5 py-3">
        <Row className="align-items-center mb-4">
          <Col>
            <h1 style={{ color: '#243C35', fontWeight: 600 }}>
              My Books
            </h1>
            <p style={{ color: '#66736B', marginBottom: 0 }}>
              Every story in one place. Keep your reading journey organized.
            </p>
          </Col>
        </Row>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
          <button 
            style={getButtonStyle("All Books")} 
            onClick={() => setSelectedFilter("All Books")}
          >
            All Books
          </button>

          <button 
            style={getButtonStyle("Currently Reading")} 
            onClick={() => setSelectedFilter("Currently Reading")}
          >
            Currently Reading
          </button>

          <button 
            style={getButtonStyle("Want to Read")} 
            onClick={() => setSelectedFilter("Want to Read")}
          >
            Want to Read
          </button>

          <button 
            style={getButtonStyle("Completed")} 
            onClick={() => setSelectedFilter("Completed")}
          >
            Completed
          </button>
        </div>

        <BookCards filteredBooks={filteredBooks} setBooks={setBooks} />
      </Container>
    </div>
  )
}

export default Allbooks
 




