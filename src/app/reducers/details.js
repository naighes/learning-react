export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_CURRENCY_DETAILS':
      return action.payload
    default:
      return state
  }
}
