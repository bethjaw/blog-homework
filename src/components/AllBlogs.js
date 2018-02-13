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
      // <div className='singleblog'>
        <div className='allblogs'>
        {this.state.blogs.map((blog) => {
          return (
            <div className='blogdiv' key={blog.id}>
              <div className='star'>
                <i className="fa fa-star-o"></i>
              </div>
            <h3 className='blogtitle'>{blog.title}</h3>
            <p className='blogintro'>{blog.content}</p>
            <div className="read">
              <button className='markread'>Mark Read</button><input type="checkbox"/>
            </div>
            {/* <button onClick={this.props.seeSingle} id={blog.id}>Read</button> */}
            </div>
          )
        })}
        </div>
      // </div>
    )
  }
}
