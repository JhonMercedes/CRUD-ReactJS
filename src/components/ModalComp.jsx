import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [email, setEmail] = useState(dataEdit.email || "");

  const handleSave = () => {
    if(!name || !email) return;

    if (emailAlreadyExists()) {
        return alert("E-mail já cadastrado!")
    }
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                    <FormLabel>Nome</FormLabel>
                    <Input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                </Box><Box>
                    <FormLabel>Nome</FormLabel>
                    <Input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent='start'>
            <Button colorScheme='green' mr={3} onClick={handleSave}>
                SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
                CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
