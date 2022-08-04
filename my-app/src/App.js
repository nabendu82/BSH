import './App.css';
import PostForm from './components/PostForm';
// import PostList from './components/PostList';
// import GrandParent from './components/GrandParent';
// import { UserProvider } from './components/userContext';
// import ClickCounter2 from './components/ClickCounter2';
// import CounterRender from './components/CounterRender';
// import HoverCounter2 from './components/HoverCounter2';
// import ErrorBoundary from './components/ErrorBoundary';
// import Villain from './components/Villain';

function App() {
  return (
    <div className="App">
      <PostForm />
      {/* <UserProvider value='Nabendu'>
        <GrandParent />
      </UserProvider> */}
      {/* <ErrorBoundary>
        <Villain villainName="Joker" />
        <Villain villainName="Riddler" />
        <Villain villainName="Batman" />
      </ErrorBoundary> */}

      {/* <CounterRender>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </CounterRender>
      <CounterRender>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </CounterRender> */}

      {/* <CounterRender render={(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount} />
      )}/>
      <CounterRender render={(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount} />
      )}/> */}
    </div>
  );
}

export default App;
