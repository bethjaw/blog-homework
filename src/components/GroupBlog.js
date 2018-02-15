import React from 'react';
import SingleBlog from './SingleBlog'


export default class GroupBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      groupblogs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/groupblog/1')
    const json = await response.json()
    this.setState({groupblogs: json})
  }

  async updateBlog(post){
    const response = await fetch('https://bloghomework.herokuapp.com/update', {
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
        {this.state.groupblogs.map((blog) => {
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
