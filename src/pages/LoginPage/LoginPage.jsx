/* eslint-disable no-unused-vars */
import "./LoginPage.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  AbsoluteCenter,
  Stack,
  Button,
} from "@chakra-ui/react";
import Navbar2 from "../../components/Navbar/Navbar2";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const { storeToken, authenticateUser, user } = useContext(AuthContext);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(!emailRegex.test(email)) {
      setErrorMessage("Please provide a valir email adress.")
      return;
    }
    if(!password) {
      setErrorMessage("Please complete the 'Password' field.")
    }

    const requestBody = { email, password };
    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate(`/profile/${user._id}`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <Navbar2 />

       <Box
        position="relative"
        mx="auto"
        mt="200px"
      >
        <AbsoluteCenter w="500px" >

          <FormControl mt="15px" mb="15" >
            <FormLabel color="teal">Email address</FormLabel>
            <Input
              type="email"
              variant="filled"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel color="teal">Email address</FormLabel>
            <Input
              type="password"
              variant="filled"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Stack direction="row" spacing={4} align="center" mt='20px' >
            <Button onClick={handleLoginSubmit}  colorScheme="teal" variant="ghost" size='lg' mx='auto'>
              Log In
            </Button>
          </Stack>
        </AbsoluteCenter>
      </Box> 

       
    </>
  );
}

export default LoginPage;
