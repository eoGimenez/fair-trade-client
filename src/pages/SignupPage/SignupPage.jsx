import "./SignupPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
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
  Tooltip,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Navbar2 from "../../components/Navbar/Navbar2";
import { ImInfo } from "react-icons/im";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [commercename, setCommercename] = useState("");
  const [artisan, setArtisan] = useState("");
  const [commerce, setCommerce] = useState("");
  const [cif, setCif] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

/*   const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value); */



  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      email,
      password,
      passwordRe,
      name,
      surname,
      commercename,
      role,
      cif,
    };

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        console.log("RESPONSE FRONT:", response);

        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error;
        setErrorMessage(errorDescription);
      });
  };
  /* const handleSignupSubmit2 = (e) => {
   console.log(e.target)
  } */

  // Send a request to the server using axios
  /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {}) */
    

  return (
    <>
  
     <Navbar2/>
     
      <Box
        position="relative"
        ml="auto"
        mr="auto"
        mt="400px"
        w={[300, 400, 500]}
      >
        <AbsoluteCenter w="500px">
          <FormControl mt="50px" mb="15" isRequired >
            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px" >
              Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Lucia"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormErrorMessage>Name is required.</FormErrorMessage>

            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
              Last Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Gomez"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />

            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
              Commerce Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Artesanias Lulu"
              value={commercename}
              onChange={(e) => setCommercename(e.target.value)}
            />

            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
              Email address
            </FormLabel>
            <Input
              type="email"
              placeholder="artesaniaslucia@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>

            <FormControl isRequired>
            <FormLabel color="rgb(79, 37, 120)" mt="10px" mb="15px" >
             Password 
       
            </FormLabel>
            </FormControl>
            <Input
           
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>
              Must have at least 6 characters,at least one number, one lowercase
              and one uppercase letter
            </FormHelperText>
            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
              Repeat Password
            </FormLabel>
            <Input
            
              type="password"
              value={passwordRe}
              onChange={(e) => setPasswordRe(e.target.value)}
            />

            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
              CIF
            </FormLabel>
            <Input
              type="text"
              placeholder="Y-9532595"
              value={cif}
              onChange={(e) => setCif(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
              You are joining as:
            </FormLabel>
            <Select
              placeholder="Select an option"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Artisan">Artisan</option>
              <option value="Commerce">Commerce</option>
            </Select>
          </FormControl>

          <Stack direction="row" spacing={4} align="center" mt="20px">
            <Button
              color="rgb(79, 37, 120)"
              variant="ghost"
              size="lg"
              mx="auto"
              onClick={handleSignupSubmit}
            >
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
