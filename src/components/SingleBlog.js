import React from 'react';
// import ReactMarkdown from 'react-markdown';

export default class SingleBlog extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      blogid: this.props.blog.id,
    }
  }

  async updateBlog(post){
    const response = await fetch('https://bloghomework.herokuapp.com/update', {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }

  markRead = () => {
    // let blogid = e.target.id.value
    const updateRead = {
      "id": this.state.blogid,
      "read": true
    }
    this.updateBlog(updateRead)
  }

  render(){
    console.log('single props', this.props.blog.read);
    // console.log('single state', this.state);

    let isRead = 'star fa '
    isRead += this.props.blog.read === true ? 'fa-star' : 'fa-star-o'

    return(
      <div className='singleblog'>
          <div className='blogdiv'>
            <div className='star'>
              {/* <i className="fa fa-star-o"></i> */}
              <i className={isRead}></i>
            </div>
            <h3 className='blogtitle'>{this.props.blog.title}</h3>
            <p className='blogintro'>{this.props.blog.content}</p>
            <div className="read">
                <button className='markread' onClick={this.markRead}>Mark Read</button>
            </div>
          </div>
      </div>
    )
  }


}
