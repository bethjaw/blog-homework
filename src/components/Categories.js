import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import YourBlog from './YourBlog'
import OtherBlog from './OtherBlog'
import GroupBlog from './GroupBlog'
import AllBlogs from './AllBlogs'


export default class Categories extends React.Component {

  render(){
    return(
      <div>
        <Router>
          <div>
            <div className='categories'>
              <Link to="/allblogs"><button className='catBtn'>All</button></Link>
              <Link to="/otherblogs"><button className='catBtn'>By Others</button></Link>
            </div>
            <Route path="/otherblogs" component={OtherBlog} />
            <Route path="/allblogs" component={AllBlogs} />
          </div>
        </Router>
      </div>
    )
  }
}
