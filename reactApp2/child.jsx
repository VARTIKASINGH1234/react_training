import React from 'react';
import ReactDOM from 'react-dom';
class Child extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {temp: "", array: []};
  }

  componentWillMount() {
      console.log('Component WILL MOUNT!');
      console.log(this.props.names);
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
  componentWillReceiveProps(newProps) {    
    let names = this.props.names;
    let array = this.state.array;
    
    if (array.length == 0 || 
       (!array.find((element) => (names == "" || (element.name == names))))) {
         let object = {name: names, isDeleted: 0};
         array.push(object);
         this.setState({temp : names}); 
    }
  }


  render() {
    return (
      <div>
         <ul>
           {this.state.array.map((item,index) => 
              <li key={index} ><button type = "button" >{item.name}</button>
              </li>
            )}
          </ul>
       </div>
      );
   }
}

export default Child;

