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
        {this.state.otherblogs.map((blog) => {
          return (
            <div className='blogsnippet2' key={blog.id}>
            <h3 className='blogtitle'>{blog.title}</h3>
            <p className='blogintro'>{blog.content}</p>
            <button onClick={this.props.seeSingle}>Read</button>
            </div>
          )
        })}
      </div>
    )
  }
}
