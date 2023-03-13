import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {
  AbsoluteCenter,
  Button,
  ButtonGroup,
  Stack,
  Avatar,
  AvatarGroup,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import InitialFocus from "../modal/InitialFocus";
import { AuthContext } from "../../context/auth.context";
import { useEffect } from "react";

function Navbar2() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
 
 const { logOutUser, user, authenticateUser, isLoading, isLoggedIn } = useContext(AuthContext)

/*  const[usuario, setUsuario]= useState(user) */


 //console.log("USER EN NAVBAR", user)

 useEffect(() => {
/*   authenticateUser(); */
}, []) 

  return (
    <>
     
      <Flex ml="20px">
        <Stack
          direction="row"
          spacing={4}
          align="center"
          w={[300, 400, 500]}
        >
          <Link>
            <Button colorScheme="teal" variant="outline" size="lg">
              Home
            </Button>
          </Link>

          <Link to="/post">
            <Button colorScheme="teal" variant="ghost" size="lg">
              Post
            </Button>
          </Link>
          

          <Link to="/post/new"><Button colorScheme='teal' variant='ghost' size='lg' >
    New Post
    </Button>
  </Link>
          
            <Button onClick={logOutUser} colorScheme="teal" variant="ghost" size="lg">
              Log Out
            </Button>

          
        </Stack>
        <Spacer />


     {!isLoading && isLoggedIn &&   <Box p="4">
          <AvatarGroup spacing="1rem" p="4">
             <Link to={`/profile/${user._id}`}>
              <Avatar bg="teal.500" />
            </Link> 
          </AvatarGroup>
        </Box>  } 
       
      </Flex>

      
    </>
  );
}

export default Navbar2;
