import React, { useState } from 'react';
import Options from './components/Options';
import Question from './components/Question';
import Article from './components/Article';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question'); // Default post type is 'question'

  const handlePostTypeChange = (newPostType) => {
    setPostType(newPostType);
  };

  return (
    <div className="App">
      <Options onPostTypeChange={handlePostTypeChange} />
      <div className="content">
        {postType === 'question' ? <Question /> : <Article />}
      </div>
    </div>
  );
}

export default App;
