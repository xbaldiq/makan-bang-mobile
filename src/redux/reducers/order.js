const initialOrder = {
  orders: [],
  inProgress: [],
  past: [],
};

export const orderReducer = (state = initialOrder, action) => {
  switch (action.type) {
    case 'SET_ORDER': {
      return {
        ...state,
        orders: action.value,
      };
    }
    case 'SET_IN_PROGRESS_ORDER': {
      return {
        ...state,
        inProgress: action.value,
      };
    }
    case 'SET_PAST_ORDER': {
      return {
        ...state,
        past: action.value,
      };
    }
    default:
      return state;
  }
};
