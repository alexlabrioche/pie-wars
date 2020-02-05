import React from 'react';
import styled from 'styled-components';

const StyledSorting = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  color: #f2f2f2;
  ul {
    list-style-type: none;
  }
  li {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
`;
function DisplayPieSorting({ data }) {
  return (
    <StyledSorting>
      <ul>
        {data.map((p) => (
          <li>{p.name}</li>
        ))}
      </ul>
    </StyledSorting>
  );
}

export default DisplayPieSorting;
