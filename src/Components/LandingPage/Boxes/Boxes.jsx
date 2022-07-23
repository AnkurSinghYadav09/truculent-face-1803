import React from 'react';
import {
  
  Flex,
  
  Text,
  
  Square,
} from "@chakra-ui/react";
function Boxes(props) {
    return (
        <div>
            <Flex color="white" marginLeft="140px" gap={"40px"} marginTop="80px">
        <Square
          margin="20px"
          w="300px"
          h="570px"
          boxShadow="lg"
          borderRadius={"4px"}
                    border="1px solid #c1f7d8"
                    textAlign="center"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
             fontWeight="bold"
                        letterSpacing="1px"
            fontSize="12px"
            color="#7F7F7F"
          >
           “Everhour has the best integration with Asana compared to other time tracking tools — including Asana’s preferred integration (Harvest). And it’s not just because it’s more affordable than Harvest. With Harvest you have to click the icon in the task to start the time, then you have to set the project and task you want to track time for. That’s 3 additional clicks every time you want to track your time. With Everhour you just click your button to start your time. The product team at Everhour really gets UX here — their integration automatically pulls in all relevant data to your task including task name, section level, project, team, tags, literally everything available via the API! Imagine how useful having all that rich data can be if you want to report on things! No more settling for Asana’s weak and fluffy dashboard reports. With Everhour’s rich data you can export it into a data source to analyze or visualize in BI tools like DataStudio or Tableau.”
            <br />
            <br />— Skyler R. (Source: G2.com)
          </Text>
        </Square>
        <Square
          margin="20px"
                    w="300px"
                    h="350px"
          boxShadow="lg"
          borderRadius={"4px"}
                    border="1px solid #c1f7d8"
                    textAlign="center"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
             fontWeight="bold"
                        letterSpacing="1px"
            fontSize="12px"
            color="#7F7F7F"
          >
            "Simple, elegant, and powerful. My team uses Everhour for a few reasons: (1) It has a simple, intuitive interface; (2) It has a powerful reporting engine that we now use for generating various insights, including employee time analyses and customer invoices; (3) It comes with solid integrations with task management software (we use ClickUp in particular); (4) Per-user costs are low, which is essential for us as we have many part-time employees, some of whom only work a few hours per week."
            <br />
            <br />— Aaron M. (Source: G2.com)
          </Text>
        </Square>
        <Square
          margin="20px"
          w="300px"
          h="330px"
          boxShadow="lg"
          borderRadius={"4px"}
                    border="1px solid #c1f7d8"
                    textAlign="center"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
             fontWeight="bold"
                        letterSpacing="1px"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour is being used by my department now, but it’s planned to be used across the whole company. We were having problems tracking the times of every project and Everhour ended up being the best solution to the issue. We’re tracking our tasks involved in every project, in every level (software development, meetings, project management, etc.)”


            <br />
            <br />— Maria Lucia S. (Source: TrustRadius)
          </Text>
        </Square>
      </Flex>

      <Flex color="white" marginLeft="140px" gap={"40px"}>
        <Square
          margin="20px"
          w="300px"
          h="250px"
          boxShadow="lg"
          borderRadius={"4px"}
                    border="1px solid #c1f7d8"
                    textAlign="center"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
             fontWeight="bold"
                        letterSpacing="1px"
            fontSize="12px"
            color="#7F7F7F"
          >
            "Everhour allows our team to save time on time tracking! Everhour is the best time tracking tool for use with Basecamp. In the past, we have used Toggl and Tick and while they did integrate with Basecamp, it wasn't as seamless as it is with Everhour."


            <br />
            <br />— Kory L. (Source: Capterra)
          </Text>
        </Square>
        <Square
                    margin="20px"
                    marginTop="-210px"
                    w="300px"
                    h="490px"
          boxShadow="lg"
          borderRadius={"4px"}
                    border="1px solid #c1f7d8"
                    textAlign="center"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
             fontWeight="bold"
                        letterSpacing="1px"
            fontSize="12px"
            color="#7F7F7F"
          >
                       “Overall a great and very affordable software with just the right amount of very robust and well thought out features! The perfect tool for freelancers and companies! I hate wasting time on complex software. Everhour just gets out of my way so I can get work done. Very responsive and helpful support! GitHub integration is fantastic and makes time tracking a lot easier and faster! I can build detailed reports of my work for clients. Exporting invoices directly to Freshbooks perfectly integrates my time tracking with my invoicing workflow. The app allows me to quickly start/stop timers when I forgot to do so on the web.”

            <br />
            <br /> — Benjamin W. (Source: Capterra)
          </Text>
        </Square>
        <Square
          margin="20px"
          w="300px"
          h="500px"
          boxShadow="lg"
          borderRadius={"4px"}
                    border="1px solid #c1f7d8"
                    textAlign="center"
                    marginTop="-230px"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
                        fontWeight="bold"
                        letterSpacing="1px"
            fontSize="12px"
            color="#7F7F7F"
          >
            "Initially while working with Jira we had a need to measure the time of our teams in projects. Our main idea was to improve the way we worked based on actual data. After that, we also realized that we should have a tool that can help us plan and track time. We started with the Tempo planner and timesheets. After several updates from those two tools, we decided that we were no longer a fit and that we needed a real solution to our issues that was bug-free and that could actually help us invoice our customers too. Everhour is transparent, clear, and very easy to use. We now track our time, plan out team time in projects and also we invoice our customers in an easy and simple way. Things could not get better!"

            <br />
            <br />— Joaquin G. (Source: Atlassian)
          </Text>
        </Square>
      </Flex>

        </div>
    );
}

export default Boxes;