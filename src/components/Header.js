import React from 'react';

function Header(props) {
  return (
    <header>
      <h2>{props.title}</h2>
      <p>
        <strong>Дата і місце народження:</strong> {props.birthInfo}
      </p>
      <p>
        <strong>Освіта:</strong> {props.educationSchool}; <br />
        {props.educationUni}
      </p>
    </header>
  );
}

export default Header;