import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Route from './route'
import Dashboard from 'dashboard'
import Home from 'home'
import CreateProject from 'pages/CreateProject/CreateProject' // Create project
import Messages from 'pages/Messages/Messages' // Messages
import Videos from 'pages/Videos/Videos' // Videos
import Projects from 'pages/Projects/Projects' // Projects
import Profile from 'pages/Profile/Profile' // Profile

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" layout="primary" component={() => <Home />} />
        <Route path="/dashboard" exact layout="secondary" nav="createProj" component={() => <Dashboard />} />
        <Route path="/create-project" exact layout="secondary" nav="createProj" component={() => <CreateProject />} />
        <Route path="/messages" exact layout="secondary" nav="messages" component={() => <Messages />} />
        <Route path="/videos" exact layout="secondary" nav="videos" component={() => <Videos />} />
        <Route path="/projects" exact layout="secondary" nav="projects" component={() => <Projects />} />
        <Route path="/profile" exact layout="secondary" nav="profile" component={() => <Profile />} />
      </Switch>
    </Router>
  )
}

export default Routes
