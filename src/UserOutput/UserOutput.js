import React from 'react';
import './UserOutput.css';

export default function UserOutput(props) {
  return (
    <div className="UserOutput">
      <p>User name: {props.name}</p>
      <p>{`${props.name} `.repeat(30)}</p>
    </div>
  );
}
