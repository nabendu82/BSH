import './App.css';
import React from 'react'
import MouseContainer from './components/MouseContainer';
// import ParentComp from './components/ParentComp';
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='ReactJS'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ParentComp /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
