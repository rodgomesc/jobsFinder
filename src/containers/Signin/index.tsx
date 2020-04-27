/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import loginBackground from '../../assets/loginBackground.png';
import logo from '../../assets/Logo.png';
import { Neomorph } from 'react-native-neomorph-shadows';

import { Overlay, Container, Avatar, AvatarWrapper } from './styles';

export default () => (
  <Overlay source={loginBackground}>
    <Container>
      <Neomorph
        style={{
          shadowRadius: 4,
          shadowOffset: { width: 4, height: 4 },
          width: 192,
          height: 192,
          borderRadius: 96,
          backgroundColor: 'rgba(204,0,255,0.1)',
          marginTop: 60,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Avatar source={logo} />
      </Neomorph>
    </Container>
  </Overlay>
);
