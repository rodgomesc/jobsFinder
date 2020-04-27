/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar } from 'react-native';

import loginBackground from '../../assets/loginBackground.png';
import logo from '../../assets/Logo.png';
import buttonIcon from '../../assets/buttonIcon.png';

import { Neomorph } from 'react-native-neomorph-shadows';
import { useNavigation } from '@react-navigation/native';
import {
  Overlay,
  Container,
  Avatar,
  LoginButton,
  LoginButtonText,
  AppTitle,
  ButtonIcon,
} from './styles';

export default () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar hidden />
      <Overlay source={loginBackground}>
        <Container>
          <Neomorph
            style={{
              shadowRadius: 4,
              shadowOffset: { width: 4, height: 4 },
              width: 192,
              height: 192,
              borderRadius: 96,
              backgroundColor: 'rgba(180,0,255,0.1)',
              marginTop: 160,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Avatar source={logo} />
          </Neomorph>
          <AppTitle>jobs finder</AppTitle>
          <LoginButton onPress={() => navigation.navigate('Home')}>
            <ButtonIcon source={buttonIcon} />
            <LoginButtonText>Logar utilizando Github</LoginButtonText>
          </LoginButton>
        </Container>
      </Overlay>
    </>
  );
};
