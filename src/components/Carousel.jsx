import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
        <AiOutlineArrowLeft
          className='arrows'
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px"
          }}
        />
      </div>
    )
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className='arrows'
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px"
          }}
        />
      </div>
    )
  }

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0, 7)?.map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'
            >
              <div
                className='
                  flex flex-col md:flex-row
                  gap-10
                  justify-center
                  items-center
                  min-h-[600px]
                  md:my-0
                  px-4
                '
              >
                {/* ===== TEXT SECTION ===== */}
                <div className='md:space-y-6 space-y-3'>
                  <h3 className='text-red-500 font-semibold font-sans text-sm'>
                    Powering Your World with the Best in Electronics
                  </h3>

                  <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'>
                    {item.title}
                  </h1>

                  <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>
                    {item.description}
                  </p>

                  <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>
                    Shop Now
                  </button>
                </div>

                {/*IMAGE SECTION  */}
                <div
                  className='
                    rounded-full
                    w-[220px] h-[220px]
                    sm:w-[260px] sm:h-[260px]
                    md:w-[320px] md:h-[320px]
                    lg:w-96 lg:h-96
                    hover:scale-105
                    transition-transform
                    shadow-2xl shadow-red-400
                    flex justify-center items-center
                    bg-gray-900
                  '
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-contain p-6 rounded-full'
                  />
                </div>

              </div>
            </div>
          ))
        }
      </Slider>
<Category />
      
    </div>
  )
}

export default Carousel;
