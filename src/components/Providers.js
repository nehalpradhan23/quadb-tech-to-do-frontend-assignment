"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    // <Provider store={store}>
    <ThemeProvider attribute="class">{children}</ThemeProvider>
    // </Provider>
  );
};

export default Providers;
