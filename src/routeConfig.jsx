import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/public/Header'
import Footer from './components/public/Footer'
import IndexPage from './components/IndexPage'
import TopicPage from './components/TopicPage'
const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Route exact path='/' component={IndexPage} />
        <Route exact path='/topic/:id' component={TopicPage} />
        <Footer />
      </Fragment>
    </Router>
  )
}

export default Routes
