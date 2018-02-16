import React from 'react';
import GroupBlog from './GroupBlog';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

export default class UserGroups extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      groups: []
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/usergroup/1')
    const json = await response.json()
    this.setState({groups: json})
  }

  render(){
    console.log(this.state.groups);
    return(
      <div>
        <Router>
          <div>
            <h4>Your Groups</h4>
            {this.state.groups.map((group) => {
              return(
                <Link to='/groupblog' target="_top" className="groupname"  key={group.id}>
                <p>{group.name}</p></Link>
              )
            })}
            <Route exact path="/groupblog" component={GroupBlog}/>
          </div>
        </Router>
      </div>
    )
  }
}
