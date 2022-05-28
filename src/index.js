import React from 'react';
import ReactDOM from 'react-dom';

 import App from './App';
 ReactDOM.render(
     <App />, document.getElementById('root')
 );


 
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
 /**
  * React DOM is used to render our components and entire application
  * into the real DOM i.e into a DIV with an id of root
  * Component- A piece of code that renders some JSX
  * Props allow us to pass dynamic data through react components
  * --They are just arguments that we pass to react components
  * --They are passed via attributes
  * --They are just a shorter way of saying properties
  * useEffect happens as soon as the component loads

  */