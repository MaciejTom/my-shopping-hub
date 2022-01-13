import {
    Wrapper,
    Container,
    PageTitle
} from './HeadingSubpage.styles'

export const HeadingSubpage = ({ name }) => {
  return (
    <Wrapper>
      <Container>
        <PageTitle>{name}</PageTitle>
      </Container>
    </Wrapper>
  );
};
