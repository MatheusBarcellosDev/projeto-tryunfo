import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Epilogue", sans-serif;

    h2{
        color: #444955;
    }

    label{
        
        color: #3D495C;
        font-weight: bold;
    }


    form{
       width: 50%;
       min-width: 300px;
       display: flex;
       flex-direction: column;

       button{
          background: #003BE5;
          border: none;
          padding: 8px 32px;
          color: white;
          font-size: 16px;
          
          margin-top: 15px;
      }

      button:hover{
        background: #0025A8;
      }
    }

    div {
        padding: 10px;
    }


    .form-group-inputs{
       
        input, textarea{
            width: 100%;
            margin-top: 5px;
            border: none;

            padding: 5px;

            border-bottom: 1px solid #3D495C;
        }

        input:focus, textarea:focus {
                outline: none;
            }
    } 

    .form-group-inputs-atributs{
       
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;

            label{
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
    
    }

    .form-group-inputs-image{
        input{
            width: 100%;
            margin-top: 5px;
        }
        
    }

    .rareType{
        display: flex;
        flex-direction: column;
        padding: 10px;

       select{
           margin-top:10px;
           border: none;
           padding: 5px;

           border-bottom: 1px solid #3D495C;
       }

       select:focus{
           outline: none;
       }

        
    }

    .save-button{
        width: 50%;
    }

`;

export default Container;
