"use client";
import Container from "@/components/container/Container";
import NavBar from "@/components/navbar/NavBar";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="bg-[#FBFDFC] dark:bg-[#242424] min-h-screen">
        <div className="mx-10 h-full">
          <NavBar />
          <Container />
        </div>
      </div>
    </Provider>
  );
}
