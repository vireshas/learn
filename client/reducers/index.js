let counter = 0
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      counter = +counter + +action.val
      return { 'counter' : counter }
    default:
      return state
  }
}

export default reducer

