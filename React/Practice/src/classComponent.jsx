import { Component } from "react";

class classComponent extends Component{
    constructor(){
        super();
        this.state={
            a:0,
            b:0
        }
    }

    incrementB=()=>{
        this.setState(prevState=>{
            return {
                b:prevState.b+1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.a}</h1>
                <h1>{this.state.b}</h1>
                <button onClick={()=>this.setState({a:this.state.a+1})}>btnA</button>
                <button onClick={this.incrementB}>btnB</button>
            </div>
        )
    }
}

// use prevstate concept rather than the setstate directly

export default classComponent;