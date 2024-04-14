import clglogo from '../../images/AMTICSlogo.png';
import unilogo from '../../images/UTUlogo.png';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  padding: 1rem 2rem;
  background-color: whitesmoke;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: 3px solid #FAAC1B;
`;

const CollegeLogo = styled.img`
  height: 100px;
`;

const CollegeName = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 977px) {
    font-size: 1.5rem;
  }


  @media (max-width: 555px) {
    font-size: 1.2rem;
  }
`;

const UniversityLogo = styled.img`
  height: 100px;

  @media (max-width: 555px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <CollegeLogo src={clglogo} alt="clglogo" />
      <CollegeName>Asha M. Tarsadia Institute of Computer Science and Technology</CollegeName>
      <UniversityLogo src={unilogo} alt="unilogo" />
    </Wrapper>
  );
};

export default Header;