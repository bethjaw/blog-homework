import React from 'react';
import SingleBlog from './SingleBlog'


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
            <SingleBlog
              key={blog.id}
              blog={blog} />
          )
        })}
      </div>
    )
  }
}
