import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { ChakraProvider } from '@chakra-ui/react'
import { PostProvicerWrapper } from "./context/posts.context";
import { UserProviderWrapper } from "./context/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthProviderWrapper>
      <UserProviderWrapper>
    <PostProvicerWrapper>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PostProvicerWrapper>
      </UserProviderWrapper>
    </AuthProviderWrapper>
  </Router>
);
