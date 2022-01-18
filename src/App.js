import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

import Container from './Styles';
import MyCards from './components/MyCards';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.handleFilterCard = this.handleFilterCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      myCards: [],
    };
  }

  handleValidation() {
    const maxAtribute = 90;
    const minAtribute = 0;
    const limitSumAtribute = 210;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const cardNumber1 = Number(cardAttr1);
    const cardNumber2 = Number(cardAttr2);
    const cardNumber3 = Number(cardAttr3);

    const sumAtributes = [cardNumber1, cardNumber2, cardNumber3].reduce(
      (acc, curr) => acc + curr,
      0,
    );

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardNumber1 <= maxAtribute
      && cardNumber1 >= minAtribute
      && cardNumber2 <= maxAtribute
      && cardNumber2 >= minAtribute
      && cardNumber3 <= maxAtribute
      && cardNumber3 >= minAtribute
      && sumAtributes <= limitSumAtribute
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  handleFilterCard({ target }) {
    const { myCards, cardsFilter } = this.state;
    this.setState({
      cardsFilter: myCards.filter((card) => {
        if (target.checked) {
          return card.cardTrunfo;
        }
        return card.cardName.includes(target.value) || card.cardRare !== target.value;
      }, console.log(cardsFilter)),
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;
    this.setState(
      {
        [name]: value,
      },
      this.handleValidation,
    );
  }

  handleRemoveCard(name) {
    const { myCards } = this.state;
    const filterCard = myCards.filter((card) => card.cardName !== name);
    this.setState({
      myCards: filterCard,
      hasTrunfo: filterCard.some((card) => card.cardTrunfo),
    });
  }

  handleSave(event) {
    event.preventDefault();

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
      myCards,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState({
      myCards: [...myCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo || hasTrunfo,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      myCards,
    } = this.state;
    return (
      <Container>
        <div className="containerInfo">

          <Form
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleSave }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />

          <aside className="previewCard">
            <h2>Pré-visualização</h2>
            <Card
              className="cardContent"
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </aside>
        </div>
        <MyCards
          myCards={ myCards }
          onRemoveCard={ this.handleRemoveCard }
        />

      </Container>);
  }
}

export default App;
