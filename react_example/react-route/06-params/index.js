import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'

render(
	  <Router history={hashHistory}>
	    <Route path="/" component={App}>
	      {/* make them children of `App` */}
	      <Route path="/repos" component={Repos}/>
	      <Route path="/about" component={About}/>
	    </Route>
	  </Router>
	, document.getElementById('app')
)