import { useParams } from 'react-router-dom'
import { useMoviesDetails } from '../hooks/useMoviesDetails.js'
import { IMAGE } from '../../config.js'
import { Tags } from '../components/Tags.jsx'
import { useCast } from '../hooks/useCast.js'
import { Cast } from '../components/Cast.jsx'

export function MovieDetails () {
  const { moviesId } = useParams()
  const { movieDetails } = useMoviesDetails(moviesId)
  const { cast } = useCast(moviesId)

  return (
    <main>
      <section className='flex flex-wrap md:p-16 gap-4 bg max-sm:flex-col sm:shrink-0 justify-cente'>
        <img src={`${IMAGE}${movieDetails.poster_path}`} className='object-contain' />

        <div className='flex-1 flex flex-col justify-between m-6'>
          <h3 className='flex max-w-4xl text-3xl font-medium
   tracking-tight font-display text-white sm:text-5xl gap-x-2'
          >{movieDetails.original_title}
          </h3>
          <p className='text-white text-justify'>{movieDetails.overview}</p>
          <span className='text-white'>{movieDetails.release_date}</span>
          <ul className='flex gap-3 flex-wrap'>
            <Tags response={{ movieDetails }} />
          </ul>
        </div>
      </section>
      <Cast cast={cast} />
    </main>
  )
}
