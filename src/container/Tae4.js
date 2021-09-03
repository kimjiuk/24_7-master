import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import tae1 from './image/tae1.jpg';
import tae4 from './image/tae4.jpg';
const Half = styled.div`
    width: 50%;
    float: left;
    display: flex;
    align-items: center;
	justify-content: center;
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://hamonikr.org/files/attach/images/118/312/070/091a9004527320054613ddcdbda75b46.jpg);
  background-size: cover;
`;

const Tae4 = ({history}) => {
    return (
      <Container>
      {
          this.state.ismount && <Button variant="contained" color="secondary" onClick={ () => {this.props.history.goBack()} }> 뒤로 버튼 </Button>
      }
      <div style={{fontSize : 50}} id="load">Loading...</div> 
      <Half>
              <div>
              <img src={tae1} alt="tae1"/>
              
              <div>
              <img src={tae4} alt="tae4"/>
              </div>
              <h2>태권도 기본동작 중 앞차기 동작입니다.</h2>
              
            </div>
          </Half>
          <Half>  
              <div><canvas id="canvas" /></div>  
          </Half>  
      
      
</Container>
    )
}

export default Tae4;
