import "./SignupPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import Navbar from "../../components/Navbar/Navbar";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Select,
  AbsoluteCenter,
  Stack,
  Button,
} from "@chakra-ui/react";
import SignupPage2 from "./SignUpPage2";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

/*   const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value); */

  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Send a request to the server using axios
     
  /*   const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {}) */
    

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <Navbar />
      <SignupPage2 />
      <Box
        position="relative"
        /* backgroundColor='blue'  */ mx="auto"
        mt="200px"
      >
        <AbsoluteCenter w="500px">
          <FormControl mt="15px" mb="15" isRequired isInvalid={!isError}>
            <FormLabel color="teal">Name</FormLabel>
            <Input
              type="text"
              placeholder="Lucia"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>Enter your Name</FormHelperText>
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt="15px" mb="15" isRequired isInvalid={!isError}>
            <FormLabel color="teal">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Gomez"
              value={input}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt="15px" mb="15" isRequired isInvalid={isError}>
            <FormLabel color="teal">Email address</FormLabel>
            <Input
              type="email"
              variant="filled"
              placeholder="artesaniaslucia@gmail.com"
              value={input}
              onChange={handleInputChange}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel color="teal">Category</FormLabel>
            <Select placeholder="Select category">
              <option>Home</option>
              <option>Natural Cosmetics</option>
              <option>Fabric</option>
              <option>Miscellaneaus</option>
            </Select>
          </FormControl>

          <Stack direction="row" spacing={4} align="center" mt='20px' >
            <Button colorScheme="teal" variant="ghost" size='lg' mx='auto'>
              Sing Up
            </Button>
          </Stack>
        </AbsoluteCenter>
      </Box>

      {/*  <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>  */}
    </>
  );
}

export default SignupPage;
