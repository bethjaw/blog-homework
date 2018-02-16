import React from 'react';
import './App.css';
import Main from './components/Main.js';
import AddBlog from './components/AddBlog'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://bloghomework.herokuapp.com/user/1')
    const json = await response.json()
    this.setState({user: json})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Internal Integration</h1>
          <h4>a blog</h4>
        </header>
        <Router>
          <div>
            <div className='btndiv'>
              <Link to="/"><button>Home</button></Link>
              <Link to="/addnew"><button>New Blog</button></Link>
            </div>
              <Route exact path="/" component={Main}/>
              {this.state.user.map((user) => {
                return(
                  <Route key={user.id} path="/addnew" component={() => <AddBlog state={user.id} />}/>
                )
              })}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
