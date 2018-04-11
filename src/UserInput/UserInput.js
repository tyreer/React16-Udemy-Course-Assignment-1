import React from 'react';

export default function UserInput(props) {
  const style = {
    margin: '80px',
  };

  return (
    <div style={style}>
      <input value={props.textInput} onChange={props.handleChange} type="text" />
      <button onClick={props.onClick}>Add user</button>
    </div>
  );
}
