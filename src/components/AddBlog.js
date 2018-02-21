import React from 'react';

export default class AddBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      newblog: [],
      message: '',
      user: this.props.state
    }
  }

  async createBlogPost(post){
    const response = await fetch('https://bloghomework.herokuapp.com/blogs', {
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
      user_id: this.state.user
    }
    this.createBlogPost(newPost)
    this.setState({
      message: 'You\'re blog is posted!'
    })
  }


  render(){
    console.log(this.props.state);
    return(
      <div >
        <form id='addBlogForm' className='addForm' onSubmit={this.handleAddBlog}>
          <h3>Share Your Knowledge</h3>
          <input className='forminput' placeholder='Title...' onChange={this.handleChange} name='title' defaultValue=''/>
          <textarea className='formtext' placeholder='Share your knowledge in markdown'  name='content' defaultValue=''></textarea>
          <button className='submitBtn' type="submit">Post</button>
        </form>
        {this.state.message}
      </div>
    )
  }
}
