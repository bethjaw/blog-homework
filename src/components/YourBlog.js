import React from 'react';

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
    console.log(this.state.blogs);
    return(
      <div>
        <h3 className='sectionTitle'>Your Posts</h3>
        {this.state.blogs.map((blog) => {
          return (
            <div className='blogsnippet' key={blog.id}>
            <h3 className='blogtitle'>{blog.title}</h3>
            {/* <hr className='line'/> */}
            <p>{blog.content}</p>
            <button>Read</button>
            </div>
          )
        })}
      </div>
    )
  }
}
