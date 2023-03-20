import "./App.css";
import { Routes, Route,  } from "react-router-dom";
import PostNewPost from './pages/PostPage/PostNewPage'
import HomePage from "./pages/HomePage/HomePage";
//import ProfilePage2 from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import IsAnon from "./components/IsAnon/IsAnon";
import PostList from "./pages/PostPage/PostList";
import PostDetailPage from "./pages/PostPage/PostDetailPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import ProfilePage2 from "./pages/ProfilePage/ProfilePage2";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  
  return (
      
    
    <div className="App">
    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile/:userId" element={<ProfilePage2 />} />
        {/* <Route path="/profile/:userId" element={<ProfilePage2 />} /> */}
        <Route path="/post" element={<PostList />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/post/new" element={<PostNewPost />} />
        <Route path="chat" element={<ChatPage />} />
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
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
