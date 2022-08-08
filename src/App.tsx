import React, { FC, useRef, useState } from 'react';
import DragDrop from './components/DragDrop';
import Todos from './components/Todos';
import moon from './assets/react.svg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Answers from './components/Answers';

const App: FC = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="main">
      {/* @ts-ignore */}
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png)`,
            backgroundSize: 'cover',
          }}
        >
          <div className="flex justify-around mt-10">
            <DragDrop />
            <Todos />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png)`,
            backgroundSize: 'cover',
          }}
        >
          <Answers />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
