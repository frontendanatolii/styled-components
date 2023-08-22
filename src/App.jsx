import AlternativeTitle from "./components/AlternativeTitle";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Button";
import Card from "./components/Card";
import ComplexTitle from "./components/ComplexTitle";
import Random from "./components/Random";

import { useState } from 'react'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import Loading from "./components/Loading";
import Form from "./components/Form";
import List from "./components/List";
import Products from "./components/Products";

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  const [baseTheme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!baseTheme)
  }
  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello world</h1>
        <Loading />
        <BasicTitle special>styled</BasicTitle>
        <DefaultButton>button</DefaultButton>
        <HipsterButton>another button</HipsterButton>
        <ComplexTitle title={'title'} />
        <AlternativeTitle title={'title123'} />
        <Random />
        <Card></Card>
        <Form />
        <List />
        <Products />
        <button className='btn' onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
    </ThemeProvider>
  )
}

export default App
