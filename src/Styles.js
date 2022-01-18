import styled from 'styled-components';

const Container = styled.div`

  .containerInfo{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .btn-remove{
        background-color: #f44336;
        border: none;
        padding: 8px 32px;
        border-radius: 5px;
        color: #fff;

        margin-top: 10px;
        margin-left: 13%;

    }

  .previewCard {
    background-color: #023031;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: #fff;
      font-family: "Epilogue", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 23px;
      line-height: 20px;
    }
  }
`;

export default Container;
