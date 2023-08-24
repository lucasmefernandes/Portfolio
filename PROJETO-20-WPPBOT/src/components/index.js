import styled from "styled-components";
import Header from "./Header";
import Main from "./Main"
import wallpaper from "../img/pattern.png"
import Footer from "./xFooter";

const MainCentralize = styled.div`
    position: relative;
    width: 100%;
    height: 90.8vh; 
    display: flex;
    justify-content: center;
    background:  #e5ddd5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${wallpaper});
        opacity: 0.06;
    }

    @media (min-width: 0px) and (max-width: 1024px) {
      height: 100%
  }
`;

function Home() {

  return (
    <>
      <Header />
      
      <MainCentralize>
        <Main />
      </MainCentralize>
      <Footer />
    </>
  )
}

export default Home;
