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
    console.log('single', this.props);
    return(
      <div className='singleblog'>
        {/* <button onClick={this.props.home}>Home</button>
        <p>single blog</p> */}

          <div className='blogdiv'>
            <div className='star'>
              <i className="fa fa-star-o"></i>
            </div>
            <h3 className='blogtitle'>{this.props.blog.title}</h3>
            <p className='blogintro'>{this.props.blog.content}</p>
            <div className="read">
              <button className='markread'>Mark Read</button><input type="checkbox"/>
            </div>
          </div>
      </div>
    )
  }


}
