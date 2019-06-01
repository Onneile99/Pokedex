import React, {Component} from 'react'

class Logo extends Component{
  logWhenClicked = () => {
    console.log('Oooops')
    }  // const appName={
    //     name:"Pokedex",
    //     startDate: "12 May 19"
    // };
    render(){
        return (
            <div>
              <header>
              {/* <h1> {appName.name} started on  {appName.startDate}</h1> */}
<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"alt="" onClick={this.logWhenClicked}>
            
              </img>
              </header>
            </div>
          )
    }
    
  
}
export default Logo;