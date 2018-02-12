import React from 'react';

export default class AddBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      newblog: [],
    }
  }

  async createBlogPost(newpost){
    const response = await fetch('https://bloghomework.herokuapp.com/newblog/1', {
      method: 'POST',
      body: JSON.stringify(newpost),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    this.componentDidMount()
    // this.setState({newblog: json})
  }


  render(){
    return(
      <div>
        <p>Add a blog post</p>
        <label>Title</label>
        <input />
        <button>Add</button>
      </div>
    )
  }
}
