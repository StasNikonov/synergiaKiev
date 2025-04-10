import './HomeScreen.scss'
import homeScreenEmblem from '../../assets/homeScreenEmblem.png'
import map from '../../assets/map.svg'
import telephone from '../../assets/telephone.svg'

export const HomeScreen = ({innerRef}) => {
  return (
    <main ref={innerRef} className="homeScreen">
      <h1 className="homeScreenTitle">Жилий комплекс <br/> на березі озера</h1>
      <img className="homeScreenEmblem" src={homeScreenEmblem} alt="home screen emblem" />
      <div className="contacts">
        <div className="address">
          <img src={map} alt="map icon"/>
          <p>Івана Кочерги, 17a, Київ</p>
        </div>
        <div className="telephone">
          <img src={telephone} alt="telephone icon"/>
          <p>+38 (099) 999-99-99</p>
        </div>
      </div>
    </main>
  );
};