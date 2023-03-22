import "./SignupPage.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import Navbar from "../../components/Navbar/Navbar";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Select,
  AbsoluteCenter,
  Stack,
  Button,

} from "@chakra-ui/react";
import SignupPage2 from "./SignUpPage2";
import { AuthContext } from "../../context/auth.context";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [commercename, setCommercename] = useState("");
  const [cif, setCif] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { authenticateUser, user, storeToken, isLoggedIn } = useContext(AuthContext)
  const [userOk, setUserOk] = useState('')
   const [ user2, setUser2] = useState('') 
  const navigate = useNavigate();

  let requestBody

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    requestBody = {
      email,
      password,
      passwordRe,
      name,
      surname,
      commercename,
      role,
      cif,
      avatar: ""
    }

    if (email === "" || password === "" || name === "" || passwordRe === "" || surname === "" || commercename === "" || role === "" || cif === "") {
      setErrorMessage("Please complete the mandatory fields.")
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Provide a valid email address.")
      return;
    }

    if (password !== passwordRe) {
      setErrorMessage("Passwords dont match.")
      return;
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      setErrorMessage("Check for Password requirement")
      return;
    }
    //debugger;
/*     authService
      .signup(requestBody)
      .then((response) => {
        console.log('RESPONSE SIGN UP' , response)  
        setUser2(response.data.user) 
          authService
        .login({ email, password })
        .then(response => {
          console.log("RESPONSE LOGIN", response)
          storeToken(response.data.authToken);
          authenticateUser();
          setUserOk(!userOk) 
          navigate(`/profile/${user2._id}`)     
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          console.log("error en log in", error)
          setErrorMessage(errorDescription);
        })
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        console.log("error en sign up", error)
        setErrorMessage(errorDescription);
      }); */


 
      async function signUpAndLogin() {
        try {
          const signUpResponse = await authService.signup(requestBody);
          console.log('RESPONSE SIGN UP', signUpResponse);
          
          const { email, password } = requestBody;
          const loginResponse = await authService.login({ email, password });
          console.log('RESPONSE LOGIN', loginResponse);
          
          const authToken = loginResponse.data.authToken;
          storeToken(authToken);
          authenticateUser();
          console.log('dsps del autenticated')
          navigate(`/profile/${signUpResponse.data.user._id}`);
        } catch (error) {
          const errorDescription = error.response.data.message;
          console.log('error', error);
          setErrorMessage(errorDescription);
        }
      }

      signUpAndLogin();




   /*  authService.login({ email, password })
      .then(response => {
        storeToken(response.data.authToken);
        console.log("DESPUES DEL TOKE", storeToken)
        authenticateUser();
        setUserOk(!userOk)
        navigate(`/profile/${user._id}`)
      })
      .catch((error) => {
      }); */
  };
  useEffect(() => {
    console.log("user2", user2)
    if (user2) navigate(`/profile/${user2._id}`);
    //eslint-disable-next-line
  }, [user2])  
 

  return (
    <>
      <div>
        <Navbar />
        <SignupPage2 />
        <div id="signup">
          <Box
            className="box-rounded"
            position="relative"
            pt="5px"
            bg="white"
            ml="auto"
            mr="auto"
            mt="100px"
            w={[600]}
            h="900"
          >
            <AbsoluteCenter w="500px">
              {errorMessage && <div className="alert alert-danger alerta " role="alert">
                {errorMessage}
              </div>}
              <FormControl bg="white" mb="15" mt="10" isRequired >
                <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px" >
                  Name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="John"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
                  Last Name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Doe"
                  id="LastName"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />

                <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
                  Commerce Name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Doe's Handcrafted"
                  id="CommerceName"
                  value={commercename}
                  onChange={(e) => setCommercename(e.target.value)}
                />

                <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  placeholder="johndoe@gmail"
                  id="email"
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
                  id="password"
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
                  id="passwordRe"
                  type="password"
                  value={passwordRe}
                  onChange={(e) => setPasswordRe(e.target.value)}
                />

                <FormLabel color="rgb(79, 37, 120)" mt="15px" mb="15px">
                  CIF
                </FormLabel>
                <Input
                  id="cif"
                  type="text"
                  placeholder="Y-9532595"
                  value={cif}
                  onChange={(e) => setCif(e.target.value)}
                />
              </FormControl>

              <FormControl bg="white" isRequired>
                <FormLabel color="rgb(79, 37, 120)" bg="white" mt="15px" mb="15px">
                  You are joining as:
                </FormLabel>
                <Select
                  id="role"
                  bg="white"
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
                  Sign Up
                </Button>
              </Stack>
            </AbsoluteCenter>
          </Box>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
