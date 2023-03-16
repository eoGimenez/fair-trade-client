import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";


function ModalLogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const { onClose } = props
  const { storeToken, authenticateUser, user } = useContext(AuthContext);
 

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please provide a valid email adress.")
      return;
    }
    if (!password) {
      setErrorMessage("Please complete the 'Password' field.")
    }

    authService
      .login({ email, password })
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
      })
     
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  useEffect(() => {
    if (user) navigate(`/profile/${user._id}`);
  }, [user])

  return (
    <>
      {errorMessage && <div class="alert alert-danger alerta " role="alert">
        {errorMessage}
      </div>}

      <FormControl mt="15px" mb="15" >
        <FormLabel color="rgb(79, 37, 120)">Email</FormLabel>
        <Input
          id="field-:pass"
          type="email"
          placeholder="ejemplo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <FormLabel color="rgb(79, 37, 120)" mt='10px'>Password</FormLabel>
        <Input
          id='password'
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Stack direction="row" spacing={1} ml='200px' mt='20px' >
        <Button onClick={handleLoginSubmit} color="rgb(79, 37, 120)" variant="ghost" size='lg' mx='auto'>
          Log in
        </Button>
        <Button onClick={onClose} color="rgb(79, 37, 120)" variant="ghost" size='lg' mx='auto'>Cancel</Button>
      </Stack>

    </>
  );
}
export default ModalLogIn;
