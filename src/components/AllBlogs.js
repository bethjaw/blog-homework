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
    const response = await fetch('https://bloghomework.herokuapp.com/blogs')
    const json = await response.json()
    this.setState({blogs: json})
  }

  async updateBlog(post){
    const response = await fetch('https://bloghomework.herokuapp.com/blog', {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.componentDidMount()
  }

  markRead = (blog) => {
    let blogid = blog.id

    const updateRead = {
      "id": blogid,
      "read": true
    }
    this.updateBlog(updateRead)
  }


  render(){
    return (
      <div className='allblogs'>
        {this.state.blogs.map((blog) => {
          return (
            <SingleBlog
              key={blog.id}
              blog={blog}
              markRead={this.markRead}
            />
          )
        })}
      </div>
    )
  }
}
