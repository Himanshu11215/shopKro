import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function ProductSlider() {
  return (
    <>
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5 mb-5 team">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px"}}
          >
            <h5 className="text-primary">Our Team</h5>
            <h1>Meet our expert Team</h1>
          </div>
          <Swiper>
            <div className="team-carousel wow fadeIn " data-wow-delay=".5s">
              <SwiperSlide>
                <div className="rounded team-item">
                  <div className="team-content">
                    <div className="team-img-icon">
                      <div className="team-img rounded-circle">
                        <img
                          src="img/team-1.jpg"
                          className="img-fluid w-60 h-40 rounded-circle"
                          alt="first"
                        />
                      </div>
                      <div className="team-name text-center py-3">
                        <h4 className="">Full Name</h4>
                        <p className="m-0">Designation</p>
                      </div>
                      <div className="team-icon d-flex justify-content-center pb-4">
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded team-item h-20">
                  <div className="team-content">
                    <div className="team-img-icon">
                      <div className="team-img rounded-circle">
                        <img
                          src="img/team-2.jpg"
                          className="img-fluid w-100 rounded-circle"
                          alt="Second"
                        />
                      </div>
                      <div className="team-name text-center py-3">
                        <h4 className="">Full Name</h4>
                        <p className="m-0">Designation</p>
                      </div>
                      <div className="team-icon d-flex justify-content-center pb-4">
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded team-item">
                  <div className="team-content">
                    <div className="team-img-icon">
                      <div className="team-img rounded-circle">
                        <img
                          src="img/team-3.jpg"
                          className="img-fluid w-100 rounded-circle"
                          alt="third"
                        />
                      </div>
                      <div className="team-name text-center py-3">
                        <h4 className="">Full Name</h4>
                        <p className="m-0">Designation</p>
                      </div>
                      <div className="team-icon d-flex justify-content-center pb-4">
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded team-item">
                  <div className="team-content">
                    <div className="team-img-icon">
                      <div className="team-img rounded-circle">
                        <img
                          src="img/team-4.jpg"
                          className="img-fluid w-100 rounded-circle"
                          alt="fourth"
                        />
                      </div>
                      <div className="team-name text-center py-3">
                        <h4 className="">Full Name</h4>
                        <p className="m-0">Designation</p>
                      </div>
                      <div className="team-icon d-flex justify-content-center pb-4">
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-square btn-secondary text-white rounded-circle m-1"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
}
