import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #420080;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-bottom: 50;
  padding-top: 50;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 24px;
  background-color: white;
  borderRadius: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: gray;
  marginBottom: 20px;
  fontWeight: bold
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  marginBottom: 10px;
`

export const Icon = styled(Feather)`
  font-size: 20px;
  color: white;
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountTitle = styled.Text`
  font-size: 18px;
  color: white;
  margin-left: 16px;
`;
