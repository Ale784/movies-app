const IMAGE = 'https://image.tmdb.org/t/p/w200'

export function TopMovies ({ topMovies }) {
  return (
    <section className='flex flex-col gap-6 justify-center items-center'>

      <h2 className='text-white text-center text-3xl'>Top Movies</h2>

      <div className='grid-cols-1
          md:grid hidden md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'
      >
        {topMovies && (

          topMovies.map((movie) => (
            <article
              key={movie.id} className='bg-white rounded overflow-hidden shadow-lg cursor-pointer p-1
              w-52'
            >
              <img src={`${IMAGE}${movie.poster_path}`} />
              <footer className='px-6 py-4'>
                <span className='text-gray-700 text-base'>{movie.original_title}</span>
              </footer>
            </article>
          ))

        )}
      </div>
      {/** Mobile view */}
      <div className='grid-cols-1 md:grid show lg:hidden'>
        <div className='flex flex-col'>
          {topMovies && (

            topMovies.map((movie) => (
              <article
                key={movie.id} className=' flex
                  bg-[#1F2937] overflow-hidden shadow-lg cursor-pointer p-2 border-b-2 border-gray-600 pb-9'
              >
                <img
                  src={`${IMAGE}${movie.poster_path}`} width='100px' height='20px'
                  className='rounded-t-lg '
                />
                <footer className='flex flex-col justify-between px-6 py-4 text-white'>
                  <span className='font-bold '>{movie.original_title}</span>
                  <span className='text-base text-gray-400'>Release: {movie.release_date}</span>
                </footer>
              </article>
            ))

          )}
        </div>
      </div>
    </section>
  )
}
