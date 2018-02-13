import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

export default class AddBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      newblog: [],
      message: '',
    }
  }

  async createBlogPost(post){
    const response = await fetch('https://bloghomework.herokuapp.com/newblog/1', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  handleAddBlog = (e) => {
    e.preventDefault()
    const newPost = {
      title: e.target.title.value,
      content: e.target.content.value,
    }
    this.createBlogPost(newPost)
    this.setState({
      message: 'You\'re blog is posted!'
    })
  }


  render(){
    return(
      <div >
        <form id='addBlogForm' className='addForm' onSubmit={this.handleAddBlog}>
          <h3>Share Your Knowledge</h3>
          <input className='forminput' placeholder='Title...' onChange={this.handleChange} name='title' defaultValue=''/>
          <textarea className='formtext' placeholder='All the content...'  name='content' defaultValue=''></textarea>
          {/* <input type='submit' value='post' className='submitBtn' /> */}
          <button className='submitBtn' type="submit">Post</button>
        </form>
        {this.state.message}
      </div>
    )
  }
}
