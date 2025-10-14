import React from "react";
import { MantineProvider, Slider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
