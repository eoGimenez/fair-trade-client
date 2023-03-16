import "./App.css";
import { Routes, Route,  } from "react-router-dom";
import PostNewPost from './pages/PostPage/PostNewPage'
import HomePage from "./pages/HomePage/HomePage";
//import ProfilePage2 from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IsPrivate from "./components/IsPrivate/IsPrivate"
import IsAnon from "./components/IsAnon/IsAnon";
import PostList from "./pages/PostPage/PostList";
import PostDetailPage from "./pages/PostPage/PostDetailPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import ProfilePage2 from "./pages/ProfilePage/ProfilePage2";



function App() {
  
  return (
      
    
    <div className="App">
    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile/:userId" element={<IsPrivate> <ProfilePage2 /> </IsPrivate>} />
        {/* <Route path="/profile/:userId" element={<ProfilePage2 />} /> */}
        <Route path="/post" element={<IsPrivate><PostList /></IsPrivate>} />
        <Route path="/post/:postId" element={<IsPrivate> <PostDetailPage /></IsPrivate>} />
        <Route path="/post/new" element={<IsPrivate> <PostNewPost /></IsPrivate>} />
        <Route path="chat" element={<IsPrivate> <ChatPage /></IsPrivate>} />
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
