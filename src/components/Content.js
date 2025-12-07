import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elem5Active: false, 
      elem6Active: false  
    };
  }

  // Функція перемикання хобі
  handleElem5Click = () => {
    this.setState(prevState => ({
      elem5Active: !prevState.elem5Active
    }));
  };

  // Функція перемикання фільмів
  handleElem6Click = () => {
    this.setState(prevState => ({
      elem6Active: !prevState.elem6Active
    }));
  };

  render() {
    return (
      <main>
        <h3>Мої хобі:</h3>
        {/* Елемент №5 - список */}
        <ul
          className={`clickable ${this.state.elem5Active ? 'toggled-5' : ''}`}
          onClick={this.handleElem5Click}
        >
          <li>Прогулянки</li>
          <li>Подорожі</li>
          <li>Комп’ютерні ігри</li>
          <li>Спорт</li>
        </ul>

        {/* Елемент №6 - заголовок */}
        <h3
          className={`clickable ${this.state.elem6Active ? 'toggled-6' : ''}`}
          onClick={this.handleElem6Click}
        >
          Улюблені фільми:
        </h3>
        <ol>
          <li>«Зоряні війни» (усі частини, 1977–2019 рр.)</li>
          <li>«Хоббіт» та «Володар перснів»</li>
          <li>«Аватар» (2009 р.)</li>
        </ol>

        <h3>Моє улюблене місто</h3>
        <p>
          Мюнхен — це місто, де гармонійно поєднуються велична історія та
          сучасний ритм життя.
          <br />
          Столиця Баварії вражає архітектурою, парками та атмосферою справжньої
          Європи.
          <br />
          Мені пощастило деякий час жити в Мюнхені, і цей досвід залишив теплі
          спогади.
        </p>
      </main>
    );
  }
}

export default Content;