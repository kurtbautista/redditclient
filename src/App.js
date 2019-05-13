import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Posts from './components/posts/Posts'
import Post from './components/posts/Post'
import HeaderLayout from  './components/layout/HeaderLayout'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <HeaderLayout />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/hot/:id' component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
