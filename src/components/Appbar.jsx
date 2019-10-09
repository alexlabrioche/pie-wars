import React from 'react';
import styled from 'styled-components';
// font-family: 'IBM Plex Mono', monospace;
// font-family: 'Roboto', sans-serif;
const StyledAppbar = styled.div`
  height: 100%;
  padding: 0rem 2rem;
  color: #f2f2f2;
  /* background: #232225; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    span {
      cursor: pointer;
      transition: color 200ms ease;
      &:hover {
        color: paleturquoise;
      }
    }
  }
  h3 {
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    font-style: italic;
    color: #aaa;
  }
`;
function Appbar() {
  const [woman, setWoman] = React.useState(false);
  return (
    <StyledAppbar>
      <h1 onClick={() => setWoman((s) => !s)}>
        <span role="img" aria-label="AstroMan">
          {woman ? '👩‍🚀' : '👨‍🚀'} PieWars
        </span>
      </h1>
      <h3>All the Star Wars data U never wanted to know...</h3>
    </StyledAppbar>
  );
}

export default Appbar;
