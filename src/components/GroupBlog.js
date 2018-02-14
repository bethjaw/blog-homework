import React from 'react';
import SingleBlog from './SingleBlog'


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
            <SingleBlog
              key={blog.id}
              blog={blog} />
          )
        })}
      </div>
    )
  }
}
