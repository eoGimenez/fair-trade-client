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

  /*   const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  
    const handleInputChange = (e) => setInput(e.target.value);*/

  //const isError = input === ""; 

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */
      console.log("REQUEST BODY ANTES DEL LOGIN", requestBody)
    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        console.log("RESPONSE LOGIN")
        storeToken(response.data.authToken);
        console.log("USER-DATA", user)
        authenticateUser();
        navigate(`/profile/${user._id}`);
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
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

        {/* <div className="LoginPage">
          <h1>Login</h1>
    
          <form onSubmit={handleLoginSubmit}>
            <label>Email:</label>
            <input type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
    
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
    
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
    
           <p>Don't have an account yet?</p>
          <Link to={"/signup"}> Sign Up</Link> 
        </div> */}
    </>
  );
}

export default LoginPage;
