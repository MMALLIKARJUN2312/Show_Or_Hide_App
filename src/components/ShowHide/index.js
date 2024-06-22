// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  firstNameButton = () => {
    this.setState(previousState => ({
      showFirstName: !previousState.showFirstName,
    }))
  }

  lastNameButton = () => {
    this.setState(previousState => ({
      showLastName: !previousState.showLastName,
    }))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="first-name-container">
              <button
                className="first-name-button"
                type="button"
                onClick={this.firstNameButton}
              >
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="name">Joe</p>}
            </div>
            <div className="last-name-container">
              <button
                className="last-name-button"
                type="button"
                onClick={this.lastNameButton}
              >
                Show/Hide Lastname
              </button>
              {showLastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
