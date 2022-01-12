import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <Container>
        <h2>Adicionar nova carta</h2>
        <form>
          <div className="form-group-inputs">
            <label htmlFor="name">
              Nome
              <input
                type="text"
                name="cardName"
                id="name"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group-inputs">
            <label htmlFor="description">
              Descrição
              <textarea
                name="cardDescription"
                id="description"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group-inputs-atributs">
            <label htmlFor="atribute1">
              Attr01
              <input
                type="number"
                name="cardAttr1"
                id="atribute1"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="atribute2">
              Attr02
              <input
                type="number"
                name="cardAttr2"
                id="atribute2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="atribute3">
              Attr03
              <input
                type="number"
                name="cardAttr3"
                id="atribute3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group-inputs-image form-group-inputs">
            <label htmlFor="imageInput">
              Imagem
              <input
                type="text"
                name="cardImage"
                id="imageInput"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <label htmlFor="raretype " className="rareType">
            Raridade
            <select
              name="cardRare"
              id="raretype"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <div>
            <label htmlFor="superTrunfo">
              {hasTrunfo ? (
                <p>Você já tem um Super Trunfo em seu baralho</p>
              ) : (
                <>
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    id="superTrunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  <span>Super Trybe Trunfo</span>
                </>
              )}
            </label>
          </div>

          <button
            className="save-button"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </Container>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
