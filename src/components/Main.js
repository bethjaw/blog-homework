import React from 'react';
import '../index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import YourBlog from './YourBlog'
import OtherBlog from './OtherBlog'
import GroupBlog from './GroupBlog'
import Categories from './Categories'
import AllBlogs from './AllBlogs'
import SingleBlog from './SingleBlog'



export default class Main extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      // blogs: [],
      // categories: true,
      // allblogs: true,
      // yourblog: false,
      // otherblog: false,
      // groupblog: false,
      singleblog: false,
    }
  }

  // async componentDidMount(){
  //   const response = await fetch('https://bloghomework.herokuapp.com/allblogs')
  //   const json = await response.json()
  //   this.setState({blogs: json})
  // }

  // seeYourBlogs = () => {
  //   this.setState({
  //     yourblog: true,
  //     otherblog: false,
  //     groupblog: false,
  //     allblogs: false,
  //     categories: true,
  //     singleblog: false,
  //   })
  // }
  //
  // seeOtherBlogs = () => {
  //   this.setState({
  //     yourblog: false,
  //     otherblog: true,
  //     groupblog: false,
  //     allblogs: false,
  //     categories: true,
  //     singleblog: false,
  //   })
  // }
  //
  // seeGroupBlogs = () => {
  //   this.setState({
  //     yourblog: false,
  //     otherblog: false,
  //     groupblog: true,
  //     allblogs: false,
  //     categories: true,
  //     singleblog: false,
  //   })
  // }
  //
  // seeAll = () => {
  //   this.setState({
  //     yourblog: false,
  //     otherblog: false,
  //     groupblog: false,
  //     allblogs: true,
  //     categories: true,
  //     singleblog: false,
  //   })
  // }

  seeSingleBlog = () => {
    this.setState({
      singleblog: true,
      // yourblog: false,
      // otherblog: false,
      // groupblog: false,
      // allblogs: false,
      // categories: false,
    })
  }

  render(){
    // console.log(this.state.blogs);
    return(
      <div>
        <Categories />
      </div>
    )
  }
}
