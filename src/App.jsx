import './App.css'
import { TopMovies } from './pagination/TopMovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MovieDetails } from './pagination/MovieDetails'
import { NavBar } from './components/Navbar'

function App () {
  return (
    <main className='flex flex-col w-full text-font_color p-6'>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopMovies />} />
          <Route path='/details/:moviesId' element={<MovieDetails />} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path='*'
            element={<TopMovies />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
