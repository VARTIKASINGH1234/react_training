export default function (state = null, action) {
  switch (action.type) {
    case 'USERS_ACTIVE':
      return action.payload;
      break;

    case 'USERS_DELETED':
      return action.payload;
      break;

    case 'USERS':
      return action.payload;
      break;
  }
  return state;
}
