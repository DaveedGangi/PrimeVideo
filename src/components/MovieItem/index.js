// Write your code here

import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {eachElement} = props

  return (
    <div>
      <Popup
        position="right top"
        modal
        trigger={
          <img
            className="EachImage"
            src={eachElement.thumbnailUrl}
            alt="thumbnail"
          />
        }
      >
        {close => (
          <div className="bgVideo">
            <div className="closeButton">
              <button
                className="closeBt"
                data-testid="
              closeButton"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose /> {/* */}
              </button>
            </div>

            <div className="Video">
              <ReactPlayer
                width="96%"
                controls="true"
                className="Vi"
                url={eachElement.videoUrl}
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
