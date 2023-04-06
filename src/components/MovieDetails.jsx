import { useParams } from 'react-router-dom'
import { useMoviesDetails } from '../hooks/useMoviesDetails.js'
import { IMAGE } from '../../config.js'

export function MovieDetails () {
  const { moviesId } = useParams()
  const { movieDetails } = useMoviesDetails(moviesId)
  console.log(movieDetails)
  return (
    <>
      <section className='flex flex-wrap p-6 gap-4 bg max-sm:flex-col sm:shrink-0'>
        <img src={`${IMAGE}${movieDetails.poster_path}`} className='object-contain' />

        <div className='flex-1 flex flex-col justify-between'>
          <h3 className='text-white'>{movieDetails.original_title}</h3>
          <p className='text-white'>{movieDetails.overview}</p>
          <b className='text-white'>{movieDetails.release_date}</b>
        </div>
      </section>
    </>
  )
}
