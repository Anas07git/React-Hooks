import React, { Component } from 'react'

class ClassTImer extends Component {
    interval=null
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    
    componentDidMount(){
        this.interval= setInterval(()=>{
            this.setState((prev)=>({
                timer:prev.timer+1
            }))
        },1000)
    }
    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }
  render() {
    return (
      <div>
         Class Interval - {this.state.timer}
         <button onClick={()=> clearInterval(this.interval)}>Clear</button>
      </div>
    )
  }
}

export default ClassTImer
