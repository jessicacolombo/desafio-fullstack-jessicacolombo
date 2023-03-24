import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px 0px;
  border-radius: 5px;

  .header-container {
    max-width: 1000px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-container > button {
    color: #29b6f6;
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }

  .infos-container {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .infos-container > h2 {
    font-size: 1.2rem;
  }

  .infos-container span {
    font-size: 0.9rem;
  }
`;
