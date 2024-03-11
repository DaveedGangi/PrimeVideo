// Write your code here

import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MovieSlider = props => {
  const {eachElements} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <div>
      <Slider {...settings}>
        {eachElements.map(each => (
          <MovieItem eachElement={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
