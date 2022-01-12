import React from 'react';

import PropTypes from 'prop-types';

import Container from './styles';

import logoTrybe from './assets/logoTrybe.png';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <Container>
        <div className="cardContainer">
          <div className="cardContent">
            <div className="cardName">
              <h3 data-testid="name-card">{cardName || 'Java Script'}</h3>
            </div>
            <div className="cardImage">
              <img
                className="cardImagePrincipal"
                src={
                  cardImage
                  || 'https://king.host/blog/wp-content/uploads/2021/05/javascript-para-iniciantes-1-1280x720.png'
                }
                alt={ cardName }
                data-testid="image-card"
              />

              {cardTrunfo ? (
                <>
                  <span className="trunfo" data-testid="trunfo-card">
                    Super Trunfo
                  </span>
                  <span className="trunfo-img disabled">
                    <img src={ logoTrybe } alt="trunfo" />
                  </span>
                </>
              ) : (
                'ok'
              )}
            </div>
            <div className="cardDescription">
              <p data-testid="description-card">
                {cardDescription
                  || `Linguagem de programação interpretada 
                      estruturada, de script em alto nível 
                      com tipagem dinâmica fraca e multiparadigma. 
                      `}
              </p>
            </div>

            <div className="cardAttr">
              <p data-testid="attr1-card">
                Attr01..............................
                {cardAttr1 || '99'}
              </p>
              <p data-testid="attr2-card">
                {`Attr02..............................${cardAttr2 || '99'}`}
              </p>
              <p data-testid="attr3-card">
                {`Attr03..............................${cardAttr3 || '99'}`}
              </p>
            </div>
            <span className="rareType" data-testid="rare-card">
              {cardRare}
            </span>
          </div>
        </div>
      </Container>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
