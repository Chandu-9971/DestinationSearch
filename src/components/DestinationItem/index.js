import './index.css'

const DestinationItem = props => {
  const {userDetails, deleteUser} = props
  const {id, name, imgUrl, uniqueNo} = userDetails
  const onDelete = () => {
    deleteUser(uniqueNo)
  }
  return (
    <li className="destination-search-container">
      <img src={id} className="img-pic" alt="profile-pic" />
      <div className="destination-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {imgUrl} </p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default DestinationItem
