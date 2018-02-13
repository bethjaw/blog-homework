import React from 'react';

export default class AddBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      newblog: [],
      title: '',
      content: '',
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

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      content: e.target.value,
    })
  }


  render(){
    return(
      <div className='addForm'>
          <h3>Share Your Knowledge</h3>
          <input className='forminput' placeholder='Title...' onChange={this.handleChange} name='title' defaultValue=''/>
          <textarea className='formtext' placeholder='All the content...'  name='content' defaultValue=''></textarea>
          <button className='submitBtn'>Post</button>
      </div>
    )
  }
}
