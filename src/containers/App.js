// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// // import React, { useState } from 'react';
// // // import logo from './logo.svg';
// // import './App.css';
// // import Person from './Person/Person';

// // const App = props => {
// //   const [ personsState, setPersonsState ] = useState({
// //     persons: [
// //       {name:"Jay", age: 21 },
// //       {name:"Priyal", age: 20 },
// //       {name:"VIneet", age: 21 }
// //     ],
// //     otherState: 'some other value'
// //   });

// //   const [otherState] = useState('some other value')

// // console.log(personsState, otherState);

// // const switchNameHandler =() => {
// //     // console.log("was clicked!");
// //     // do not do this.state.persons[0].name = "Jay Joshi";
// //     setPersonsState( {
// //       persons: [
// //         {name:"Jay Joshi", age: 21 },
// //         {name:"Priyal Jain", age: 20 },
// //         {name:"VIneet Yadav", age: 21 }
// //       ], 
// //       // otherState: personsState.otherState
// //     } );
// //   };
  
  
// //   // render() {
// //     return (
// //       <div className="App">
// //         {/* <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <h1 className="App-title">Welcome to React</h1>
// //         </header>
// //         <p className="App-intro">
// //           To get started, edit <code>src/App.js</code> and save to reload.
// //         </p> */}
// //         <h1>Hi, I'm a React App</h1>
// //         <p> This is really working</p>
// //         <button onClick={switchNameHandler}>Switch Name</button>
// //         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
// //         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing </Person>
// //         <Person name= {personsState.persons[2].name} age={personsState.persons[2].age}/>
// //       </div>
// //       //  
// //     );

// //     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'os it work now' ))
// //   }
// // // }

// // export default App;

// class App extends Component {
//   state = {
//     persons: [
//       {id: 'qwer1', name: 'Max', age: 28 },
//       {id: 'asdf2', name: 'Manu', age: 29 },
//       {id: 'zxcv3', name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   };

//   // switchNameHandler = (newName) => {
//   //   // console.log('Was clicked!');
//   //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//   //   this.setState( {
//   //     persons: [
//   //       { name: newName, age: 28 },
//   //       { name: 'Manu', age: 29 },
//   //       { name: 'Stephanie', age: 27 }
//   //     ]
//   //   });
//   // };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     // const person = Object.assign({}, this.state.persons[personIndex]);
    
//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({persons: persons});
//   }
  
//   deletePersonHandler = (personIndex) => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons]; 
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons})
//   }

//   tooglePersonHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     const style = {
//       backgroundColor: 'green',
//       color: 'white',
//       font: 'inherit',
//       border:'1x solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons =null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person
//               click = {() => this.deletePersonHandler(index) }
//               name={person.name}
//               age={person.age}
//               key={person.id} 
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })}
//           {/* <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age}/>
//           <Person
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             click={this.switchNameHandler.bind(this, 'Max!')}
//             changed={this.nameChangedHandler}>
//             My Hobbies: Racing
//           </Person>
//           <Person
//             name={this.state.persons[2].name}
//             age={this.state.persons[2].age}/> */}
//         </div> 

//       );
//       style.backgroundColor='red';
//     }

//     const classes = [];
//     if (this.state.persons.length <= 2) {
//       classes.push('red'); //classes = ['red']
//     }
//     if (this.state.persons.length <=1) {
//       classes.push('bold'); //classes = ['red', 'bold']
//     }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p className={classes.join(' ')}>This is really working!</p>
//         <button 
//         style={style}
//         onClick={this.tooglePersonHandler}>Toggle Person</button>
//         {/* { this.state.showPersons === true ?
//         {/* <div>
//               <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age}/>
//               <Person
//               name={this.state.persons[1].name}
//               age={this.state.persons[1].age}
//               click={this.switchNameHandler.bind(this, 'Max!')}
//               changed={this.nameChangedHandler}>
//               My Hobbies: Racing
//             </Person>
//             <Person
//               name={this.state.persons[2].name}
//               age={this.state.persons[2].age}/>
//           </div>
//           {/* : null */}
//        {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;

import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed = {this.nameChangedHandler}  />;
    }


    return (
      <div className={classes.App}>
        <Cockpit
          title = {this.props.appTitle}
          showPersons= {this.state.showPersons}
          persons = {this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

