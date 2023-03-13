import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import PostNewPost from './pages/PostPage/PostNewPage'
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostNewPost from "./pages/PostPage/PostNewPage"
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import PostList from "./pages/PostPage/PostList";
import PostDetailPage from "./pages/PostPage/PostDetailPage";

function App() {
  
  return (
      
    
    <div className="App">
    

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/post/new" element={<PostNewPost />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/logout"
          element={
            <IsAnon>
              <HomePage/>
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
