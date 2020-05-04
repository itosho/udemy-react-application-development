import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    console.log('koko')
  }

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>count value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
// shorthand
const mapDispatchToProps = { increment, decrement }

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
