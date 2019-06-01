import React, {Component} from 'react'

 class CaughtPokeman extends Component {
   constructor(props){
     super(props);
this.state={
  counter:0
};
   }
   catchPokemon=()=> {
     console.log('catchPokemon')
     this.setState(state=>{
       return{
        counter: state.counter + 1
       }
     })
   }
   decreaseCatchPokemon=()=> {
    console.log('decreaseCatchPokemon')
    this.setState(state=>{
      return{
       counter: state.counter - 1
      }
    })
  }
  resetPokemon=()=>{
    console.log('resetPokemon')
    this.setState(state=>{
      return{
counter:0
      }
    })
    
  }
     render(){
        const date = { 
             // const currentTime ="currentTime: new Date().toLocaleString()"
            currentTime: new Date().toLocaleString() }; 
      return (
        <div>
         <button className="btn" onClick={this.catchPokemon}>"Catch Pokemon" </button>
          <button className="btn" onClick={this.decreaseCatchPokemon}>"Decrease Pokemon" </button>
          <button className="btn"onClick={this.reset}>Reset Pokemon"</button>
          <p>{date.currentTime}</p>
        </div>
      )
     }
}
export default CaughtPokeman;