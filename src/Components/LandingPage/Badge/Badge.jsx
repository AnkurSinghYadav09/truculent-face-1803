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
        <div class="container">
          <p class="center mb--48"> <small>A time tracker you can trust for life </small></p>
                    <Badged>
                        
                <div><img src={one} alt="" /></div>
                <div><img src={two} alt="" /></div>
                <div><img src={three} alt="" /></div>
                <div><img src={four} alt="" /></div>
                <div><img src={five} alt="" /></div>
                <div><img src={six} alt="" /></div>
                <div><img src={seven} alt="" /></div>
                <div><img src={eight} alt="" /></div>
                <div><img src={nine} alt="" /></div>
                <div><img src={ten}  alt="" /></div>
          </Badged>   
        </div>
      </section>
        </div>
    );
}

export default Badge;

const Badged = styled.div`
display:grid;
width:300px;
grid-template-columns: repeat(10,1fr);
`

