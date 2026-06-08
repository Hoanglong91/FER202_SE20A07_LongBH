import React from 'react';
import { bannerList } from '../data/bannerData';

function MyCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // 👈 tự động chuyển slide 3s
    >
      {/* Slides */}
      <div className="carousel-inner">
        {bannerList.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={banner.imageUrl}
              className="d-block w-100"
              alt={banner.title}
              style={{
                height: '500px',
                objectFit: 'cover'
              }}
            />

            {/* Caption đẹp hơn */}
            <div className="carousel-caption">
              <h2>{banner.title}</h2>
              <p>{banner.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nút chuyển */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default MyCarousel;