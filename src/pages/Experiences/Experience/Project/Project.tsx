import Technologies from '../Technologies';

import { Container, Descriptiopn, Header, State, Title } from './Project.styled';

const Project = ({ title, state, technologies = [], children }: ProjectProps) => (
  <Container>
    <Header>
      <Title>
        {title}&nbsp;{state && <State>· {state}</State>}
      </Title>
    </Header>
    <Descriptiopn>{children}</Descriptiopn>
    {technologies.length > 0 && <Technologies technologies={technologies} />}
  </Container>
);

export default Project;

interface ProjectProps {
  title: string;
  state?: string;
  technologies?: string[];
  children?: React.ReactNode;
}
