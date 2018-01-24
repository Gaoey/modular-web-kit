import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './router.js'
import configureStore from './store/configureStore'
const store = configureStore()

const App = () => {
    return (
        <BrowserRouter>
            <Router store={store} />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
