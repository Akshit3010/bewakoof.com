import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { getUserbag } from "./Redux/action";
import MainRoute from "./routes/mainRoute";

function App() {
   const { user, myBag } = useSelector((state) => state.reducer);
   console.log('user: ', user.user);
   const dispatch = useDispatch();

   useEffect(() => {
      const userId = user.user !== undefined && user.user._id;
      dispatch(getUserbag(userId));
   }, [myBag]);
   return (
      <div className="App">
         <ScrollToTop />
         <MainRoute />
      </div>
   );
}

export default App;

// Start with tailwind guide:
// Install Tailwind CSS with Create React App
// Setting up Tailwind CSS in a Create React App project.

// npm install tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// change your content with this in tailwind.config.js

// content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],

// paste this in index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
