import React from 'react';
import Fetcher from './Fetcher';

class App extends  React.Component {
  render() {
    return (
      <>
        <Fetcher url='http://localhost:7070/data' />
        <Fetcher url='http://localhost:7070/error' />
        <Fetcher url='http://localhost:7070/loading' />
      </>
    );
  }
}
export default App;
