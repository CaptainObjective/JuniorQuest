import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onFormSubmit = e => {
    console.log(e);
  };

  return (
    <Segment>
      Logowanie
      {/* {this.state.invalidData && <NegativeMessage header="Błędny email lub hasło" />} */}
      <Form onSubmit={onFormSubmit}>
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
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <Button type="submit">Zaloguj!</Button>
      </Form>
    </Segment>
  );
};

export default LoginForm;
