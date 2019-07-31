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
    /* message structure. commented out to prevent 
		displaying empty message
    {
			_id: '',
			clientID: '',
			clientName: '',
			timeSent: '',
			content: ''
		}
		*/
  ]
};

const reducer = (state = initialState, action) => {
  let newState;
  let newMessages;
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
    case 'DELETE_MESSAGE':
      newMessages = updateObjectInArray(state.messages, action);
      newState = { ...state, messages: newMessages };
      return newState;
    default:
      return state;
  }
};

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (item._id !== action.messageID) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      content: ''
    };
  });
}

export default reducer;
