import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
   Container,
   Header,
   Content,
   Title,
   InputWrapp,
   InputContent,
   Divider,
   InputText,
   Button,
   TitleButton,
   Icon,
   SignInCell,
   TitleCell,
} from './styles';

import { useTheme } from 'styled-components';

import { useAuth } from '../../hooks/auth';

export function SignIn(){
  const theme = useTheme();
  const { signIn, escolas } = useAuth();

  const [ loading, setLoading ] = useState(false);
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleLogin(value: any){
      setLogin(value);
  }

  function handlePassword(value: any){
    setPassword(value);
  }

  async function handleSignIn(){
    try{
      if(login === ''){
        Alert.alert("Informe o usuário!");
  
      }else if(password === ''){
        Alert.alert("Informe a senha!");
  
      }else{
        setLoading(true);
        return await signIn(login, password);
      }
    } catch(error){
      Alert.alert("Não foi possível fazer login!");
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <Icon name="chevron-left" size={30} />

        <Icon name="help-circle" size={30} />
      </Header>

      <Content>
        <Title>
          Informe o usuário e a senha {`\n`}
          encaminhados pela escola
        </Title>

        <InputWrapp>
          <InputContent>
            <Icon name="user" size={20} />
            <InputText 
              placeholder="Usuário" 
              onChangeText={handleLogin}
              value={login}
            />
          </InputContent>
          
          <Divider />
          
          <InputContent>
            <Icon name="key" size={20} />
            <InputText 
              placeholder="Senha" 
              onChangeText={handlePassword}
              value={password}
            />
          </InputContent>
        </InputWrapp>

        <Button onPress={() => handleSignIn()}>
          <TitleButton>Entrar</TitleButton>
        </Button>

        {loading && <ActivityIndicator color="black" style={{ marginTop: 15, alignSelf: 'center' }} />}
      </Content>

      <SignInCell>
        <MaterialCommunityIcons name="cellphone-android" size={24} color={theme.colors.secondary} />
        <TitleCell>Entrar com celular</TitleCell>
      </SignInCell>
    </Container>
  );
}