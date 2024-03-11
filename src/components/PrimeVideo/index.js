// Write your code here

import MoiveSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const MovieAction = moviesList.filter(each => each.categoryId === 'ACTION')

  const MovieComedy = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="bg">
      <div className="Prime">
        <img
          className="PrimeImage"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
          alt="prime video"
        />
      </div>
      <div>
        <h1 className="head">Action Movies</h1>
        <div className="Action">
          <MoiveSlider eachElements={MovieAction} />
        </div>
      </div>
      <div>
        <h1 className="head">Comedy Movies</h1>
        <div className="Comedy">
          <MoiveSlider eachElements={MovieComedy} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
