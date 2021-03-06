import React from 'react'
import { render } from 'react-dom'
import Provider from './Provider'
import ControlPanel from './views/ControlPanel'
import store from './store'

render(
    <Provider store={ store } >
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
)