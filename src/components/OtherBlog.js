import React from 'react';
import SingleBlog from './SingleBlog'


export default class OtherBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      otherblogs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/users/2/blogs')
    const json = await response.json()
    this.setState({otherblogs: json})
  }

  async updateBlog(post){
    const response = await fetch('https://bloghomework.herokuapp.com/blogs', {
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
    return(
      <div>
        {this.state.otherblogs.map((blog) => {
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
