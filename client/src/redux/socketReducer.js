import { socket } from '../index';

const initialState = {
  nameAssigned: false,
  client: {
    id: '',
    name: ''
  },
  users: [
    {
      id: '',
      name: ''
    }
  ]
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'USER_CREATED':
      newState = { ...state, users: action.users };
      return newState;
    case 'NEW_USER':
      newState = {
        ...state,
        client: action.client,
        nameAssigned: true
      };
      return newState;
    case 'SEND_MESSAGE':
      socket.emit();
      break;
    default:
      return state;
  }
};

export default reducer;
