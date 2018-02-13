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
      main: true,
      addbutton: true,
      addblog: false,
    }
  }


  handleClick = () => {
    this.setState({
      main: false,
      addbutton: false,
      addblog: true,
    })
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
          {/* {this.state.addbutton ? <button className='blogbutton' onClick={this.handleClick}>New Blog</button> : null} */}
          <Link to="/"><button>Home</button></Link>

          <Link to="/addnew"><button>New Blog</button></Link>
        </div>

          {/* {this.state.main ? <Main /> : null} */}
          {/* {this.state.addblog ? <AddBlog /> : null} */}

              <Route exact path="/" component={Main}/>
              <Route path="/addnew" component={AddBlog}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
