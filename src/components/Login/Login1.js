import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export function Authentication() {
  const { setUser } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Working")
    const data = {
      username: username,
      password: password
    }

    fetch("https://tracker-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r => {
      if(r.ok){
        r.json() 
        .then(r => {
          setUser({username: r.username, email: r.email})
          localStorage.setItem("jwt", r.jwt)
          setUsername("")
          setPassword("")
        })
      } else {
        alert("Error")
      }
    }, [])
  }
  return (
    <div>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleSubmit}>
            <TextInput label="Username" placeholder="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm"
              >
                Forgot password?
              </Anchor>
            </Group>
            <input type="submit" className='btn btn-primary' value="submit" />
          </form>
        </Paper>
      </Container>
    </div>
  );
}