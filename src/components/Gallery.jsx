import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

export function Gallery() {
  const galleryImages = [
    {
      src: "https://i.ibb.co/Zpk1hPC2/gallery2.jpg" ,
      alt: "Classical Kathak performance with traditional costume",
      caption: "Traditional Kathak performance showcasing classical movements"
    },
    {
      src: "https://i.ibb.co/NdrpbFmP/gallery1.jpg",
      alt: "Kathak dancer in training session",
      caption: "Students learning fundamental techniques in our studio"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            Our <span className="gallery-title-accent">Gallery</span>
          </h2>
          <p className="gallery-description">
            Witness the beauty and grace of Kathak through our collection of moments 
            captured during classes, performances, and cultural celebrations.
          </p>
        </div>
        
        <div className="gallery-slider">
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-slide">
                <div className="gallery-image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <p className="gallery-caption">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}