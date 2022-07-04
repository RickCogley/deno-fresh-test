// islands/TodoComponent.tsx

/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function TodoComponent() {
  const [todoEl, setTodoEL] = useState("");
  const [todos, setTodos] = useState([]);
  const btn = tw
    `px-2 py-1 border-gray-200 border-2 hover:bg-gray-200 focus:outline-none`;

  return (
    <div class={tw`h-2/3 w-1/2 flex flex-col justify-center ites-center gap-3`}>
      <div class={tw`flex gap-3 h-[10%] w-full`}>
        <input
          type="text"
          class={tw
            `flex-grow-1 outline-none focus:outline-none border-gray-200 border-2 p-2`}
          placeholder="Enter new ToDo"
          onChange={(e: any) => {
            setTodoEL(e.target.value);
          }}
        >
        </input>
        <button
          class={btn}
          onClick={() => {
            if (todoEl) {
              setTodos([...todos, todoEl]);
              setTodoEL("");
            }
          }}
          disabled={!IS_BROWSER}
        >
          ➕
        </button>
      </div>
      <ul class={tw`flex flex-col gap-2 overflow-y-scroll min-h-[90%]`}>
        {todos.map((todo, index) => (
          <li class={tw`flex gap-2`} key={todo}>
            <p class={tw`flex-grow-1`}>{todo}</p>
            <button
              class={btn}
              onClick={() => {
                setTodos(todos.filter((todo, i) => i !== index));
              }}
              disabled={!IS_BROWSER}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}