export const selectUser = (user) => {
  return {
    type: 'DELETED',
    payload: user
  }
};


export const selectFilter = (filter) => {
  if (filter == 'Active')
    return {
      type: 'USERS_ACTIVE',
      payload: filter
    }

  else if (filter == 'Deleted') {
  	return {
      type: 'USERS_DELETED',
      payload: filter
    }
  }

  else if (filter == 'All') {
  	return {
      type: 'USERS',
      payload: filter
    }
  }
};


export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user
  }
};
