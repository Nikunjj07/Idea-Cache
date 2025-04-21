import './App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Publish } from './pages/Publish'

function App() {

  return (
    <div className='font-serif'>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/publish' element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App