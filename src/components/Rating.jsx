import { ratingMovie } from '../utils/useRating'

export function Rating ({ rating }) {
  const { startsRating } = ratingMovie(rating)
  return (
    <>
      <div className='flex flex-col items-center justify-items-end'>
        <span className='text-white text-3xl'>{startsRating}</span>
        <span className='text-white'>Rating: {rating}</span>
      </div>
    </>
  )
}
