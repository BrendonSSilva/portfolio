import styled from 'styled-components';

// Definindo o tema
export const theme = {
    primary: '#12141F',
    secondary: '#ffffff',
};

// Definindo a interface para as props
interface Props {
    variant?: 'primary' & 'secondary';
}

// Definindo nosso componente Section com as props tipadas
export const Section = styled.section<Props>`
  width: 100%;
  margin: 100px;
  font-size: 1em;
  margin: 1em;
  padding: 20px;
  border-radius: 3px;
  color: ${props => props.variant === 'primary' ? props.theme.secondary : props.theme.primary};
  background-color: ${props => props.variant === 'primary' ? props.theme.primary : props.theme.secondary};
`;
