import {
  ProfessorAvatar,
  ProfessorInformation,
  ProfessorsContainer,
} from './styles'

import ValeriaBaierleFigueira from './assets/ValeriaBaierleFigueira.jpg'
import MeurisPandolfoSeibel from './assets/MeurisPandolfoSeibel.jpg'
import PlaceHolder from './assets/PlaceHolder.jpg'

export function Professor() {
  return (
    <ProfessorsContainer>
      <ProfessorInformation>
        <ProfessorAvatar src={ValeriaBaierleFigueira} alt="" />
        <div>
          <h3>Valéria Baierle Figueira</h3>
          <h4>Consultora Business</h4>
        </div>
        {/* <p>
          Palestrante, Bel. Direito, MBW gestão pela FGV, Analista
          Comportamental, Membro da Sociedade Latino Americana de Coach,
          Practitioner PNL, integrante do Acelerad.Mulheres/Federasul, co-autora
          Liv. Prof. de Alta Performance - Ed.Literare
        </p> */}
      </ProfessorInformation>

      <ProfessorInformation>
        <ProfessorAvatar src={MeurisPandolfoSeibel} alt="" />
        <div>
          <h3>Meuris Pandolfo Seibel</h3>
          <h4>Coaching de Comunicação</h4>
        </div>
        {/* <p>
          Aprenda técnicas simples para organizar e memorizar as suas
          apresentações, vídeos, lives. DESTRAVE para vender mais, ser mais
          popular e influente. Quem FALA BEM diante das pessoas já é um líder
          por natureza. Método Próprio com 22 anos de eficiência comprovada.
        </p> */}
      </ProfessorInformation>

      <ProfessorInformation occupation={true}>
        <ProfessorAvatar src={PlaceHolder} alt="" />
        <div>
          <h3>Lorem ipsum</h3>
          <h4>dolor sit amet, consectetur</h4>
        </div>
        {/* <p>
          Aprenda técnicas simples para organizar e memorizar as suas
          apresentações, vídeos, lives. DESTRAVE para vender mais, ser mais
          popular e influente. Quem FALA BEM diante das pessoas já é um líder
          por natureza. Método Próprio com 22 anos de eficiência comprovada.
        </p> */}
      </ProfessorInformation>
    </ProfessorsContainer>
  )
}
