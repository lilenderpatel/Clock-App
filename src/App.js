import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {handile: false}

  onClickTaggleClock = () => {
    this.setState(prevState => {
      const {handile} = prevState
      return {
        handile: !handile,
      }
    })
  }

  render() {
    const {handile} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickTaggleClock}
        >
          {handile ? 'Show Clock' : 'Hide Clock'}
        </button>
        {handile && <Clock />}
      </div>
    )
  }
}

export default App
