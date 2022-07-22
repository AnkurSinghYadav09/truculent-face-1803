import React from 'react';
import one from "./Images/one.png"
import two from "./Images/two.png"
import three from "./Images/three.png"
import four from "./Images/four.png"
import five from "./Images/five.png"
import six from "./Images/six.png"
import seven from "./Images/seven.png"
import eight from "./Images/eight.png"
import nine from "./Images/nine.png"
import ten from "./Images/ten.png"
import styled from 'styled-components';



function Badge(props) {
    return (
        <div>
           <section class="u-grid badges">
        <div class="container" style={{width:"100%",textAlign:"center"}}>
          < p style={{marginTop:"50px"}}><small style={{color:"grey"}} >A time tracker you can trust for life </small></p>
                    <Badged>
                        
                <div><img className='badges' src={one} alt="" /></div>
                <div><img className='badges' src={two} alt="" /></div>
                <div><img className='badges' src={three} alt="" /></div>
                <div><img className='badges' src={four} alt="" /></div>
                <div><img className='badges' src={five} alt="" /></div>
                <div><img className='badges' src={six} alt="" /></div>
                <div><img className='badges' src={seven} alt="" /></div>
                <div><img className='badges' src={eight} alt="" /></div>
                <div><img className='badges' src={nine} alt="" /></div>
                <div><img className='badges' src={ten}  alt="" /></div>
          </Badged>   
        </div>
      </section>
        </div>
    );
}

export default Badge;

const Badged = styled.div`



display:grid;
width:80%;
height:80px;
grid-template-columns: repeat(10,100px);
grid-gap:15px;
margin:auto;
margin-top:50px;


.badges{
  width:100%;
  height:100%;
  object-fit:contain;
}


`

