import * as React from 'react';
import { ReactSortable } from 'react-sortablejs';
import useStore from '../store';

function Todos() {
  const store = useStore((state) => state);
  const not_found = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745';

  return (
    <div className="todo p-8 flex flex-col bg-slate-100 rounded-md">
      <h1 className="title font-bold pb-4">Todo - drag & drop</h1>

      <div className="flex-center-between">
        <input
          className="outline-none pl-4 p-2 mb-2 rounded-full mr-2 "
          id="card"
          value={store.newTodo}
          onChange={(evt) => store.setNewTodo(evt.target.value)}
          placeholder="New todo"
        />
        <button
          onMouseOver={() => {
            store.addTodo();
          }}
          className="circular-button"
        >
          +
        </button>
      </div>
      <div className="todo__list">
        <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
          <ReactSortable animation={200} list={store.todos} setList={store.reorder}>
            {store.todos.map((row) => (
              <li key={row.id} className="mb-4 p-2 cursor-pointer bg-white rounded-full">
                <span className=" rounded-sm ml-2 truncate w-full text-slate-600 ">{row.text}</span>
              </li>
            ))}
          </ReactSortable>
        </ul>
      </div>
    </div>
  );
}

export default Todos;
