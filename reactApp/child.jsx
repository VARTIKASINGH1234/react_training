import React from 'react';

class Child extends React.Component { 
  render() {
    return (
      <div>
         <ul>
           {this.props.Name.map((item,index) => 
              <li key={index}><button type="button">{item}</button></li>
            )}
          </ul>
       </div>
      );
   }
}

export default Child;

