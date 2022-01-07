import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Description:
          <textarea
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="atribute1">
          Atribute1:
          <input
            type="text"
            name="atribute1"
            id="atribute1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="atribute2">
          Atribute2:
          <input
            type="text"
            name="atribute2"
            id="atribute2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="atribute3">
          Atribute3:
          <input
            type="text"
            name="atribute3"
            id="atribute3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imageInput">
          Image:
          <input
            type="text"
            name="image"
            id="imageInput"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="raretype">
          Raretype:
          <select name="raretype" id="raretype" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="superTrunfo"
            id="superTrunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
