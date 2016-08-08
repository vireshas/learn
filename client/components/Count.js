import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

let Count = ({count, children, dispatchAdder, ownProps}) => {
    let input

    return (
      <div>
        <div>
          { children }
          { ownProps.children }
          { ownProps.test }
          <h4> count {count}</h4>
        </div>

        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchAdder(input.value)
          input.value = ''
        }}>

          <input ref={node => {
            input = node
          }} />

          <RaisedButton label="Add Count" type="submit">
          </RaisedButton>

        </form>
      </div>
    )
}

export default Count
