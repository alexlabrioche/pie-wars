import React from 'react';
import styled from 'styled-components';

const StyledCmp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WelcomeCmp() {
  return (
    <StyledCmp>
      <h4>Please select datas you don't need...</h4>
    </StyledCmp>
  );
}

export default WelcomeCmp;
