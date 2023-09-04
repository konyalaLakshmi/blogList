// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="li">
      <div className="first">
        <h1 className="title">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr" />
    </li>
  )
}

export default BlogItem
