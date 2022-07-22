import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const boxes = [
  {
    title:"Free guides and templates to help your team work better",
    heding:"Resources",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-guide-and-templates@2x.webp",
  },
  {
    title: "Short videos to learn the best way to use Everhour",
    heding:"Video tutorials",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-tutorial-videos@2x.webp",
  },
  {
    title: "Your first destination for the freshly released Everhour features",
    heding:"Blog",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-product-updates@2x.webp",
  },
  {
    title: "FAQ, tutorials, documentation, help, and support",
    heding:"Help center",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-help-docs@2x.webp",
  },
]

const Blog = () => {
  return(
    <BContainer>
      <div>
        <div>
          <h2>Get more from Everhour</h2>
          <p>Productivity tips and techniques, tutorials, guides, and other time management resources</p>
        </div>

        <div>
          {boxes.map((({title,img,heding}) => {
            return (
              <div key={title}>
                <img src={img} alt="" />
                <p style={{color:"grey"}}>{heding }</p>
                <h3>{title}</h3>
              </div>
            )
          } ))}
        </div>
      </div>

      <BTryFree>
        <div>
          <h2>Take control of your time with Everhour</h2>
          <p>Beautiful integrations. Intuitive interface. No unexpected fees</p>
          <div className='bottom-input'>
            <input type="text" placeholder="Work email..."/>
            <button>Try free</button>
          </div>
          <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F2x%2Fgoogle-logo.png&f=1&nofb=1" alt=""/>
            <p>Or sign up with Google Account</p>
          </div>
        </div>

        <ul className='ulist'>
          <li>
            <i></i>
            <p>Track time from the apps you already use</p>
          </li>

          <li>
            <i></i>
            <p>Know where your team’s time is going</p>
          </li>

          <li>
            <i></i>
            <p>Keep projects on budget</p>
          </li>

          <li>
            <i></i>
            <p>Increase transparency</p>
          </li>

          <li>
            <i></i>
            <p>Make your workflow more efficient</p>
          </li>

          <li>
            <i></i>
            <p>Spot burnout before it happens</p>
          </li>
        </ul>
        
      </BTryFree>
    </BContainer>
  )
}

export {Blog}

const BContainer = styled.div`
  & > div{
    width:96%;
    margin:40px auto 100px;

    & > div:first-child{
      text-align:center;
      margin-bottom:40px;
      h2{
        font-size:38px;
        font-weight:500;
        margin-bottom:10px;
      }
      p{
        font-size:20px;
        color:#767676;
      }
    }

    & > div:nth-child(2){
      display:flex;
      justify-content:space-between;

      & > div{
        width:100%;
        margin:0px 1%;
        padding:24px;
        box-shadow:1px 1px 1px silver, -1px -1px 1px silver;
        /* border:1px solid red; */
        transition: box-shadow 0.4s ease-in;
        img{
          max-width:100%;
        }
        h3{
          width:90%;
          margin-top:10px;
          line-height:1.4;
          word-spacing:3px;
          font-size:24px;
          font-weight:545;
          transition: color 0.2s ease-in;
        }
      }
      & > div:hover h3{
        color:#58BC71;
      }
      & > div:hover{
        box-shadow:2px 2px 2px silver, -2px -2px 2px silver;
      }
    }
    & > div:nth-child(3){
      width:100%;
      margin:32px auto;
      text-align:center;
      a{
        font-size:18px;
        color:#4B8FE2;
        text-decoration:underline;
      }
    }
  }
`


const BTryFree = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  &  > div{
    text-align:left !important;
    h2{
      font-size:35px;
      font-weight:540;
      margin-bottom:10px;
    }
    p{
      font-size:18px;
      color:#767676;
    }
    .bottom-input{
      display:flex;
      margin-bottom:-35px
    }
    button{
      border-radius:6px;
      width:30%;
      padding:16px;
      font-size:16px;
      margin:30px 16px;
      background-color:#58BC71;
      color:white;
      border: 1px solid white
    }

    input{
      width:47%;
      border:1px solid black;
      border-radius:6px;
      font-size:16px;
      padding:3% 3%;
      height:16%;
      margin-top:25px;
    }
    img{
      width:24px;
      margin-right:10px;
    }

    & > div:last-child{
      display:flex;
      align-items:center;
    }
    
  }


  .ulist{
    li{
      display:flex;
      align-items:center;
      margin:18px 0px;
      i{
        margin-right:12px;
        font-size:12px;
        padding:6px;
        background-color:#58BC71;
        border-radius:50%;
        border:none;
        letter-spacing: 1px;
      }
      p{
        font-size:19px;
        font-weight:540;
      }
    }
  }
`

