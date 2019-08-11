import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actionCreators';

class Counter extends React.Component {
    
    increment = () =>{
        // this.setState({
        //     count: this.state.count + 1
        // })
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={()=> this.props.decrement(this.props)}>-</button>
                    <p>{this.props.count}</p>
                    <button onClick={() => this.props.increment(this.props)}>+</button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state)=> ({
    count: state.count
})

const mapDispatchtoProps = (dispatch, ownProps)=> {
    console.log(ownProps)
    return {
        increment: function(props) {
            dispatch(increment({count: props.count + 1}))
        },
        decrement: function(props) {
            dispatch(decrement({count: props.count - 1}))
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const onClick = () => {
        if (stateProps.someValue) {
            dispatchProps.onClick();
        }
    }

    return ({
        ...stateProps,
        ...dispatchProps,
        onClick
    })
}

export default connect(mapStateToProps, mapDispatchtoProps, mergeProps)(Counter);