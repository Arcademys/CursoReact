import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to Our Store! Explore our products." />
    </div>
  );
};

export default App;

// Si necesitas incluir los logos y enlaces, puedes integrarlos dentro del mismo componente App de esta manera:
// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <ItemListContainer greeting="Welcome to Our Store! Explore our products." />
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite Logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React Logo" />
//         </a>
//         <h1>Vite + React</h1>
//       </div>
//     </div>
//   );
// };