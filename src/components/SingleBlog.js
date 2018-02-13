import React from 'react';

export default class SingleBlog extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      singleblog: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/blogpost/1')
    const json = await response.json()
    this.setState({singleblog: json})
  }


  render(){
    console.log('single', this.props.blog);
    return(
      <div>
        <button onClick={this.props.home}>Home</button>
        <p>single blog</p>
        {/* {this.props.blog.single.map((blog) => {
          <div> */}
            <h3 className='blogtitle'>{this.props.blog.title}</h3>
            <p className='blogintro'>{this.props.blog.content}</p>
          {/* </div>
        })} */}
      </div>
    )
  }


}
