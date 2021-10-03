import React from 'react';
import styled from 'styled-components';

/*******************************************
  Search Styled Component
*******************************************/

const SearchStyled = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  max-width: ${({ width }) => (width ? `${width}px` : 'auto')};

  input {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 800;
    color: ${({ color }) => (color ? color : 'black')};
    box-sizing: border-box;
    height: 30px;
    padding: 5px 30px;
    border-radius: 50px;
    border: ${({ noborder }) => (noborder ? 'none' : '2px solid currentColor')};
    background-color: ${({ background }) =>
      background ? background : 'white'};
    width: 100%;
  }

  input::placeholder {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 800;
    color: ${({ placeColor }) => (placeColor ? placeColor : 'black')};
    width: 100%;
  }

  svg {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ iconColor }) => (iconColor ? iconColor : 'black')};
    font-weight: 400;
    pointer-events: none;
  }
`;

function SearchIcon({ color }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
    </svg>
  );
}

export default function Search({
  width,
  callback,
  background,
  color,
  noborder,
  placeholder,
  placeColor,
  iconColor,
}) {
  const [value, setValue] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
    if (callback) callback(e.target.value);
  }

  return (
    <SearchStyled
      width={width}
      background={background}
      color={color}
      noborder={noborder}
      iconColor={iconColor}
      placeColor={placeColor}
    >
      <input
        type="text"
        name="#"
        placeholder={placeholder ? placeholder : 'Search'}
        autocomplete="off"
        onChange={handleChange}
        value={value}
      />
      <SearchIcon color={color} />
    </SearchStyled>
  );
}

