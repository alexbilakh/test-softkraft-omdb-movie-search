import React from "react";
import styled from "styled-components";

interface StatusBarProps {
  errorMessage: string;
  totalCount: number;
}

const StatusBar = ({ errorMessage, totalCount }: StatusBarProps) => {
  return (
    <StyledStatusBarContainer>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}

      <StyledStatusMessageContainer>
        {totalCount} movies found.
      </StyledStatusMessageContainer>
    </StyledStatusBarContainer>
  );
};

export default React.memo(StatusBar);

// ====== Start styled components ======
const StyledStatusBarContainer = styled.div`
  margin-top: 8px;
  font-size: 13pt;
`;

const StyledStatusMessageContainer = styled.div`
  font-size: 11pt;
`;

const StyledErrorMessage = styled.div`
  margin-top: 10px;
  color: crimson;
`;
// ====== End styled components ======
