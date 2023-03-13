
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


function ModalLogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const {onClose} = props

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
        console.log("CONSOL DEL RESPONSE", response)
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page

        storeToken(response.data.authToken);
        authenticateUser();
        console.log('USERCXT:', user)
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
          <FormControl mt="15px" mb="15" >
            <FormLabel color="rgb(79, 37, 120)">Email</FormLabel>
            <Input
            id="field-:pass"
              type="email"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
{/*             <FormHelperText color="rgb(79, 37, 120)" textAlign="flex-end">We'll never share your email.</FormHelperText> */}
            <FormLabel color="rgb(79, 37, 120)" mt='10px'>Password</FormLabel>
            <Input
            id='password'
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Stack  direction="row" spacing={1} ml='200px' mt='20px' >
            <Button onClick={handleLoginSubmit} color="rgb(79, 37, 120)" variant="ghost" size='lg' mx='auto'>
              Login
            </Button>
            <Button onClick={onClose} color="rgb(79, 37, 120)" variant="ghost" size='lg' mx='auto'>Cancel</Button>
          </Stack>
        
      

    </>
  );
}

export default ModalLogIn;