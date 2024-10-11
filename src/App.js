import React from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Law Firm Blog</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
