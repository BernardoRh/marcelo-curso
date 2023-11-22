import { Form } from './components/Form'
import { Professor } from './components/Professors'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Professor />
      <Form />
    </HomeContainer>
  )
}
