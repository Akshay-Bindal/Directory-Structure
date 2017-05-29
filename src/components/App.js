import React from 'react'
import NewDirectory from '../containers/NewDirectory.js';
import PopUp from '../containers/PopUp/PopUp.js';
import DirectoryListing from '../containers/DirectoryListing/DirectoryListing.js';

const App = () => (
  <div>
      {
          /*<AddTodo />
          <VisibleTodoList />
          <Footer />
          <UndoRedo />*/
      }
      <NewDirectory />
      <PopUp />
      <DirectoryListing />

  </div>
)

export default App
