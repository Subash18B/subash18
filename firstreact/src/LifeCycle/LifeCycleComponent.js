import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleComponent extends React.Component {

constructor(){
    super()
    this.state={
        status:0
    }
    this.updateState=this.updateState.bind(this)
}

    componentWillMount() {
        console.log("Component will be displayed in view")
        alert("Component is not yet displayed in the view")
        
    }
    componentDidMount() {
        console.log("Component is displayed in the view")
    }

    componentDidUpdate() {
        console.log("Component state is updated");
    }

    componentWillUnmount(){
        console.log("Removing the lifeCycleComponent from the view!!!")
    }

    updateState(){
        this.setState({status:this.state.status+1})
        if(this.state.status>=10){
        ReactDOM.unmountComponentAtNode(document.getElementById("LifeCycle"))
        }
       
    }
    render() {
        return (
            <div>
            It will do nothing
            Take a look at console to understand component lifecycle
            <button onClick={this.updateState}>Change State{this.state.status}</button>
            
            </div>
        )
        }
    }

export default LifeCycleComponent;