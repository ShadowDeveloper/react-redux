import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Main extends React.Component{
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>
            Rendering with React
          </Link>
        </h1>
      </div>
    );
  }
}

export default Main;