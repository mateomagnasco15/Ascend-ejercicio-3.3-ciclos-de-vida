import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log("dentro del constructor")
    }
    state = { clicked: false }

    componentDidMount() {
        console.log("dentro de component did Mount")
    }

    componentDidUpdate() {
        console.log("dentro de component did update")
    }

    componentWillUnmount() {
        console.log("dentro del component Will Unmount")
    }
   
    clickHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        console.log("dentro del render")
        
        return (
            <div>
                <button onClick={this.clickHandler}> Click me!</button> 
                <h3>{ this.state.clicked ? "Clickeaste!" : "No Clickeado"}</h3>
            </div>
        )
    }
}
 
export default ClassComponent;