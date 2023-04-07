import { ArrowIcon } from './Icons'

const genreTags = {
  Drama: {
    className: 'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full',
    icon: <ArrowIcon />
  },
  Action: {
    className: 'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full',
    icon: <ArrowIcon />
  },
  'Science Fiction': {
    className: 'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full',
    icon: <ArrowIcon />
  },
  Adventure: {
    className: 'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full',
    icon: <ArrowIcon />
  }
}

function GenreTag ({ id, name }) {
  const tagName = genreTags[name]
  const { className, icon } = tagName || {}

  if (className && icon) {
    return (
      <li key={id} className={className}>
        {icon} {name}
      </li>
    )
  } else {
    return (
      <li key={id} className='text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full'>
        <ArrowIcon /> {name}
      </li>
    )
  }
}

export function Tags ({ response }) {
  const { genres } = response.movieDetails
  console.log(genres)
  return (
    <>
      {genres && genres.map(genre => <GenreTag key={genre.id} {...genre} />)}
    </>
  )
}
