import {Component} from 'react'
import DestinationSearch from 'src/components/DestinationSearch/index.js'

import './index.css'

const initialDestinationDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class Destination extends Component {
  state: {
    searchInput: '',
    destinationDetailsList: initialDestinationDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {destinationDetailsList} = this.state
    const filteredUsersData = destinationDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      destinationDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, destinationDetailsList} = this.state
    const searchResults = destinationDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="destination-container">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="image-container">
          {destinationDetailsList.map(eachUser => (
            <DestinationSearch
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Destination
