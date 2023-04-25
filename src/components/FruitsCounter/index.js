import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {manCount: 0, banCount: 0}

  onMangoCount = () => {
    this.setState(prevState => ({
      manCount: prevState.manCount + 1,
    }))
  }

  onBananaCount = () => {
    this.setState(prevState => ({
      banCount: prevState.banCount + 1,
    }))
  }

  render() {
    const {manCount, banCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count-color">{manCount}</span> mangoes
            <span className="count-color">{banCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                alt="mango"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                type="button"
                className="click-btn"
                onClick={this.onMangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                alt="banana"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                type="button"
                className="click-btn"
                onClick={this.onBananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
