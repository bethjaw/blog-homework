import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom'
import SingleBlog from './SingleBlog'

export default class YourBlog extends React.Component {
  constructor(props){
    super(props)

    this.state={
      blogs: [],
      // singleblog: false,
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/blogpost/1')
    const json = await response.json()
    this.setState({blogs: json})
  }

  // seeSingleBlog = () => {
  //   <Link to="/singleblog"></Link>
  //   this.props.history.push('/singleblog')
  //
  // }

  render(){
    console.log(this.state);
    return(
      <div>
        <Router>
          <div>
            {this.state.blogs.map((blog) => {
              return (
                // <div className='blogsnippet2' key={blog.id}>
                // <h3 className='blogtitle'>{blog.title}</h3>
                // <p className='blogintro'>{blog.content}</p>
                // <Link to="singleblog"><button id={blog.id}>Read</button></Link>
                // </div>

                <SingleBlog
                  key={blog.id}
                  blog={blog} />
              )
            })}

            {/* {this.state.singleblog ? <SingleBlog /> : null} */}

            {/* <Route path="/singleblog" component={SingleBlog}/> */}
            <Route exact path="/singleblog" render={ props => <SingleBlog {...props} />} />
          </div>
        </Router>

      </div>
    )
  }
}
