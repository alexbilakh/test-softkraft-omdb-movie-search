import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface SearchBarProps {
  onSearchTextChanged: (searchText: string) => void;
}

const SearchBar = ({ onSearchTextChanged }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  // search-text change event
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  // search-form submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearchTextChanged(searchText);
  };

  return (
    <StyledSearchBarContainer onSubmit={handleSubmit}>
      <StyledSearchInput
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search movies..."
        autoFocus
      />

      <StyledSearchButton type="submit">Search</StyledSearchButton>
    </StyledSearchBarContainer>
  );
};

export default React.memo(SearchBar);

// ====== Start styled components ======
const StyledSearchBarContainer = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  column-gap: 10px;
`;

const StyledSearchInput = styled.input`
  flex: 1;
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }

  &::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`;

const StyledSearchButton = styled.button`
  padding: 6px 14px;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
`;
// ====== End styled components ======
