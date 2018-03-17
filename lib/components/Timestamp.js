import React from 'react';
import storeProvider from './storeProvider';

const timeDisplay = (timestamp) =>
  timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

class Timestamp extends React.Component {
  render() {
    return <div>{this.props.timeStampDisplay}</div>;
  }
}

function extraProps(store) {
  return {
    timeStampDisplay: timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
