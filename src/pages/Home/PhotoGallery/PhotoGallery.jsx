import React from 'react';
  
const PhotoGallery = () => {
    const image1 = 'https://jokomisiada.pl/eng_pl_Hasbro-Disney-Doll-Rapunzel-Tangled-ZA3642-15904_4.jpg';
    const image2 = 'https://live.staticflickr.com/4184/34672508212_c570079b45_b.jpg';
    const image3 = 'https://m.media-amazon.com/images/I/61sTdh33YZL._SX425_.jpg';
    const image4 = 'https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/460022220242?fmt=jpeg&qlt=90&wid=652&hei=652&defaultImage=no-image-image_uk';
    const image9 = 'https://m.media-amazon.com/images/I/71fgaDOy8kS._AC_UF894,1000_QL80_.jpg';
    const image10 = 'https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/460033511124-2?fmt=jpeg&qlt=90&wid=652&hei=652&defaultImage=no-image-image_uk';
    const image11 = 'https://5.imimg.com/data5/EK/LW/NY/SELLER-6479327/jasmine-disney-princess-figurine-500x500.jpg';
    const image12 = 'https://m.media-amazon.com/images/I/81t2O0EbsiL._AC_UF894,1000_QL80_.jpg';
    const image13 = 'https://cf.shopee.ph/file/a4800c031ddda2dc6039d3dcab42f21e';
    const image14 = 'https://m.media-amazon.com/images/I/61d1Wz1z4XS._AC_SY355_.jpg';
    const image15 = 'https://eoms.cutpricebd.com/oms_products/big/164182003631438_33519.png';
    const image16 = 'https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/460011777498?fmt=jpeg&qlt=90&wid=652&hei=652&defaultImage=no-image-image_uk';

    return (
        <div className='overflow-hidden'>
           <div className='grid grid-cols-3 lg:grid-cols-4 gap-10 px-5 gallery mt-10'>
            <div >
                <img src={image9}  alt="" />
            </div>
            <div className=''>
                <img src={image4} alt="" />
            </div>
            <div>
                <img src={image3} alt="" />
            </div>
            <div>
                <img src={image12} alt="" />
            </div>
           
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image10} alt="" />
            </div>
            <div>
                <img src={image11} alt="" />
            </div>
            <div>
                <img src={image2} alt="" />
            </div>
            <div>
                <img src={image13} alt="" />
            </div>
            <div>
                <img src={image14} alt="" />
            </div>
            <div>
                <img src={image15} alt="" />
            </div>
            <div>
                <img src={image16} alt="" />
            </div>
           </div>
        </div>
    );
};

export default PhotoGallery;