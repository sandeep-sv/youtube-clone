import React from 'react';
import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const ButtonList = () => {
  const navigate = useNavigate();

  const goToSearch = (button)=>{
    navigate("/buttonSearch/" + encodeURIComponent(button));
    
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    variableWidth: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
   
  };

  const buttonData = ["All","Live","Cricket","News","T-Series","Comedy","Public Speaking","Music","Hollywood","Randy Orton","GOT","Arrow","Marvel","Presentations","Canada","India","Tollywood"];
  
  return (
    <div className='w-[90%] m-auto'>
      <Slider {...settings}>
        {
          buttonData.map((button)=> <div onClick={()=>goToSearch(button)} ><Button name={button}/></div>)
        }
       
      </Slider>
    </div>
  );
};

export default ButtonList;
