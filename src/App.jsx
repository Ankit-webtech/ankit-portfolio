// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Auth from "./pages/Auth.jsx";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <Routes>
      <Route path="/"     element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Analytics />
    </Routes>
    
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import Home from "./Home.jsx";
// import Auth from "./pages/Auth";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/auth" element={<Auth />} />
//     </Routes>
//   );
// }

// export default App;