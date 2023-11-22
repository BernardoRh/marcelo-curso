import {
  MeurisPandolfoSeibel,
  PlaceHolder,
  ValeriaBaierleFigueira,
} from '@/utils/professorsInfo'
import {
  ProfessorAvatar,
  ProfessorInformation,
  ProfessorsContainer,
} from './styles'

export function Professor() {
  return (
    <ProfessorsContainer>
      <ProfessorInformation>
        <a href="./form?professor=ValeriaBaierleFigueira">
          <ProfessorAvatar src={ValeriaBaierleFigueira.image} alt="" />
          <div>
            <h3>{ValeriaBaierleFigueira.name}</h3>
            <h4>{ValeriaBaierleFigueira.role}</h4>
          </div>
        </a>
      </ProfessorInformation>

      <ProfessorInformation>
        <a href="./form?professor=MeurisPandolfoSeibel">
          <ProfessorAvatar src={MeurisPandolfoSeibel.image} alt="" />
          <div>
            <h3>{MeurisPandolfoSeibel.name}</h3>
            <h4>{MeurisPandolfoSeibel.role}</h4>
          </div>
        </a>
      </ProfessorInformation>

      <ProfessorInformation occupation={true}>
        <a href="./form?professor=PlaceHolder">
          <ProfessorAvatar src={PlaceHolder.image} alt="" />
          <div>
            <h3>{PlaceHolder.name}</h3>
            <h4>{PlaceHolder.role}</h4>
          </div>
        </a>
      </ProfessorInformation>
    </ProfessorsContainer>
  )
}
