import Star from './Star'

const Stars = ({ ratings, color, size }) => {
  let grey = '#d2d2d2'
  return (
    <div className="star">
      {Array.from({ length: 5 }).map((und, index) => (
        <Star key={index} color={ratings > index ? color : grey} size={size} />
      ))}
    </div>
  )
}

export default Stars
