import { h, Component } from 'preact'
import Splash from '../../components/splash'
import style from './style'

export default class Home extends Component {
  render () {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <Splash />
        <p>This is the Home component.</p>
      </div>
    )
  }
}
