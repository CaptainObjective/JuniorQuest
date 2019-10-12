import React, { useState } from 'react';
import { Button, Form, Segment, Container, Header, Image } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { me } from '../../App';
const src1 = 'https://i.imgur.com/b7T6bXr.png';

const sign_In = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      fullName
    }
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn, { data }] = useMutation(sign_In, {
    variables: {
      email,
      password,
    },
    refetchQueries: () => [{ query: me }],
  });

  const onFormSubmit = e => {
    console.log(e);
    signIn();
  };

  return (
    <Container>
      <Segment style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}}
      className="segment-blur">
        <Image src={src1} size='medium' centered />
        <Header inverted as="h2">Logowanie</Header>        
        {/* {this.state.invalidData && <NegativeMessage header="Błędny email lub hasło" />} */}
        <Form onSubmit={onFormSubmit}
        >
          <Form.Input
          
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Input
            type="password"
            label="Hasło"
            placeholder="Hasło"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button inverted color='blue' size='massive' type="submit" style={{display: 'block', margin: '0 auto'}} onClick={onFormSubmit}>Zaloguj!</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default LoginForm;
