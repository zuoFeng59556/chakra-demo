import { Flex,Heading,Input,Button, useColorMode,useColorModeValue } from "@chakra-ui/react"
function App() {
  const { toggleColorMode } = useColorMode() 
  const backColor = useColorModeValue('gray.100', 'gray.700')
  
  return (
    <Flex h='100vh' alignItems='center' justifyContent='center'>
      <Flex direction="column" bg={backColor} p='12' rounded={6} >
        <Heading mb={6}> Log in</Heading>
        <Input placeholder="请输入账号" mb={3} variant="filled" type='text' />
        <Input placeholder="请输入密码" variant="filled" mb={6} type='password' />
        <Button colorScheme='teal'>Log in</Button>
        <Button onClick={toggleColorMode}> Toggle Color Mode </Button>
      </Flex>
    </Flex>
  )
}
export default App
