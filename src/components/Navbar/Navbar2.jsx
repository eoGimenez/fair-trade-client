
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AbsoluteCenter, Button, ButtonGroup, Stack, Avatar, AvatarGroup, Flex, Box ,Spacer} from '@chakra-ui/react'


function Navbar2() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
 /*  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); */

  return (
  <>
  {/* <AbsoluteCenter> */}
   <Flex ml='20px'> 
 <Stack direction='row' spacing={4} align='center'  /* bg='gray' */  w={[300, 400, 500]}>
  <Link>
  <Button colorScheme='teal'  variant='outline' size='lg'>
    Home
    </Button>
  </Link>
  
  <Link to="/post"><Button colorScheme='teal' variant='ghost' size='lg'>
    Post
  </Button> </Link>
  <Link to="/signup"><Button colorScheme='teal' variant='ghost' size='lg'>
   Sign Up
  </Button> </Link>
</Stack>
<Spacer />

<Box p='4' >
<AvatarGroup spacing='1rem'  p='4'>
<Link to="/profile">
<Avatar bg='teal.500' />
          </Link>
  
</AvatarGroup>
</Box>
 </Flex> 
{/* </AbsoluteCenter> */}
  </>
  );
}

export default Navbar2;
