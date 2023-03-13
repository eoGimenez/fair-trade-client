import {
  Grid,
  GridItem,
  Avatar,
  WrapItem,
  Stack,
  Button,
  Input,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import Navbar2 from "../../components/Navbar/Navbar2";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useState } from "react";
import { userContext } from "react";

function ProfilePage() {
  const { user } = useContext(userContext); 

  const [usuario, setUsuario] = useState({
    name: "Federico",
    apellido: "Gomez",
  });

  const [nombre, setNombre] = useState("");
  const [editar, setEditar] = useState(false);
  console.log("USER-PROFILE:", user);

 /*  const guardarUsuario = ()=>{
    
  } */
/*   const cambiarNombre = (evento) =>{
  
    setUsuario(usuario =>({
      ...usuario,
      name : "pepe"
    }))

  } */

  return (
    <>
      <Navbar2 />
      <Grid
        h="600px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={3}
        ml="15px"
        mr="15px"
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          /* border="1px"  */ borderColor="teal"
          /* bg="teal" */ borderRadius="rounded"
        >
          <WrapItem>
            <Avatar
              size="2xl"
              name="lu"
              src="https://bit.ly/sage-adebayo"
              mx="auto"
              mt="15px"
            />{" "}
          </WrapItem>
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<FiEdit3 />}
              colorScheme="facebook"
              variant="solid"
              mt="10px"
              ml="200px"
              mr="5px"
            ></Button>
          </Stack>
          <Stack spacing={3} mt="10px">
            {editar && (
              <Editable defaultValue={usuario.name}>
                <EditablePreview />
                <EditableInput onChange={"cambiarNombre"} />
              </Editable>
            )}

            <Button colorScheme="teal" size="lg" onClick={"guardarUsuario"}>
              Guardar
            </Button >

            {/*  <Input variant="flushed" placeholder="Email" />
            <Input variant="flushed" placeholder="Location" /> */}
          </Stack>
        </GridItem>
        <GridItem
          colSpan={2}
          /* bg='papayawhip' */ border="1px"
          borderColor="teal"
          borderRadius="9%"
        />
        <GridItem
          colSpan={2}
          /* bg='papayawhip' */ border="1px"
          borderColor="teal"
          borderRadius="9%"
        />
        <GridItem
          colSpan={4}
          /* bg='tomato' */ border="1px"
          borderColor="teal"
          borderRadius="9%"
        />
      </Grid>
    </>
  );
}

export default ProfilePage;
