import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

 /*  height: 100vh; */

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

export const ContainerMyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  color: #444955;
  font-family: "Epilogue", sans-serif;

  height: 100vh;

  margin-top: 80px;

  input,
  select {
    width: 100%;
    padding: 10px;

    border-radius: 5px;

    border: 1px solid #444955;

    margin: 5px 0;
  }

  input:focus,
  select:focus {
    outline: none;
  }

  select {
    width: 114%;
    background-color: transparent;
  }

  .myCards {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .filterSuperTrunfo {
      display: flex;
      align-items: center;

        input {
          width: 20px;
          margin-right: 10px;
    }
    }
    .btnFilter{

      margin-top: 10px;

        button{
          background: #003BE5;
          border: none;
          padding: 8px 32px;
          color: white;
          font-size: 16px;

      }

      button:hover{
        background: #0025A8;
      }
  }
  }

  .listMyCards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    ul{
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      button{
        border: 1px solid #003BE5;
        background-color: transparent;
        color: #003BE5;
        padding: 5px 10px;
      }

      button:hover{
        background-color: #003BE5;
        color: white;
      }

  }
`;
