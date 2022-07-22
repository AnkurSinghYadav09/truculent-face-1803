import React,{useState} from 'react'
import styled from 'styled-components'
import { FaPlay,FaPause } from 'react-icons/fa';
import ReactPlayer from "react-player"

const Intro = () => {
  const [url, setUrl] = useState("")
  const [play,setPlay]= useState(true)
  

  return (
  <REConatiner>
    <div>
      <h1>Powerful time tracking software with hassle-free integrations</h1>
      <h3>Accurate time tracker for budgeting, client invoicing and painless payroll.
       <br/> Perfect for <a href="#">Asana </a>· <a href="#">Trello</a>  · <a href="#">Basecamp</a> · <a href="#">Jira</a> · <a href="#">ClickUp</a> </h3>
       <button>Try free</button>
       <button>Book a demo</button>
    </div>
      <div>
        <div className='Rcontainer'>
          {url.length > 1 ? <button onClick={()=>setPlay(!play)}><FaPause/></button> : <a onClick={() => setUrl("https://www.youtube.com/watch?v=k2OeJBqXccI&t=1s")} className='play'><FaPlay /></a>}
        </div>
        <div>
          <ReactPlayer url={url} width="100%" height="400px" playing={play } />
         </div>
    </div>
   
  </REConatiner>
  )
}

export {Intro}



const REConatiner = styled.div`
  text-align:center;

  & > div:first-child{
    width:60%;
    margin:auto;
    h1{
      font-size:48px;
      font-weight:bold;
      color:#333333;
    }
    h3{
      color:#767676;
      margin-top:16px;
      font-size:22px;
      line-height:1.4;
      a{
        color:#4B8FE2;
        text-decoration:underline;
      }
    }
    button{
      border-radius:6px;
      width:20%;
      padding:16px 0px;
      font-size:16px;
      margin:30px 16px;
      color:#58BC71;
      border:1px solid #58BC71;
      background-color:white;
    }
    h3+button{
      background-color:#58BC71;
      color:white;
    }
  }

  & > div:nth-child(2){
    width:70%;
    margin:40px auto;
    height:400px;
    background-image:url('https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/home-covid@2x.webp');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
  }
  & > div:nth-child(3){
    p{
      font-size:20px;
      color: #767676;
      margin-bottom:80px;
    }
  }
  
  .Rcontainer {
            position: absolute;
            transform: translate(-50%, -50%);
            padding: 50px;
           margin-left: 450px;
           margin-top:160px

        }

        .play{
            text-decoration: none;
            background-color: white;
            border: 2px solid 58BC71;
            color: #58BC71;
            border-radius: 50%;
            padding: 15px;
            position: absolute;
        }

        .play::after {
            position: absolute;
            content: '';
            bottom: -7px;
            top: -7px;
            left: -7px;
            right: -7px;
            background-color: transparent;
            border-radius: 50%;
            border: 1px solid #58BC71;
            margin: 0px;
            opacity: 1;
            transform-origin: center;
            animation: anim 800ms linear infinite;
        }

        .play::before {
            position: absolute;
            content: '';
            bottom: -7px;
            top: -7px;
            left: -7px;
            right: -7px;
            background-color: transparent;
            border-radius: 50%;
            border: 0.5px solid #58BC71;
            margin: 0px;
            opacity: 0.8;
            transform-origin: center;
            animation: anim 850ms linear 350ms infinite;
        }

        @keyframes anim {
            from {
                margin: 0px;
                opacity: 1;
            }

            to {
                margin: -15px;
                opacity: 0;
            }
        }

`
