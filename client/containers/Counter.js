import React from 'react'
import { connect } from 'react-redux'
import Admin from '../components/Admin'
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

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)

export default AdminContainer
