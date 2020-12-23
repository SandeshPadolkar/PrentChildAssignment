import React, { Component } from 'react'

export class Child extends Component {
    render() {
        console.log(this.props,this.props.child_style.color)
        return (
            <div className="child" style={{backgroundColor:this.props.child_style.color}}>
                Check Background Color
            </div>
        )
    }
}

export default Child
