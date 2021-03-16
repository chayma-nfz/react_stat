
import React from 'react';
import ReactDOM from 'react-dom';
import imag1 from '../images.png';
class Person extends React.Component {
  
    state = {
      FullName: "nefzi chayma",
     adressemail: "nefzi.chayma@gmail.com",
      profession: "Full stack java script",
     bio : "The projects on which I worked as part of my experience helped me develop my analytical skills prove my flexibility to different situations and acquire good communication skills.   " ,
     src1 : imag1 ,
    };
  
  render() {
    const stylecontenu = {textAlign:'center',  margintop: '20%', border: '2px solid black'}
    return (
      <div  style={stylecontenu}>
        <h1 >My  name is {this.state.FullName}</h1>
        <img src = {this.state.src1} alt= ""  style={{  width :250 , height:250 , border:'outset'}}/>   
        <p>
          My Address email is {this.state.adressemail} <br/>
        I m a  {this.state.profession}   developper  <br/>
           {this.state.bio}.  
         
        </p>
      </div>
    );
  }
}
export default Person
ReactDOM.render(<Person/>, document.getElementById('root'));