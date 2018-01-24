import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { Main } from './scene'

const Router = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={Main} />
    </div>
  </Provider>
)

Router.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Router