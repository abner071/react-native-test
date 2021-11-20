import React from 'react';

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

export function SignIn(){
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
            <InputText placeholder="Usuário" />
          </InputContent>
          
          <Divider />
          
          <InputContent>
            <Icon name="key" size={20} />
            <InputText placeholder="Senha" />
          </InputContent>
        </InputWrapp>

        <Button>
          <TitleButton>Entrar</TitleButton>
        </Button>
      </Content>

      <SignInCell>
        <TitleCell>Entrar com celular</TitleCell>
      </SignInCell>
    </Container>
  );
}