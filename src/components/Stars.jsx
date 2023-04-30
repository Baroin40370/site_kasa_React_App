import Star from './Star'

const Stars = ({ ratings, color, size }) => {
  let grey = '#d2d2d2'
  return (
    <div className="star">
      <Star color={ratings > 0 ? color : grey} size={size}></Star>
      <Star color={ratings > 1 ? color : grey} size={size}></Star>
      <Star color={ratings > 2 ? color : grey} size={size}></Star>
      <Star color={ratings > 3 ? color : grey} size={size}></Star>
      <Star color={ratings > 4 ? color : grey} size={size}></Star>
    </div>
  )
}

export default Stars
