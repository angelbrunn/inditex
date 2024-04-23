import styled from 'styled-components';

export const PodcastEpisodesWrapper2 = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  .list-header {
    font-weight: bolder;
    font-size: 15px;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: solid 1px #ddd;
    margin-bottom: 10px;

    .name {
      width: 70%;
    }
  }

  .list-item {
    font-size: 15px;
    padding: 5px;
    border-bottom: solid 1px #ddd;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
    transition: ease-in-out all 0.5s;
    &:hover {
      background-color: #eee;
    }
    a {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #3675a7;
    }
  }

  .name,
  .date,
  .duration {
    color: black;
  }

  .episodes {
    color: black;
    font-weight: 700;
  }
`;

export const PodcastEpisodesWrapper = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  .name-header,
  .date-header,
  .duration-header,
  .episodes {
    color: black;
    font-weight: 700;
  }

  .name-header {
    flex: 0.85;
  }
  .date-header {
    flex: 0.15;
  }

  .title {
    font-weight: bolder;
    font-size: 25px;
  }

  .list-header {
    font-weight: bolder;
    font-size: 15px;
    display: flex;
    height: 50px;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: solid 1px #ddd;
    margin-bottom: 10px;

    .name {
      width: 70%;
    }
  }

  .list-item {
    font-size: 15px;
    padding: 5px;
    border-bottom: solid 1px #ddd;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
    transition: ease-in-out all 0.5s;
    &:hover {
      background-color: #eee;
    }
    a {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #3675a7;
    }

    .name {
      width: 70%;
    }
  }
`;
