import React from 'react';
  
const PhotoGallery = () => {
   
    const image1 = 'https://i.ibb.co/T0nqXKp/toy-galley-photo1.jpg';
    const image2 = 'https://i.ibb.co/RHs1L8W/toy-galley-photo2.jpg';
    const image3 = 'https://i.ibb.co/wzBXyJM/toy-galley-photo3.jpg';
    const image4 = 'https://i.ibb.co/P481P1V/toy-galley-photo4.jpg';
    const image5 = 'https://i.ibb.co/YQtnjp8/toy-galley-photo5.jpg';
    const image6 = 'https://i.ibb.co/jMC7y21/toy-galley-photo6.jpg'
    const image7 = 'https://i.ibb.co/hsvHYRB/toy-galley-photo7.webp';
    const image8 = 'https://i.ibb.co/FVwt3dn/toy-galley-photo8.jpg';
    const image9 = 'https://i.ibb.co/yQQqXL7/toy-galley-photo9.jpg';
    const image10 = 'https://i.ibb.co/kX3b26B/toy-galley-photo10.jpg';
    const image11 = 'https://i.ibb.co/zQvg01J/toy-galley-photo11.jpg';
    const image12 = 'https://i.ibb.co/7J642rk/toy-galley-photo12.jpg';

    return (
        <div className='overflow-hidden'>
           <div className='grid grid-cols-3 lg:grid-cols-4 gap-10 px-5 gallery mt-10'>
            <div >
                <img src={image1}  alt="" />
            </div>
            <div className=''>
                <img src={image2} alt="" />
            </div>
            <div>
                <img src={image3} alt="" />
            </div>
            <div>
                <img src={image4} alt="" />
            </div>
           
            <div>
                <img src={image5} alt="" />
            </div>
            <div>
                <img src={image6} alt="" />
            </div>
            <div>
                <img src={image7} alt="" />
            </div>
            <div>
                <img src={image8} alt="" />
            </div>
            <div>
                <img src={image9} alt="" />
            </div>
            <div>
                <img src={image10} alt="" />
            </div>
            <div>
                <img src={image11} alt="" />
            </div>
            <div>
                <img src={image12} alt="" />
            </div>
           </div>
        </div>
    );
};

export default PhotoGallery;