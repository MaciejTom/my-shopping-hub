import styled from 'styled-components/macro';

export const Content = styled.section`
max-width: 1300px;
margin: 0 auto;
display: flex;
justify-content: space-around;
padding: 5rem 2rem;

@media (max-width: 750px) {
    flex-direction: column;
    row-gap: 5rem;
}
`