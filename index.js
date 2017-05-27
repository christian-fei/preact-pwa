import './style'

import { h } from 'preact'
import { Router } from 'preact-router'

import Header from './components/header'
import Splash from './components/splash'
import Home from './routes/home'
import Profile from './routes/profile'

if (global.navigator && 'serviceWorker' in global.navigator) {
  global.navigator.serviceWorker.register('/sw.js')
  .catch(() => console.error('failed to register /sw.js'))
}

export default () => (
  <div id='app'>
    <Header />
    <Splash />
    <Router>
      <Home path='/' />
      <Profile path='/profile/' user='me' />
      <Profile path='/profile/:user' />
    </Router>
  </div>
)
