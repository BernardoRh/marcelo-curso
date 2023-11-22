import { FormContainer, FormLabel, UserFormApp, UserFormLabel } from './styles'

export function Form() {
  return (
    <FormContainer action="">
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
    </FormContainer>
  )
}
