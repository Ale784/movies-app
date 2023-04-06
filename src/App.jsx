import './App.css'
import { NavBar } from './components/Navbar'
import { TopMovies } from './components/TopMovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Upcoming } from './components/Upcoming'
import { MovieDetails } from './components/MovieDetails'

function App () {
  return (
    <main className='flex flex-col gap-7 w-full text-font_color'>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopMovies />} />
          <Route path='/movies/upcoming' element={<Upcoming />} />
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
