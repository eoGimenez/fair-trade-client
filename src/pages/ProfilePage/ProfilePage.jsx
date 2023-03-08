import {Grid, GridItem, Avatar, WrapItem,Stack,Button, Input} from '@chakra-ui/react'
import { FiEdit3 } from 'react-icons/fi';
import Navbar2 from '../../components/Navbar/Navbar2';

function ProfilePage() {
  return (
    <>
    <Navbar2/>
    <Grid
  h='600px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={3}
  ml="15px" mr='15px'
>
  <GridItem rowSpan={2} colSpan={1}  /* border="1px"  */borderColor="teal" /* bg="teal" */ borderRadius='rounded'>
  <WrapItem>
    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' mx="auto" mt="15px" />{' '}
  </WrapItem>
  <Stack direction='row' spacing={4}>
  <Button leftIcon={<FiEdit3 />} colorScheme='facebook' variant='solid' mt="10px" ml="200px" mr="5px">
    
  </Button>
</Stack>
<Stack spacing={3} mt="10px">
  <Input variant='flushed' placeholder='Name & LastName' />
  <Input variant='flushed' placeholder='Email' />
  <Input variant='flushed' placeholder='Location' />
  
</Stack>
  </GridItem>
  <GridItem colSpan={2} /* bg='papayawhip' */  border="1px" borderColor="teal" borderRadius='9%'/>
  <GridItem colSpan={2} /* bg='papayawhip' */ border="1px" borderColor="teal" borderRadius='9%'/>
  <GridItem colSpan={4} /* bg='tomato' */ border="1px" borderColor="teal" borderRadius='9%'/>
</Grid>
    </>
  );
}

export default ProfilePage;
