import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { addBookApi } from '../api/allApi';
import { useNavigate } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function AddBook() {
  const navigate = useNavigate()
  const [bookData, setBookData] = useState({
    bookTitle: "",
    authorName: "",
    genre: "",
    readingStatus: "",
    totalPages: "",
    currentPage: "",
    bookCover: ""
  })
  
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  /* const addBook = async (e) => {
    if (e) e.preventDefault(); 
    const { bookTitle, authorName, genre, readingStatus, totalPages, currentPage, bookCover } = bookData;

    if (bookTitle && authorName && genre && readingStatus && totalPages && currentPage && (bookCover || selectedFile)) {
      try {
        setUploading(true);
     
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile);
          formData.append(
            "upload_preset",
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
          );

          const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData
            }
          );

          const response = await uploadResponse.json();
          const coverUrl = response.secure_url;
          const cover = setBookData({...bookData,bookCover:coverUrl})

        }

       
        const res = await addBookApi(bookData);
        
        if (res && (res.status === 200 || res.status === 201)) {
          alert("Book added successfully!");
          setSelectedFile(null);
        } else {
          alert("Failed to add book via API.");
        }

      } catch (error) {
        console.error("Error during upload or submission:", error);
        alert("An error occurred. Check console for details.");
      } finally {
        setUploading(false);
      }

    } else {
      alert("Please fill in all fields completely!");
    }
  } */


const addBook = async (e) => {
    if (e) e.preventDefault()
    const { bookTitle, authorName, genre, readingStatus, totalPages, currentPage, bookCover } = bookData;

    if (bookTitle && authorName && genre && readingStatus && totalPages && currentPage && (bookCover || selectedFile)) {
   
        setUploading(true);
        let currentBookData = { ...bookData }

        if (selectedFile) {
          const formData = new FormData()
          formData.append("file", selectedFile)
          formData.append(
            "upload_preset",
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
          );

          const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData
            }
          );

          const response = await uploadResponse.json()
          const coverUrl = response.secure_url
          
         
          currentBookData.bookCover = coverUrl
          setBookData(currentBookData)
        }

        const res = await addBookApi(currentBookData);
        
        if (res.status === 200 || res.status === 201) {
          alert("Book added successfully!")
          setSelectedFile(null);
           navigate('/all-books')
        } else {
          alert("Failed to add book via API.")
        }

   
        setUploading(false);
   

    } else {
      alert("Please fill in all fields completely!")
    }
  }


  return (
    <Paper elevation={3}
      className=" px-4 px-md-5 py-5"
      style={{ backgroundColor: '#E9E4D9', minHeight: '100vh' }}
    >
      <div className="mb-4">
        <h2 style={{ color: '#243C35' }}>Add a New Book</h2>
        <p style={{ color: '#66736B' }}>
          Add a new story to your library.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
          <div
            className="card border-0 shadow-sm p-4 p-md-5"
            style={{ borderRadius: '16px' }}
          >
            <div className="text-center mb-4">
              <i
                className="fa-solid fa-book-open fs-1 mb-3"
                style={{ color: '#A8BDA5' }}
              ></i>
              <h4 style={{ color: '#243C35' }}>Book Details</h4>
              <p className="text-muted mb-0">
                Fill in the details below to add a book.
              </p>
            </div>

            <Form style={{ color: '#243C35' }} onSubmit={addBook}>
              <Form.Group className="mb-3">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" value={bookData.bookTitle} onChange={(e)=>setBookData({...bookData,bookTitle:e.target.value})} placeholder="Enter book title" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author's name" value={bookData.authorName} onChange={(e)=>setBookData({...bookData,authorName:e.target.value})} /> 
              </Form.Group>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <FormControl fullWidth>
                    <InputLabel>Genre</InputLabel>
                    <Select label="Genre" value={bookData.genre} onChange={(e)=>setBookData({...bookData,genre:e.target.value})} >
                      <MenuItem value="Fiction">Fiction</MenuItem>
                      <MenuItem value="Fantasy">Fantasy</MenuItem>
                      <MenuItem value="Mystery">Mystery</MenuItem>
                      <MenuItem value="Romance">Romance</MenuItem>
                      <MenuItem value="Self-help">Self-help</MenuItem>
                      <MenuItem value="Biography">Biography</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="col-md-6 mb-3">
                  <FormControl fullWidth >
                    <InputLabel>Reading Status</InputLabel>
                    <Select label="Reading Status" value={bookData.readingStatus} onChange={(e)=>setBookData({...bookData,readingStatus:e.target.value})} >
                      <MenuItem value="Want to Read">Want to Read</MenuItem>
                      <MenuItem value="Currently Reading"> Currently Reading </MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Total Pages</Form.Label>
                    <Form.Control type="number" placeholder="e.g. 320" value={bookData.totalPages} onChange={(e)=>setBookData({...bookData,totalPages:e.target.value})} />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Current Page</Form.Label>
                    <Form.Control type="number" placeholder="e.g. 0" value={bookData.currentPage} onChange={(e)=>setBookData({...bookData,currentPage:e.target.value})} />
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Book Cover</Form.Label>
                <TextField 
                  fullWidth 
                  type="url" 
                  placeholder="Paste book cover image URL" 
                  value={bookData.bookCover} 
                  onChange={(e) => {
                    setBookData({ ...bookData, bookCover: e.target.value });
                    setSelectedFile(null);
                  }}  
                />
               
                <div className='text-center mt-1'>
                  <span>OR</span>
                </div>
                
                <Button  
                  component="label"  
                  variant="contained" 
                  tabIndex={-1} 
                  startIcon={<CloudUploadIcon />} 
                  className="p-4 text-center rounded-3 w-100 mt-2"
                  style={{ border: '2px dashed #A8BDA5', backgroundColor: '#F7F4EC', color: '#243C35' }}
                > 
                  {selectedFile ? selectedFile.name : "Upload files"}
                  <VisuallyHiddenInput 
                    type="file" 
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        setSelectedFile(file); 
                      }
                    }}
                  />
                </Button>
              </Form.Group>

              <div className="d-flex gap-3 mt-4">
                <button  
                  disabled={uploading}
                  className="btn py-2 border-0 w-100" 
                  style={{ backgroundColor: '#243C35', color: '#ffffff', borderRadius: '8px' }} onClick={()=>addBook()}
                >
                  <i className="fa-solid fa-plus me-2"></i>
                  Add Book
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default AddBook