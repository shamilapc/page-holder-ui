
import './App.css'
import Header from './components/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Addbooks from './pages/Addbooks'
import Allbooks from './pages/Allbooks'
import Edit from './pages/Edit'


function App() {
const location = useLocation();
 
  const inSideAllBooks = location.pathname === '/all-books';

  return (
    <>
    <Header inSideAllBooks={inSideAllBooks}/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/add-books' element={<Addbooks/>}/> 
      <Route path='/all-books' element={<Allbooks />}/> 
      <Route path='/:id/edit-books' element={<Edit/>}/> 
    </Routes>
    </>
  )
}

export default App
