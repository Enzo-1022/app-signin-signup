import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../src/components/screen/button';
import { Input } from '../../src/components/screen/input';
import { Container, Content, Title, Logo } from './styles';
import logo from '../../assets/logo.png';

export const SignUp: React.FunctionComponent = () => {
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
            <Input placeholder="Nome Completo"/>
            <Input placeholder="Email"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confirme Sua Senha"/>
            <Button title='Registrar-Se'/>
          </Content>
        </Container>

      </ScrollView>
    </>
  );
};

