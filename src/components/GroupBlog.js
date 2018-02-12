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
        <h3 className='sectionTitle'>Group Posts</h3>
        {this.state.groupblogs.map((blog) => {
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
