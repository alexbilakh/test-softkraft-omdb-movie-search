import React from "react";
import styled from "styled-components";
import MovieSearchContainer from "./components/MovieSearchContainer";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <StyledAppContainer>
        <MovieSearchContainer />
      </StyledAppContainer>
    </React.Fragment>
  );
}

export default App;

// ====== Start styled components ======
const StyledAppContainer = styled.div`
  width: 100%;
  padding: 30px 20px 50px;
  margin: 0px auto;
`;
// ====== End styled components ======
