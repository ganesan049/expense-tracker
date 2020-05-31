export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transaction: action.payload,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        loading:true,
        transaction: [action.payload, ...state.transaction],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        loading:true,
        transaction: state.transaction.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
