import React from 'react';
import {DetailElement} from "./components/DetailElement/DetailElement.jsx";
import './DetailsScreen.scss'
import bench from '../../assets/bench.png'
import bicycle from '../../assets/bicycle.png'
import building from '../../assets/building.png'
import fountain from '../../assets/fountain.png'

export const DetailsScreen = ({innerRef}) => {
  return (
    <div ref={innerRef} className="sectionDetailsScreen">
      <div className="detailsScreen">
        <DetailElement image={bench} description="Поруч історичні парки та сквери"/>
        <DetailElement image={building} description="Повністю облаштований"/>
        <DetailElement image={fountain} description="7 фонтанів на території"/>
        <DetailElement image={bicycle} description="5 км велодоріжок"/>
      </div>
    </div>
  );
};