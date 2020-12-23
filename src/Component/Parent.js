import React, { Component } from 'react';
import Child from './Child';
import './style.css'

export class Parent extends Component {
    state={
        child_style:{
           // Color:"white",
        }
    }

    componentWillMount(){
        let child_style=this.state.child_style
        child_style["color"]="yellow"
        this.setState({child_style:child_style},console.log(this.state))
    }

    componentDidMount(){
        setInterval(()=>{
            let child_style=this.state.child_style
            child_style["color"]="green"
            this.setState({child_style:child_style},console.log(this.state))
        },2000);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate executed")
    }
    render() {
        return (
            <div className="Parent">
                <h1 className="Phead">Parent</h1>
                <br/>
                <center><input type="text" className="input" onChange={(e)=>{
                    let child_style=this.state.child_style
                    child_style["color"]=e.target.value
                    this.setState({child_style:child_style}, console.log(this.state))
                }} /></center>

                <p className="para">
                    Current color :  {this.state.child_style&&this.state.child_style.color?this.state.child_style.color:""}
                </p>
                <Child child_style={this.state.child_style}/>
            </div>
        )
    }
}

export default Parent
