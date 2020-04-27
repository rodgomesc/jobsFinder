import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Overlay = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(34,2,234,.8)', 'rgba(204,0,255,.7)'],
})`
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  margin: auto auto;
`;

export const AppTitle = styled.Text`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 22px;
  margin-bottom: 22px;
  font-size: 28px;
  font-weight: bold;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 90%;
  background: #591dc6;
  border-radius: 10px;
  elevation: 15;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const ButtonIcon = styled.Image`
  margin-right: 15px;
`;
