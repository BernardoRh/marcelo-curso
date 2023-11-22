import {
  MeurisPandolfoSeibel,
  PlaceHolder,
  ValeriaBaierleFigueira,
} from '@/utils/professorsInfo'
import {
  FormContainer,
  FormLabel,
  ProfessorAvatar,
  ProfessorInformationOnForm,
  SendButton,
  UserFormApp,
  UserFormLabel,
} from './styles'

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Form() {
  const router = useRouter()
  const { professor } = router.query

  const ChosenProfessorComponent = () => {
    switch (professor) {
      case 'PlaceHolder': {
        return (
          <ProfessorInformationOnForm>
            <ProfessorAvatar src={PlaceHolder.image} alt="" />
            <div>
              <h3>{PlaceHolder.name}</h3>
              <h4>{PlaceHolder.role}</h4>
            </div>
          </ProfessorInformationOnForm>
        )
      }
      case 'ValeriaBaierleFigueira': {
        return (
          <ProfessorInformationOnForm>
            <ProfessorAvatar src={ValeriaBaierleFigueira.image} alt="" />
            <div>
              <h3>{ValeriaBaierleFigueira.name}</h3>
              <h4>{ValeriaBaierleFigueira.role}</h4>
            </div>
          </ProfessorInformationOnForm>
        )
      }
      case 'MeurisPandolfoSeibel': {
        return (
          <ProfessorInformationOnForm>
            <ProfessorAvatar src={MeurisPandolfoSeibel.image} alt="" />
            <div>
              <h3>{MeurisPandolfoSeibel.name}</h3>
              <h4>{MeurisPandolfoSeibel.role}</h4>
            </div>
          </ProfessorInformationOnForm>
        )
      }
    }
  }

  async function handleFormSubmit(data: any) {
    event.preventDefault()
    window.location.assign('https://w.app/RzOn2I')
  }

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <ChosenProfessorComponent />
      <UserFormApp>
        <UserFormLabel htmlFor="">
          <span>Nome</span>
          <input type="text" />
        </UserFormLabel>
        <UserFormLabel htmlFor="">
          <span>Whatsapp</span>
          <input type="number" />
        </UserFormLabel>
        <UserFormLabel htmlFor="" occupation={true}>
          <span>Email</span>
          <input type="email" />
        </UserFormLabel>
      </UserFormApp>
      <FormLabel htmlFor="">
        <span>Pergunta Um?</span>
        <textarea name="" id="" cols={30} rows={10} />
      </FormLabel>
      <FormLabel htmlFor="">
        <span>Pergunta Dois?</span>
        <textarea name="" id="" cols={30} rows={10} />
      </FormLabel>
      <FormLabel htmlFor="">
        <span>Pergunta Tres?</span>
        <textarea name="" id="" cols={30} rows={10} />
      </FormLabel>
      <FormLabel htmlFor="">
        <span>Pergunta Quatro?</span>
        <textarea name="" id="" cols={30} rows={10} />
      </FormLabel>
      <FormLabel htmlFor="">
        <span>Pergunta Cinco?</span>
        <textarea name="" id="" cols={30} rows={10} />
      </FormLabel>
      <SendButton type="submit">ENVIAR RESPOSTAS</SendButton>
    </FormContainer>
  )
}
