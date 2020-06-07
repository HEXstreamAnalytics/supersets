import React from 'react';
import Row from './row';

export default function ActionCell(props) {
  const row = props.data;

  return (
    <Row data={row} />
  );
}
