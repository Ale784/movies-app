export const IMAGE = 'https://image.tmdb.org/t/p/w400'
export const API_KEY = import.meta.env.VITE_APi_KEY
export const BASE_URL = 'https://api.themoviedb.org/3/movie/'

export const POPULAR_MOVIES_URL = `${BASE_URL}popular?api_key=${API_KEY}&language=en-US`
