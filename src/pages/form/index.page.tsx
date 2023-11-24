import {
  MeurisPandolfoSeibel,
  PlaceHolder,
  ValeriaBaierleFigueira,
} from '@/utils/professorsInfo'
import {
  CheckboxLabel,
  FormContainer,
  FormLabel,
  ProfessorAvatar,
  ProfessorInformationOnForm,
  SendButton,
} from './styles'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export default function Form() {
  const router = useRouter()
  const { professor } = router.query

  useEffect(() => {
    if (router.isReady) {
      if (!professor) {
        router.push('/')
      }
    }
  }, [router.isReady])

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

  const [questions, setQuestions] = useState<string[]>([])

  useEffect(() => {
    switch (professor) {
      case 'PlaceHolder': {
        setQuestions(PlaceHolder?.questions)
        break
      }
      case 'ValeriaBaierleFigueira': {
        setQuestions(ValeriaBaierleFigueira?.questions)
        break
      }
      case 'MeurisPandolfoSeibel': {
        setQuestions(MeurisPandolfoSeibel?.questions)
        break
      }
    }
  }, [professor])

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    window.location.assign('https://w.app/RzOn2I')
  }

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <ChosenProfessorComponent />
      <h6>
        RESPONDA ESTAS QUESTÕES ATRAVEZ DE UM VIDEO, E O ENVIE ATRAVEZ DO
        WHATSSAP
      </h6>
      <FormLabel htmlFor="">
        <span>
          <strong>1.</strong> {questions[0]}
        </span>
      </FormLabel>
      <FormLabel htmlFor="">
        <span>
          <strong>2.</strong> {questions[1]}
        </span>
      </FormLabel>
      <FormLabel htmlFor="">
        <span>
          <strong>3.</strong> {questions[2]}
        </span>
      </FormLabel>
      <FormLabel htmlFor="">
        <span>
          <strong>4.</strong> {questions[3]}
        </span>
      </FormLabel>
      <FormLabel htmlFor="">
        <span>
          <strong>5.</strong> {questions[4]}
        </span>
      </FormLabel>
      <CheckboxLabel>
        <Checkbox.Root className="CheckboxRoot" id="c1">
          <Checkbox.Indicator className="CheckboxIndicator">
            <Check weight="fill" width={18} height={18} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor="c1">
          Necessito apoio em libras.
        </label>
      </CheckboxLabel>
      <SendButton type="submit">ENVIAR RESPOSTAS</SendButton>
    </FormContainer>
  )
}
