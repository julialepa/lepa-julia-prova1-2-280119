import React, { Component } from 'react';
import './App.css';
import SecondaryNews from './components/secondarynews'
import Navbar from './components/navbar'
import MainNews from './components/mainnews'
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SecondaryNewsData: [ ],
    }
  }

componentDidMount() {
  fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(json => 
     this.setState({
    SecondaryNewsData: json
  })
  )
} 


  render() {
    console.log(this.state.SecondaryNewsData)

    return (
      <div>
      <Navbar />
      <div className="App">
      <MainNews />
      <div>{this.state.SecondaryNewsData.map((item, index) =><SecondaryNews name={item.first_name}/>)}</div>
     </div>
     <Footer />
      </div>
    );
  }
}

export default App;




  



    