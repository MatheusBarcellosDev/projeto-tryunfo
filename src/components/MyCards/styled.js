import styled from 'styled-components';

const ContainerMyCards = styled.div`


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

  }

  .listMyCards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    button{
        border: 1px solid #003BE5;
        background-color: transparent;
        color: #003BE5;
        padding: 5px 10px;
        border-radius: 5px;

      }

      button:hover{
        background-color: #003BE5;
        color: white;
      }
  }
    }
`;

export default ContainerMyCards;
