import React from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../src/components/screen/input';
import { Container, Content, CreateAccount, CreateAccountTitle, Icon, Logo, Title } from './styles';
import { Button } from '../../src/components/screen/button';
import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}


export const SignIn: React.FunctionComponent = () => {
  const navigation = useNavigation< ScreenNavigationProp > ();
  return (
    <>
      <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
      >
        <Container>

          <Content>

            <Logo source={logo}/>
            <Title>Organizador De Escrita</Title>
            <Input placeholder="Email"/>
            <Input placeholder="Senha"/>
            <Button title='Entrar'/>

          </Content>

        </Container>
        
      </ScrollView>  

      <CreateAccount onPress={ () => { navigation.navigate('SignUp') } }>
        <Icon name="log-in"/>
        <CreateAccountTitle>Criar nova conta</CreateAccountTitle>
      </CreateAccount>

    </>
  );
};

