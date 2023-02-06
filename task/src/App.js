
import React from 'react';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { userInsert } from './reducer/userSlice'
import Home from './ReduxComponents/Home'
import Screen from './ReduxComponents/Screen';
import Header from './ReduxComponents/Header';
class App extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const{userInsert}=this.props
 axios.get("https://rickandmortyapi.com/api/character").
   then(res =>userInsert(res.data.results))
  }
  render(){
    console.log(this.props, 'props')
    return(<div>
<BrowserRouter>
   <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Screen/>} />
        </Routes>
</BrowserRouter>
    </div>)
  }
}
const mapStateToProps = state => ({
  state
})
const mapDispatchToProps = dispatch => ({
  userInsert: (users) => dispatch(userInsert(users)),
 
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

