import React from 'react';
import './App.css';
import img from './20.jpg';
import Person from './component/Person/Person';

class App extends React.Component{
  state= {show:true}

  toggleContent = () =>{
    if(this.state.show=== true){
      return (<Person name={"hagar"} bio={"hager mahmoud "} profession={"Engineer"} imgSrc={img} />)
    } else return null
  }
  

  render(){
    return(
      <div>
        
       <button onClick={() => this.setState({show:!this.state.show})}>Toggle Content</button>
       {this.toggleContent()}
      </div>
    )
  }
}

export default App;
