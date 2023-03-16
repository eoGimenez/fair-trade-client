import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

import ModalLogIn from "../Login/ModalLogIn";

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} color="rgb(79, 37, 120)" variant="ghost" size='lg' mx='auto'>Log In</Button>
       
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}>
            
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="rgb(79, 37, 120)">Welcome back to LocalArtCo!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
           <ModalLogIn onClose={onClose}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  


}
export default InitialFocus;
  

 
 


