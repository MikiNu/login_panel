import React from 'react'
import { Route, Switch } from 'react-router-dom'

import  {App} from './components/App'
import  {FormAuthController} from './components/AuthForm'   //комп-т  "Форма логина"
import  {basicLayoutController} from './components/basicLayout'   //комп-т  "Рабочий стол"
import  {HomeController} from './components/Home'
import  requireAuthentication from './components/requireAuth'
import  {LoggedInLayout} from './components/LoggedInLayout'
import  {SPageController} from './components/SPage'


export const routes = (
  <div>
    <Switch>
        <Route exact path='/' component={requireAuthentication(basicLayoutController)}/>
        <Route path='/about' component={SPageController} />
        <Route path='/login' component={FormAuthController} />
        <Route exact path='/home' component={requireAuthentication(HomeController)}/>
    </Switch>
  </div>
)
