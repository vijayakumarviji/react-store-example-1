import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../store/action';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={() => this.props.decrement(this.props)}>-</button>
                    <p>{this.props.count}</p>
                    <button onClick={() => this.props.increment(this.props)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        increment: function (props) {
            dispatch(increment({ count: props.count}))
        },
        decrement: function (props) {
            dispatch(decrement({ count: props.count}))
        }
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(Counter);