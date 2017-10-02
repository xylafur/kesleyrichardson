import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './router'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

render(
  <Router>
    <div>
      <Routes />
    </div>
  </Router>,
  document.getElementById('root')
)
