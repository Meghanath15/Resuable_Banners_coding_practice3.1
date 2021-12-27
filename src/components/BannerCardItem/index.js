// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerItems} = props
  const {headerText, description, className} = bannerItems
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
