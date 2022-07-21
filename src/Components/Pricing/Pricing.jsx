import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Center, Divider, Flex, Icon, Image, Input, Link, List, ListIcon, ListItem, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Pricing = () => {
  return (
    <Box>
        <Center>
        <Box mt='50px'>
                <Text fontSize="32px" fontWeight='500' color='#323233'>
                Simple pricing with no extra fees
                </Text>
                <Text margin="9px 0px 20px" fontWeight="400" fontSize='15px' color='#7F7F7F'>
                Start with no commitment. Try everything. Subscribe if you love it.
                </Text>
            </Box>
        </Center>
        <Center>
            <Box borderRadius='50' padding='1px' bgColor='#F3FAF9'>
                <Flex>
                    <Box color='#1BBF69' borderRadius='50' padding='3px' margin='1px'>
                        <Text fontSize='9px'>Monthly</Text>
                    </Box>
                    <Box bgColor='white' borderRadius='50' padding='3px' margin='1px'>
                        <Text fontSize='9px'>Yearly</Text>
                    </Box>
                </Flex>
            </Box>
        </Center>
        <Center>
            <Box marginTop='10px' width='250px' boxShadow='2xl' borderRadius='5px' padding='0 20px'>
                <Box margin='8px auto' bgColor='#8EDCB3' height='3px' borderRadius='2px'></Box>
                <Flex margin='10px 0'>
                    <Text fontSize='14px'>
                        All-in-one
                    </Text>
                </Flex>
                <Flex>
                    <Text fontSize='10px' color='#7F7F7F'>
                        All features, plus best-in-class integrations
                    </Text>
                </Flex>
                <Box margin='10px 0'>
                    <Flex height='50px' color='#1BBF69'>
                        <Flex alignItems={'start'} fontSize={'14px'} lineHeight={'38px'}>
                            $
                        </Flex>
                        <Flex alignItems={'end'} fontSize={'40px'} fontWeight={'bold'} lineHeight={'40px'}>
                            8
                        </Flex>
                        <Flex alignItems={'end'} fontSize={'10px'} lineHeight='16px'>
                            .50
                        </Flex>
                    </Flex>
                </Box>
                <Flex mb='10px' fontSize='9px' fontWeight='600' color='grey'>
                    / user / month, starting at 5 users
                </Flex>
                <Flex textAlign='left'>
                    <List fontSize='9px'>
                        <ListItem>
                            <ListIcon color='#7F7F7F' fontSize='6px' as={AiOutlineCheck}/>
                        Unlimited users
                        </ListItem>
                        <ListItem>
                        <ListIcon color='#7F7F7F' fontSize='6px' as={AiOutlineCheck}/>
                        Unlimited projects
                        </ListItem>
                        <ListItem>
                        <ListIcon color='#7F7F7F' fontSize='6px' as={AiOutlineCheck}/>
                        Unlimited integrations
                        </ListItem>
                        <ListItem>
                        <ListIcon color='#7F7F7F' fontSize='6px' as={AiOutlineCheck}/>
                        All features
                        </ListItem>
                        <ListItem>
                        <ListIcon color='#7F7F7F' fontSize='6px' as={AiOutlineCheck}/>
                        Fast and responsive support
                        </ListItem>
                    </List>
                </Flex>
                <Box margin='20px 0'>
                    <Button bg={'#56BB70'} color="white" size='sm' fontSize='10px' fontWeight='400' padding="0 38px" borderRadius={'3px'} _hover={{bg:'#56BB70', color:"white", boxShadow:'dark-lg'}}>
                        Try free
                    </Button>
                </Box>
            </Box>
        </Center>
        <Center>
            <Flex fontSize="10px" alignItems='center' marginTop='10px'>
                Currency
                <Select fontSize="10px" height='22px'>
                <option value='option1'>USD</option>
                <option value='option2'>EUR</option>
                <option value='option3'>GBP</option>
                <option value='option4'>AUD</option>
                <option value='option5'>CAD</option>
                </Select>
            </Flex>
        </Center>
        <Center>
            <Box>
                <Flex marginTop='50px' justifyContent='space-between'>
                    <Box width='45%'>
                        <Box>
                            <Text fontSize='16px' fontWeight='500'>
                            Your questions. Answered!
                            </Text>
                            <Text fontSize='12px' color='grey'>
                            Here is a list of the most frequently asked questions. Got others or some ideas? — <Link color='#4A91E2'>Contact us!</Link>
                            </Text>
                            <Image margin='auto' width='80%' src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp'/>
                        </Box>
                    </Box>
                    <Box width='45%'>
                        <Accordion allowToggle width='350px' marginTop='30px'>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    What's the trial period purpose?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                When you sign up, you get a fully-functional account for 2 weeks, which gives you access to everything Everhour has to offer. After 14 days, you will need to pick a plan and enter your credit card details. We’ll email you a couple of days before your trial expires to remind you.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    What means 'Starting at 5 users'?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                This is kind of a basic usage fee. You can subscribe even if you have fewer than 5 users, however, in this case, the minimum usage fee will apply. So it's either $50/month or $510/year. Empty seats can be occupied at any time. The 6th user and beyond are counted at a standard rate.                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    Can I change my plan later?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                Yes, you can upgrade/downgrade your plan at any time. You will be credited for the remainder of your current plan and charged for your new plan when you upgrade.
                                                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    Can I add or remove members at any time?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                Absolutely! Everhour is pay-as-you-go, and you can easily add or remove members from your account with a couple of clicks.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    What if I want to cancel my service?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                No problem. If you decide Everhour isn’t for you (or you just need to pause), simply cancel before your next billing period. This date is listed on your billing page. Unfortunately, we can’t refund you for partial use or the amount of time left in your subscription.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    What kind of payment methods do you accept?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                We currently accept any credit or debit card with a MasterCard, Visa, Discover Network, American Express, Diners Club International or JCB logo.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='13px'>
                                    Which currency will I be charged in?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={2} fontSize='10px'>
                                You will be charged in USD. However, our pricing page displays the indicative price in other currencies based on your location for your convenience.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Flex>
            </Box>
        </Center>
        <Center>
            <Box marginTop='50px'>
                <Text fontSize='10px'>
                A time tracker you can trust for life
                </Text>
                <Image margin='auto' width='70%' src='https://raw.githubusercontent.com/soumyah1512/dataBase/main/abcs.png'/>
            </Box>
        </Center>
        <Center>
            <Flex margin='30px' width='80%' justifyContent='space-between'>
                <Box width='30%'>
                    <Box border='1px solid #D7F2E5' borderRadius='2px' margin='20px 0' padding='20px'>
                        <Text fontSize='10px'>
                        “Everhour has the best integration with Asana compared to other time tracking tools — including Asana’s preferred integration (Harvest). And it’s not just because it’s more affordable than Harvest. With Harvest you have to click the icon in the task to start the time, then you have to set the project and task you want to track time for. That’s 3 additional clicks every time you want to track your time. With Everhour you just click your button to start your time. The product team at Everhour really gets UX here — their integration automatically pulls in all relevant data to your task including task name, section level, project, team, tags, literally everything available via the API! Imagine how useful having all that rich data can be if you want to report on things! No more settling for Asana’s weak and fluffy dashboard reports. With Everhour’s rich data you can export it into a data source to analyze or visualize in BI tools like DataStudio or Tableau.”
                        <br/>
                             — Skyler R. (Source: G2.com)
                        </Text>
                    </Box>
                    <Box border='1px solid #D7F2E5' borderRadius='2px' margin='20px 0' padding='20px'>
                        <Text fontSize='10px'>
                        "Everhour allows our team to save time on time tracking! Everhour is the best time tracking tool for use with Basecamp. In the past, we have used Toggl and Tick and while they did integrate with Basecamp, it wasn't as seamless as it is with Everhour."
                        <br/>
                        — Kory L. (Source: Capterra)
                        </Text>
                    </Box>
                </Box>
                <Box width='30%'>
                    <Box border='1px solid #D7F2E5' borderRadius='2px' margin='20px 0' padding='20px'>
                        <Text fontSize='10px'>
                        "Simple, elegant, and powerful. My team uses Everhour for a few reasons: (1) It has a simple, intuitive interface; (2) It has a powerful reporting engine that we now use for generating various insights, including employee time analyses and customer invoices; (3) It comes with solid integrations with task management software (we use ClickUp in particular); (4) Per-user costs are low, which is essential for us as we have many part-time employees, some of whom only work a few hours per week."
                        <br/>
                        — Aaron M. (Source: G2.com)
                        </Text>
                    </Box>
                    <Box border='1px solid #D7F2E5' borderRadius='2px' margin='20px 0' padding='20px'>
                        <Text fontSize='10px'>     
                        “Overall a great and very affordable software with just the right amount of very robust and well thought out features! The perfect tool for freelancers and companies! I hate wasting time on complex software. Everhour just gets out of my way so I can get work done. Very responsive and helpful support! GitHub integration is fantastic and makes time tracking a lot easier and faster! I can build detailed reports of my work for clients. Exporting invoices directly to Freshbooks perfectly integrates my time tracking with my invoicing workflow. The app allows me to quickly start/stop timers when I forgot to do so on the web.”
                        <br/>
                        — Benjamin W. (Source: Capterra)
                        </Text>
                    </Box>
                </Box>
                <Box width='30%'>
                    <Box border='1px solid #D7F2E5' borderRadius='2px' margin='20px 0' padding='20px'>
                        <Text fontSize='10px'>
                        “Everhour is being used by my department now, but it’s planned to be used across the whole company. We were having problems tracking the times of every project and Everhour ended up being the best solution to the issue. We’re tracking our tasks involved in every project, in every level (software development, meetings, project management, etc.)”
                        <br/>
                        — Maria Lucia S. (Source: TrustRadius)
                        </Text>
                    </Box>
                    <Box border='1px solid #D7F2E5' borderRadius='2px' margin='20px 0' padding='20px'>
                        <Text fontSize='10px'>
                        "Initially while working with Jira we had a need to measure the time of our teams in projects. Our main idea was to improve the way we worked based on actual data. After that, we also realized that we should have a tool that can help us plan and track time. We started with the Tempo planner and timesheets. After several updates from those two tools, we decided that we were no longer a fit and that we needed a real solution to our issues that was bug-free and that could actually help us invoice our customers too. Everhour is transparent, clear, and very easy to use. We now track our time, plan out team time in projects and also we invoice our customers in an easy and simple way. Things could not get better!"
                        <br/>
                        — Joaquin G. (Source: Atlassian)
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Center>
            <Flex mt='50px' justifyContent='space-evenly'>
            <Box>
                <Flex>
                <Text fontSize="20px" fontWeight='500' color='#323233'>
                Take control of your time with Everhour
                </Text>
                </Flex>
                <Flex>

                <Text margin="10px 0px 20px" fontWeight="400" fontSize='11px' color='#7F7F7F'>
                Beautiful integrations. Intuitive interface. No unexpected fees
                </Text>
                </Flex>
                <Flex gap={4}>
                    <Input placeholder='Work email...' borderRadius='5px' fontSize='12px' size='sm'/>
                    <Button bg={'#56BB70'} color="white" size='sm' fontSize='10px' fontWeight='400' padding="5px 32px" borderRadius={'3px'} _hover={{bg:'#56BB70', color:"white", boxShadow:'dark-lg'}}>
                        Try it free
                    </Button>
                </Flex>
                <Flex margin="10px 0 70px 0" sx={{alignItems:"center"}}>
                    <Icon as={FcGoogle} fontSize='12px'/>&nbsp;
                    <Text fontSize='10px'>
                        Or sign up with Google Account
                    </Text>
                </Flex>
            </Box>
            <Flex>
            <ul>
                <li style={{color:'#56BB70'}}>
                    <Flex>
                    <Text color='#7F7F7F' fontSize='10px'>
                    Track time from the apps you already use
                    </Text>
                    </Flex>
                </li>
                <li style={{color:'#56BB70'}}>
                    <Flex>
                    <Text color='#7F7F7F' fontSize='10px'>
                    Know where your team’s time is going
                    </Text>
                    </Flex>
                </li>
                <li style={{color:'#56BB70'}}>
                    <Flex>
                    <Text color='#7F7F7F' fontSize='10px'>
                    Keep projects on budget
                    </Text>
                    </Flex>
                </li>
                <li style={{color:'#56BB70'}}>
                    <Flex>

                    <Text color='#7F7F7F' fontSize='10px'>
                    Increase transparency
                    </Text>
                    </Flex>
                </li>
                <li style={{color:'#56BB70'}}>
                    <Flex>

                    <Text color='#7F7F7F' fontSize='10px'>
                    Make your workflow more efficient
                    </Text>
                    </Flex>
                </li>
                <li style={{color:'#56BB70'}}>
                    <Flex>

                    <Text color='#7F7F7F' fontSize='10px'>
                    Spot burnout before it happens
                    </Text>
                    </Flex>
                </li>
            </ul>
            </Flex>
            </Flex>
    </Box>
  )
}

export default Pricing