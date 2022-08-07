import React, { FC, useState } from 'react';
import DragDrop from './components/DragDrop';
import Todos from './components/Todos';

const App: FC = (props) => {
  return (
    <div className="main p-20">
      <div className="flex justify-around  ">
        <DragDrop />
        <Todos />
      </div>
    </div>
  );
};

export default App;
