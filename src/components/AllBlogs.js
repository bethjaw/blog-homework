import React from 'react';


export default class AllBlogs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      blogs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/allblogs')
    const json = await response.json()
    this.setState({blogs: json})
  }



  render(){
    console.log(this.state);
    return (
        <div className='allBlogs'>
        {this.state.blogs.map((blog) => {
          return (
            <div className='blogsnippet' key={blog.id}>
            <h3 className='blogtitle'>{blog.title}</h3>
            <p className='blogintro'>{blog.content}</p>
            <button onClick={this.props.seeSingle} id={blog.id}>Read</button>
            </div>
          )
        })}
        </div>
    )
  }
}
