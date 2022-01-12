import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #fff;
  width: 248px;
  height: 329px;

  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0);
  border-radius: 10px;

  margin-top: 50px;

  .cardContainer {
    width: 228px;
    height: 309px;

    background: #036b52;
    border-radius: 10px;
    

    .cardContent {
      display: flex;
      flex-direction: column;
      padding: 10px;

      white-space: wrap;
      word-wrap: break-word;
      text-overflow: Ellipsis;

      .cardName {
        background-color: #023031;
        border-radius: 10px 10px 0px 0px;
      }

      .cardName h3 {
        width: 100%;
        color: #fff;
        margin: 0 -15px;
        padding: 5px;
        text-align: end;

        font-family: "Epilogue", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
      }

      .cardImage {
        position: relative;
        /* width: 100%; */
      }

      .cardImagePrincipal{
        width: 100%;
        height: 135px;
        position: absolute;
      }

      .trunfo-img{
        position: absolute;
        left: 0;
      }

      .trunfo-img img {
        width: 32px;
      }

      .cardDescription {
        transform: rotate(-6.92deg);
        background-color: #036b52;
        width: 100%;
        height: 33px;
        margin-top: 89px;
        padding: 3px;
        

      }

      .cardDescription p {
        margin: 0;

        font-size: 8px;
        line-height: 10px;

        color: #ffffff;

        font-family: "Epilogue", sans-serif;
        font-weight: 300;


      }

      .cardAttr {
        background-color: white;
        margin-top: -14px;
        height: 130px;
        margin-left: 3px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .cardAttr p {
        margin: 5px 0;

        font-family: "Epilogue", sans-serif;
        font-size: 13px;
        font-weight: bold;
    

        color: #3D495C;
      }
    }

    .rareType{
      display: none;
    }
  }
`;

export default Container;
