import { h, Component } from 'preact'
import style from './style'

const initialState = {
  showing: true
}

export default class Splash extends Component {
  constructor () {
    super()
    this.state = initialState
  }

  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({showing: false})
    }, 2000)
  }
  render () {
    if (!this.state.showing) return null
    return (
      <div class={style.splash}>
        <h1>Preact PWA</h1>
      </div>
    )
  }
}
