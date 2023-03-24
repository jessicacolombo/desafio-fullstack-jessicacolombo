import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  max-width: 1000px;
  height: 70vh;
  background-color: white;
  border-radius: var(--border-radius);
  margin: 50px auto;
  box-shadow: var(--box-shadow);
  padding: 30px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .section-header > h2 {
    font-size: 1.2rem;
  }

  .section-header > button {
    background-color: transparent;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const StyledCard = styled.li`
  list-style: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px black dashed;
  border-radius: var(--border-radius);

  p {
    font-size: 0.9rem;
    margin-bottom: 5px;
    border-bottom: 1px dashed;
  }

  span {
    font-size: 0.8rem;
  }
`;
