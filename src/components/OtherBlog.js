import React from 'react';

export default class OtherBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      otherblogs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/blogpost/2')
    const json = await response.json()
    this.setState({otherblogs: json})
  }


  render(){
    return(
      <div>
        <h3 className='sectionTitle'>User Posts</h3>
        {this.state.otherblogs.map((blog) => {
          return (
            <div className='blogsnippet' key={blog.id}>
            <h3 className='blogtitle'>{blog.title}</h3>
            <p>{blog.content}</p>
            <button>Read</button>
            </div>
          )
        })}
      </div>
    )
  }
}
