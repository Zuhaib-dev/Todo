import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Components/index.css"
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
<>
<App />
<ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
 
</>

);
