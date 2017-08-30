export default function (state = [], action) {

  switch (action.type) {
    case 'DELETED':
      return state.map((item, index) => {
        if (item.name !== action.payload.name) {
          return item;
        }
        action.payload.isDeleted = true;
        action.payload.color = "red";
        return action.payload;       
      }); 
      break; 

    case 'ADD_USER':
      var object = {name: action.payload.trim(), isDeleted: false, color: 'green'};
      var array = state.slice(0);
      if (!state.find((element) => (object.name == "" || element.name == object.name)))
        array.push(object);
      return array;
      break;
  }
  return state;
}
