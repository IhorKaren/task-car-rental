import { Container } from 'components/Container/Container.styled';
import CompanyText from 'components/CompanyText/CompanyText';
import { Image } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <CompanyText />
      <Image></Image>
    </Container>
  );
};

export default Home;
