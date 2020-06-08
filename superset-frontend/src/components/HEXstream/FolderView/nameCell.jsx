import React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import EqualizerIcon from '@material-ui/icons/Equalizer';

export default function NameCell(props) {
  const child = props.data.child;

  return (
    <div className="middle">
      { child ? <FolderOpenIcon className="left" /> : <EqualizerIcon className="left" /> }
      <span className="left pl-5"> {props.data.name} </span>
    </div>
  );
}
