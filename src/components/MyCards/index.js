import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import ContainerMyCards from './styled';

class MyCards extends Component {
  constructor() {
    super();

    this.state = {
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.raridade = this.raridade.bind(this);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;
    const newValue = value === 'todas' ? '' : value;
    this.setState({
      [name]: newValue,
    });
  }

  raridade(event) {
    const { name } = event.target;
    const value = event.target.value === 'Raridade' ? '' : event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { myCards, onRemoveCard } = this.props;
    const { filterName, filterRare, filterTrunfo } = this.state;

    const renderCards = myCards.filter((card) => card.cardName.includes(filterName))
      .filter((card) => (filterRare !== '' ? card.cardRare === filterRare
        : card.cardRare.includes(filterRare)))
      .filter((card) => (filterTrunfo ? card.cardTrunfo : true))
      .map((card) => (
        <div className="card-container" key={ Math.random() }>
          <Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardImage={ card.cardImage }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
          <button
            type="button"
            data-testid="delete-button"
            onClick={ () => onRemoveCard(card.cardName) }
          >
            Excluir
          </button>

        </div>
      ));

    return (
      <ContainerMyCards>
        <div className="myCards">
          <h3>Todas as cartas</h3>

          <h5>Filtros de busca</h5>

          <input
            type="text"
            placeholder="Nome da carta"
            id="nameCard"
            onChange={ this.handleChange }
            name="filterName"
            data-testid="name-filter"
          />
          <select
            onChange={ this.handleChange }
            name="filterRare"
            data-testid="rare-filter"
          >
            <option selected>todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <div className="filterSuperTrunfo">
            <input
              type="checkbox"
              name="filterTrunfo"
              onChange={ this.handleChange }
              data-testid="trunfo-filter"
            />
            <span>Super Trunfo</span>
          </div>
        </div>

        <div className="listMyCards">

          {renderCards}

        </div>
      </ContainerMyCards>
    );
  }
}

MyCards.propTypes = {
  myCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveCard: PropTypes.func.isRequired,

};

export default MyCards;
