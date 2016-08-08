import React from 'react'
import { connect } from 'react-redux'
import Count from '../components/Count'
import { add } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter,
    ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchAdder: (val) => {
      dispatch(add(val))
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)

export default Counter
