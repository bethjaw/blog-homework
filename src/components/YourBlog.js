import React from 'react';
import SingleBlog from './SingleBlog'

export default class YourBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      blogs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/blogpost/1')
    const json = await response.json()
    this.setState({blogs: json})
  }

  render(){
    console.log(this.state);
    return(
      <div>
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
