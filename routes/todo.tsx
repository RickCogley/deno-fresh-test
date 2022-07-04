/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import TodoComponent from "../islands/TodoComponent.tsx";

export default function Todo() {
  return (
    <div
      class={tw`w-screen h-screen flex flex-col justify-center items-center`}
    >
      <TodoComponent />
    </div>
  );
}