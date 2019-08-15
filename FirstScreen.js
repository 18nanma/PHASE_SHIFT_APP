
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Gif from './screens/Gif'
import PowerUp1 from './screens/PowerUp1'

export default class App extends Component {
constructor(props){
 super(props)
 this.state = {
  component : <Gif />
 }
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <PowerUp1 /> })
     }, 2000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
}

render() {
return (
  this.state.component
);
}
}
