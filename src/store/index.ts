import create from 'zustand';
import { persist } from 'zustand/middleware';

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: todos.length + 1,
    text,
    done: false,
  },
];

// Zustand implementation
type Store = {
  todos: Todo[];
  newTodo: string; //handle change
  addTodo: () => void;
  removeTodo: (id: number) => void;
  reorder: (data: Todo[]) => void;
  setNewTodo: (newTodo: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    todos: [],
    newTodo: '',
    removeTodo: (id: number) =>
      set((state) => ({
        ...state,
        todos: removeTodo(state.todos, id),
      })),
    addTodo: () =>
      set((state) => {
        if (!state.newTodo) return state;
        console.log(state);

        return {
          ...state,
          todos: addTodo(state.todos, state.newTodo),
          newTodo: '',
        };
      }),
    reorder: (data) => set((state) => ({ ...state, todos: data })),
    setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),
  })
);
export default useStore;
