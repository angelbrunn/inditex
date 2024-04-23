import styled from 'styled-components';

export const CardXlImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-decoration: none;
  min-height: 150px;
  max-width: 300px;
  margin-bottom: 20px;
  transition: ease-in-out all 0.5s;
  margin: 10px;
  img {
    transition: ease-in-out all 0.5s;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .description,
  .infoAuthor {
    color: #000000;
  }

  h2,
  p,
  h3 {
    margin: 10px 0;
    text-align: left;
    width: 100%;
  }
  p {
    margin-top: 0;
    text-align: justify;
    font-size: 14px;
    line-height: 22px;
    font-style: italic;
  }

  hr {
    border: solid #ddd 1px;
    width: 100%;
    margin: 10px 0;
  }

  &:hover {
    box-shadow: 0 2px 10px #3675a7;

    img {
      border: solid #3675a7 5px;
      border-radius: 50%;
    }
  }
`;
