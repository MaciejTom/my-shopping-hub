import {
    Wrapper,
    Container,
    PageTitle
} from './HeadingSubpage.styles'

const HeadingSubpage = ({ name }) => {
  return (
    <Wrapper>
      <Container>
        <PageTitle>{name}</PageTitle>
      </Container>
    </Wrapper>
  );
};

export default HeadingSubpage
