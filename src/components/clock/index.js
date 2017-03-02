import React, {Component} from 'react'

class Clock extends Component {
  constructor (props) {
    super(props);

    this.state = {
      time: new Date()
    }
  }

  componentDidMount () {
    this.timer = setInterval(
      () => this.tick(),
      1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  render () {
    return (
      <div>
        <h3>Time</h3>
        <p>{this.state.time.toString()}</p>
      </div>
    )
  }
}

export default Clock
