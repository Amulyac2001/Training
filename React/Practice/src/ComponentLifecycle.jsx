import { Component } from "react";

class ComponentLifecycle extends Component{
  constructor(props){
    super(props);
    this.state={
      col:"red"
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({col:"yellow"})
    },2000)
  }
  // componentDidMount(){
  //   console.log("This method is called once the component get rendered");
  // }
  // componentWillUnmount() {
  //   alert('The component is going to be unmounted');
  // }

  componentDidUpdate(){
    document.getElementById("div1").innerHTML="The new color is yellow"
  }

  render(){
    return(
      <div>
        <h1>Hello</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.state.col}</h1>
        <div id="div1"></div>
      </div>
    )
  }
}

export default ComponentLifecycle