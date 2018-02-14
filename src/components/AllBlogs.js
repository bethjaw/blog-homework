import React from 'react';
import SingleBlog from './SingleBlog'

export default class AllBlogs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      blogs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/allblogs')
    const json = await response.json()
    this.setState({blogs: json})
  }

  render(){
    // console.log('allblogs state', this.state);
    // console.log('allblogs props', this.props);
    return (
      <div className='allblogs'>
        {this.state.blogs.map((blog) => {
          return (

            <SingleBlog
              key={blog.id}
              blog={blog}
              />
          )
        })}
      </div>
    )
  }
}
