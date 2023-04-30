import { books } from './dataReleases'
import { Title } from '../Title';
import styled from 'styled-components';
import CardRecommendation from '../CardRecommendation';
import bookImg from '../../imgs/livro2.png';


const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function LatestReleases(){

    return (
        <LatestReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize="36px" 
            >
                Latest Releases
            </Title>
            <NewBooksContainer>
                { books.map( book => (
                    <img src={book.src} alt='book'/>
                ))}
            </NewBooksContainer>
            <CardRecommendation 
                title="May you be interested in ..."
                subtitle="Angular 11"
                description="Building and aplication with Google Plataform"
                img= {bookImg}
            />
        </LatestReleasesContainer>
    )
}

export default LatestReleases;