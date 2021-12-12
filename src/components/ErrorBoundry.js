import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooops. Something went wrong. We're already working on that. Please, try again a little bit later. </h1>
        }
        return this.props.children
    }
     
}

export default ErrorBoundry;