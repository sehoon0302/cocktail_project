import styled from "styled-components";

const RecipeInfoStyle = styled.div`
  .recipe-container {
    display: flex;
    margin: 16px;
    margin-left: 75px;
    margin-right: 75px;
  }

  .left-section {
    flex: 1;
    position: sticky;
    top: 0;
    margin-right: 101px;
  }

  .image-container {
    position: relative;
    width: 650px;
    height: 700px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    justify-content: flex-end;

    .nav-info {
      display: flex;
      justify-content: space-around;
      background-color: white;
      border-radius: 40px;
      padding: 20px 50px;

      a {
        display: block;
        text-align: center;
        padding: 10px;
        color: black;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: background-color 0.3s;

        &:hover {
          background-color: #555;
          border-radius: 45%;
        }
      }
    }
  }
  .overlay h2 {
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
    font-size: 105px;
    letter-spacing: 5px;
    margin-bottom: 33px;
    color: #A5ffc9;
    -webkit-text-stroke: 1px #444444; /* 텍스트 테두리의 두께와 색상 */
  }


  .right-section {
    flex: 1;
    overflow-y: auto;
    max-height: 100vh;
    color: white;
  }

  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #ffb2b2;
    margin-bottom: 20px;
  }

  #header span {
    font-size: 30px;
    margin: 0;
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
  }

  #header h2 {
    font-size: 50px;
    margin: 8px 0;
  }

  #taste,
  #ingredients,
  #recipe,
  #garnish,
  #description {
    margin-bottom: 40px;
  }

  #taste h2,
  #ingredients h2,
  #recipe h2,
  #garnish h2,
  #description h2 {
    font-size: 35px;
    color: #ffb2b2;
    margin-bottom: 15px;
  }

  #taste p,
  #ingredients li,
  #recipe ul li,
  #garnish p,
  #description p {
    font-size: 25px;
    color: #cdcdcd;
  }
`;

export default RecipeInfoStyle;