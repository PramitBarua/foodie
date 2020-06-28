import React from "react";
import styles from "./App.module.scss";
import { HeaderComponent, BackgroundVideoComponent } from "../index";

function App() {
  return (
    <div className={styles.app}>
      <BackgroundVideoComponent />
      <HeaderComponent />
    </div>
  );
}

export default App;
