"use client";
import Providers from "@/components/Providers";
import Todo from "@/components/Todo";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Providers>
        <Todo />
      </Providers>
    </Provider>
  );
}
