import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Scheduling } from './components/Scheduling'
import { Invite } from './components/Invite'
import { Form } from './components/Form'
import { BtnOpenModal } from './components/BtnOpenModal'
import { useState } from 'react'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Banner />

      <Scheduling />

      <Invite />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
