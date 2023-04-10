export function ratingMovie (rating) {
  const value = Math.floor(rating / 2)
  const starts = []
  for (let i = 0; i < 5; i++) {
    if (i <= value) {
      starts.push('⭐')
    } else {
      starts.push('☆')
    }
  }
  const startsRating = starts.join(' ')

  return { startsRating }
}
