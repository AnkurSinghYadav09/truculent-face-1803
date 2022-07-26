import React, { useState } from 'react'
import styled from 'styled-components';
import dollar from './Images/dollar.png'
import file from './Images/file.png'
import receipt from './Images/receipt.png'
import ghadi from './Images/ghadi.png'
import visual from './Images/visual.png'
import expensive from './Images/expensive.png'




const insideItems = [
  {
    title:"Time tracking",
    desc: "Easy-to-use time tracker. Know the time spent on tasks, hours of work and breaks for each employee",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2@2x.webp",
    icon:ghadi,
  },
  {
    title:"Billing and budgeting",
    desc: "Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2@2x.webp",
    icon:dollar,
  },
  
  {
    title:"Task management",
    desc: "Create tasks, organize them in sections, add time estimates to keep everyone in the loop and on track",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2@2x.webp",
    icon:file,
  },
  {
    title:"Visual planning",
    desc: "View your team’s schedule, know how busy or available someone is, compare plan to the actual time spent",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2@2x.webp",
    icon:visual,
  },
  {
    title:"Expenses",
    desc: "Track work-related expenses with ease. Reimburse employees, use costs in project budgets, add to client invoices",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses@2x.webp",
    icon:expensive,
  },
  
  {
    title:"Invoicing",
    desc: "Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp",
    icon:receipt,
  },
]


const WhatsInside = () => {
  const [imgUrl, setImgUrl] = useState(insideItems[0].url);
  const [show, setShow] = useState(0);


  const handleImgChange = (url,index) => {
    setImgUrl(url)
    setShow(index)
  }
  return (
    <WContainer>
      <PWrapper>
        <div >
          <h1>Use cases</h1>
          <ul>
            {insideItems.map(({title,desc,url,icon},index) => {
            return show ===index ? <li key={title} style={{backgroundColor:"#F0FBF5"}}> 
              <div>
              <img src={icon} alt="icon"/>
              </div>
              <div>
                <h3 onClick={() => handleImgChange(url,index)} >{title}</h3>
                <p>{desc}</p>
              </div>
            </li> : <li key={title}> 
              <div>
              <img src={icon} alt="icon"/>
              </div>
              <div>
                <h3 onClick={() => handleImgChange(url,index)} >{title}</h3>
              </div>
            </li>
            })}
            <button>Product tour</button>
          </ul>
        </div>
        <div>
          <img src={imgUrl} alt="IMG"/>
        </div>
      </PWrapper>
    </WContainer>
    )
}

export {WhatsInside}


const WContainer = styled.div`
  width:96%;
  margin:auto;
  position:relative;
`

const PWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  &  > div{
    margin:0px 1%;
  }
  & > div:first-child{
    flex-basis:30%;
    padding-left:30px;
  }
  & > div:nth-child(2){
    overflow-x:hidden;
    position:absolute;
    top:0;
    left:36%;
    img{
      max-width:120%;
    }
  }
  h1{
      font-size:36px;
      font-weight:500;
    }
  h3{
    font-size:21px;
    font-weight:400;
    border-bottom:22px;
  }
  p{
    font-size:17px;
    word-spacing:2px;
    color:#767676;
  }
  li {
    display:flex;
    margin:16px 0px;
    /* background-color:#F0FBF5; */
    padding:15px 18px;
    margin-bottom:-40px;
    width:90%;
    
  }
  li img{
    max-width:26px;
    margin-right:10px;
  }
  
  li + button{
    border-radius:6px;
      padding:16px 22px;
      font-size:16px;
      margin:30px 16px;
      background-color:#58BC71;
      color:white;
      border: 1px solid white;
  }
  li > div:first-child{
    margin-right:4px;
  }
`
