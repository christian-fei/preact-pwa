import './style'

import { h } from 'preact'
import { Router } from 'preact-router'

import Header from './components/header'
import Home from './routes/home'
import Profile from './routes/profile'

if (global.navigator && 'serviceWorker' in global.navigator) {
	console.log('adding serviceWorker')
  global.navigator.serviceWorker.register('/sw.js').then(function () {
    console.log('Service Worker Registered')
  })
}

export default () => (
  <div id='app'>
    <Header />
    <Router>
      <Home path='/' />
      <Profile path='/profile/' user='me' />
      <Profile path='/profile/:user' />
    </Router>
  </div>
)
