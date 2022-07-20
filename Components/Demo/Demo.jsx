import { Box, Button, ButtonGroup, Center, Flex, Heading, Icon, Image, Input, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Demo = () => {
  return (
    <Box>
        <Center>
            <Box mt='50px'>
                <Text fontSize="32px" fontWeight='500' color='#323233'>
                    Book a 30-min live demo🚀
                </Text>
                <Text margin="10px 0px 20px" fontWeight="400" fontSize='14px' color='#7F7F7F'>
                10+ users? Let one of our customer success experts show you how Everhour
                <br/>
                 works, with plenty of time set aside for questions
                </Text>
                <ButtonGroup>
                    <Button bg={'#56BB70'} color="white" size='sm' fontSize='10px' fontWeight='400' padding="5px 32px" borderRadius={'3px'} _hover={{bg:'#56BB70', color:"white", boxShadow:'dark-lg'}}>
                        Schedule time
                    </Button>
                    <Button bg={'white'} color="#56BB70" size='sm' fontSize='10px' fontWeight='400' border='1px solid' padding="5px 30px" borderRadius={'3px'} _hover={{bg:'#F0FFF4'}}>
                        Watch videos
                    </Button>
                </ButtonGroup>
            </Box>
        </Center>
        <Center>
            <Box width="100%">
                <Center>
                    <Box _hover={{boxShadow:'xl'}} bg='white' margin='85px' textAlign={'left'} border='1px solid #E0F7EA' borderRadius={'2px'} width='33vw' padding='30px 45px'>
                        <Text fontSize='12px' fontWeight='600'>
                            What you'll learn
                        </Text>
                        <ul>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                    We’ll briefly explain what’s so special about Everhour.
                                </Text>
                            </li>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                We’ll teach you the basics of using the app, with plenty of time for questions.
                                </Text>
                            </li>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                We’ll answer all questions about setting up Everhour, using it with your team, or anything else you’d like to ask.
                                </Text>
                            </li>
                        </ul>
                        <br/>
                        <Text fontSize='12px' fontWeight='600'>
                            Other information
                        </Text>
                        <ul>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                Screenshare is done in the browser by means of Whereby software using this link. Please ensure that your mic and speakers work in advance!
                                </Text>
                            </li>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                Demos typically last 30 minutes, but we will adjust the time based on your needs.
                                </Text>
                            </li>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                Feel free to invite other team members to join this call.
                                </Text>
                            </li>
                            <li style={{color:'#56BB70'}}>
                                <Text color='#7F7F7F' fontSize='10px'>
                                No available time slots? Contact us and we'll surely work something out.
                                </Text>
                            </li>
                        </ul>
                    </Box>
                </Center>
            </Box>
        </Center>
        <Center>
            <Box mt='50px'>
                <Text fontSize="24px" fontWeight='500' color='#323233'>
                    Skip the demo and try for yourself?
                </Text>
                <Text margin="10px 0px 20px" fontWeight="400" fontSize='12px' color='#7F7F7F'>
                    Try Everhour for free to see if it works for your business.
                <br/>
                    No credit card required. No obligations.
                </Text>
                <Flex gap={4}>
                    <Input placeholder='Work email...' borderRadius='5px' fontSize='12px' size='sm'/>
                    <Button bg={'#56BB70'} color="white" size='sm' fontSize='10px' fontWeight='400' padding="5px 32px" borderRadius={'3px'} _hover={{bg:'#56BB70', color:"white", boxShadow:'dark-lg'}}>
                        Try it free
                    </Button>
                </Flex>
                <Flex margin="10px 0 70px 0" sx={{alignItems:"center",justifyContent:"center"}}>
                    <Icon as={FcGoogle} fontSize='12px'/>&nbsp;
                    <Text fontSize='10px'>
                        Or sign up with Google Account
                    </Text>
                </Flex>
            </Box>
        </Center>
    </Box>
  )
}

export default Demo