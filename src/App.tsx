import { useEffect, useState } from "react";
import "./App.css";
import { createWebGL } from "./webgl";
import Toolbar from "./components/toolbar.tsx";
import Sidebar from "./components/sidebar.tsx";

function App() {
  const [shapeTypeArr, setShapeTypeArr] = useState<
    {
      id: number;
      type?: "line" | "square" | "rectangle" | "polygon";
    }[]
  >([]);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    createWebGL(setShapeTypeArr, activeButton || "square");
  }, [activeButton, setShapeTypeArr]);
  console.log(shapeTypeArr)
  return (
    <div className="flex h-screen">
      {/* Toolbar */}
      <Toolbar setCreateType={setActiveButton}/>

      {/* Main Canvas */}
      <div className="w-full h-full relative">
        <canvas
          id="canvas"
          className="h-full w-full bg-primaryCanvas border-black"
        />
      </div>

      {/* Properties */}
      <Sidebar shapeTypeArr={shapeTypeArr}/>
    </div>
  );
}

export default App;
