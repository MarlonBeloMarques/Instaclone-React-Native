import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <Routes />
    </>
  );
}
