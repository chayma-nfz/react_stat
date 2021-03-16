
import './App.css';
import React  from 'react';
import Clock from "./components/Clock";
import 'bootstrap/dist/css/bootstrap.css';
import Person from './components/Person';
export default class App extends React.Component {
  
   state = {
      show: false,
       };

 

  render() {

const stylecontenu = {textAlign:'center',  margintop: '20%' }
    return (
      <div style={stylecontenu}>
         {this.state.show ? < Person /> : null }
         <br/>
   <button  class="btn btn-info" onClick={()=> {
     this.setState({ show :!this.state.show})
   }}>   Your Profile   </button>
     <br/>
     <div><Clock /></div>
      </div>
    );
  }
}




