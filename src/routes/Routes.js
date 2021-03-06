import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Careers from '../pages/careers/Careers'
import Contact from '../pages/contact/Contact'
import Gallery from '../pages/gallery/Gallery'
import Home from '../pages/home/Home'
import Partners from '../pages/partners/Partners'
import Teams from '../pages/teams/Teams'

const Routes = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/teams" exact component={Teams}/>
          <Route path="/careers" exact component={Careers}/>
          <Route path="/partners" exact component={Partners}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </Router>
  )
}

export default Routes