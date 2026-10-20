import React from 'react'
import { Navbar, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({inSideAllBooks}) {
  return (

        <Navbar style={{backgroundColor:"#243C35"}}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center text-light">
          <img src='/cover.png'
            className="image-fluid" style={{height:'40px'}} />
          <span className="ms-2 text-light" style={{fontWeight: 'bolder',fontSize:'22px' }}>
            pageHolder
          </span>
        </Navbar.Brand>
  
{  
inSideAllBooks &&
<Form className="d-flex mx-auto"style={{ width: '40%' }}>
  <div className="position-relative w-100">
    <Form.Control type="search"placeholder="Search books"className="pe-5" aria-label="Search" style={{ borderRadius:'100px' }} />

  </div>
</Form>}

       <div className="d-flex align-items-center gap-2 ms-2" style={{fontWeight:'bold'}}>

<Link to={'/'} style={{textDecoration:'none',color:'#ffffff'}}>Home</Link>
<Link to={'/all-books'} style={{textDecoration:'none',color:'#C69C58'}}>All Books </Link> 

<Link to={'/add-books'}className='btn border-0' style={{textDecoration:'none',backgroundColor:'#A8BDA5',color:'#243C35',fontWeight:'bold'}}>+ Add Books</Link>
  
</div> 

      </Container>
    </Navbar>

  )
}

export default Header