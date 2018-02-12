import React from 'react';
import YourBlog from './YourBlog'
import OtherBlog from './OtherBlog'
import GroupBlog from './GroupBlog'
import AddBlog from './AddBlog'
import '../index.css';


export default class Main extends React.Component {
  render(){
    return(
      <div className='allBlogs'>
        <YourBlog />
        <OtherBlog />
        <GroupBlog />
        {/* <AddBlog /> */}
      </div>
    )
  }
}
