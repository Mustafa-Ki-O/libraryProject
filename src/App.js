import { RouterProvider } from "react-router-dom";
import './App.css'
import router from './router/router';
import Start from "./app/start";
import { useEffect,useState } from "react";

function App() {
  
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowStartPage(false);
    }, 5000); 

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return showStartPage ? <Start /> : <RouterProvider router={router} />;
}

export default App;