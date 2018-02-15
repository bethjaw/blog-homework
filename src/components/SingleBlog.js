import React from 'react';
import Glasses from '../eyeglasses.png'
// import Header from '../headerimage.jpg'
// import Glasses from './Glasses'
// import ReactMarkdown from 'react-markdown';

export default class SingleBlog extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      blogid: this.props.blog.id,
      blogread: this.props.blog.read
    }
  }


  render(){
    console.log('single props', this.props);

    return(
      <div className='singleblog'>
          <div className='blogdiv'>
            <div className='star'>
              {this.props.blog.read ? <img src={Glasses} className='glasses'/> : null}
            </div>
            <h3 className='blogtitle'>{this.props.blog.title}</h3>
            <p className='blogintro'>{this.props.blog.content}</p>
            <div className="read">
            <button className='markread' onClick={()=> this.props.markRead(this.props.blog)}>Mark Read</button>
            </div>
          </div>
      </div>
    )
  }
}
