import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

type Props = {};

interface ItemType {
  id: number;
  name: string;
  content: string;
  image?: string;
  position?: string;
}

const not_found = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745';

const DragDrop = (props: Props) => {
  const [state, setState] = useState<ItemType[]>([
    {
      id: 1,
      name: 'Ramesh Gopal',
      content: 'sI feel like an idiot for not using Tailwind CSS until now.',
      position: 'Dev',
      image: 'https://static.wikia.nocookie.net/harrypotter/images/7/75/Imelda_Staunton_2017.jpg',
    },
    {
      id: 2,
      name: 'Geeta Rani',
      position: 'Manager',
      content: 'A tonal palette consists of thirteen tones, including white and black.',
    },
    {
      id: 3,
      position: 'UI/UX',
      name: 'Aryan Rajbhandari',
      content: 'I feel like an idiot for not using Tailwind CSS until now.',
    },
  ]);

  return (
    <div className="bg-slate-50 p-2">
      <h1 className="title font-bold pb-4">Drag and Drop</h1>

      <ReactSortable animation={200} list={state} setList={setState}>
        {state.map((item) => (
          <div key={item.id} className="bg-white p-4 border-1 mb-2 cursor-pointer w-80 rounded-md ">
            <div className="flex items-center">
              <img src={item.image || not_found} alt={item.name} className="h-16 w-16 object-cover rounded-full" />
              <div className="flex flex-col ml-4">
                <span className="font-medium">{item.name}</span>
                <span className="font-light text-gray-600">{item.position}</span>
              </div>
            </div>
            <blockquote className="mt-6 text-slate-700 font-light">"{item.content}"</blockquote>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default DragDrop;
