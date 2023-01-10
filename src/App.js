import React, { useState, useEffect, useRef } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./themeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
