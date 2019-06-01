import React, {Component} from 'react'
import BestPokerman from './components/BestPokerman';
import Logo from './components/Logo';
import  CaughtPokeman from './components/CaughtPokeman';
import './App.css'
 class App extends Component{
  
    render(){
      return (
        <div>
        <Logo appName="Pokedex" /> 
         <BestPokerman />
         <CaughtPokeman onClick={this.props.CaughtPokeman} />
        </div>
      )
    }

}
export default App;

 

