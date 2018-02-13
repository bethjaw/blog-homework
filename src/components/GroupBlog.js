import React from 'react';

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


  render(){
    return(
      <div>
        {this.state.groupblogs.map((blog) => {
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