import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(34,2,234,.8)', 'rgba(204,0,255,.7)'],
})`
  flex: 1;
`;

export const Overlay = styled.ImageBackground`
  flex: 1;
`;

export const AvatarWrapper = styled.View`
  width: 192px;
  height: 192px;
  border-radius: 96px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.2);
`;

export const Avatar = styled.Image`
  margin: auto auto;
`;
