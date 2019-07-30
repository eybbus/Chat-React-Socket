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
  ],
  messages: [
    {
      _id: '',
      clientID: '',
      clientName: '',
      timeSent: '',
      content: ''
    }
  ]
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'USERS_UPDATE':
      newState = { ...state, users: action.users };
      return newState;
    case 'CLIENT_CREATED':
      newState = {
        ...state,
        client: action.client,
        nameAssigned: true
      };
      return newState;
    case 'MESSAGE_RECEIVED':
      newState = { ...state, messages: [...state.messages, action.message] };
      return newState;
    default:
      return state;
  }
};

export default reducer;
