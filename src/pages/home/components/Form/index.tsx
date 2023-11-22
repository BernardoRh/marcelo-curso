import { FormContainer, FormLabel } from './styles'

export function Form() {
  return (
    <FormContainer action="">
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
    </FormContainer>
  )
}
