import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          {/* Basic */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* Mobile Metas */}

          <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* Site Metas */}
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>Rent4u</title>
          {/* slider stylesheet */}
          <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          />
          {/* bootstrap core css */}
          <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          {/* fonts style */}
          <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,600,700&display=swap"
              rel="stylesheet"
          />
          {/* Custom styles for this template */}
          <link href="css/style.css" rel="stylesheet" />
          {/* responsive style */}
          <link href="css/responsive.css" rel="stylesheet" />
          <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                  <a className="navbar-brand" href="index.html">
                    <span>Rent4u</span>
                  </a>
                  <div className="navbar-collapse" id="">
                    <div className="user_option">
                      <a href="">Login</a>
                    </div>
                    <div className="custom_menu-btn">
                      <button onclick="openNav()">
                        <span className="s-1"> </span>
                        <span className="s-2"> </span>
                        <span className="s-3"> </span>
                      </button>
                    </div>
                    <div id="myNav" className="overlay">
                      <div className="overlay-content">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="car.html">Cars</a>
                        <a href="blog.html">Blog</a>
                        <a href="contact.html">Contact Us</a>
                        <a href="#">Login</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
            {/* end header section */}
            {/* slider section */}
            <section className=" slider_section position-relative">
              <div className="slider_container">
                <div className="img-box">
                  <img src="images/hero-img.jpg" alt="" />
                </div>
                <div className="detail_container">
                  <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="detail-box">
                          <h1>
                            Rent Car <br />
                            Experts <br />
                            Service
                          </h1>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="detail-box">
                          <h1>
                            Rent Car <br />
                            Experts <br />
                            Service
                          </h1>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="detail-box">
                          <h1>
                            Rent Car <br />
                            Experts <br />
                            Service
                          </h1>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* end slider section */}
          </div>
          {/* book section */}
          <section className="book_section">
            <div className="form_container">
              <form action="">
                <div className="form-row">
                  <div className="col-lg-8">
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="parkingName">Pick Up Locaion</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="acb "
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="parkingNumber">Drop Location</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="acb "
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="parkingName">Pick Up Date</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="07/09/2020"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="parkingNumber">Return Date</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="07/09/2020"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="btn-container">
                      <button type="submit" className="">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="img-box">
              <img src="images/book-car.png" alt="" />
            </div>
          </section>
          {/* end book section */}
          {/* car section */}
          <section className="car_section layout_padding2-top layout_padding-bottom">
            <div className="container">
              <div className="heading_container">
                <h2>Better Way For Find Your Favourite Cars</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the
                  readable
                </p>
              </div>
              <div className="car_container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/c-1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Choose Your Car</h5>
                    <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/c-2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Get Your Car</h5>
                    <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/c-3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Contact Your Dealer</h5>
                    <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end car section */}
          {/* about section */}
          <section className="about_section layout_padding-bottom">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7 px-0">
                  <div className="img-box">
                    <img src="images/about-img.png" alt="" />
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="detail-box">
                    <h2>About Our Cars</h2>
                    <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout. The
                      point of using Lorem
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end about section */}
          {/* best section */}
          <section className="best_section">
            <div className="container">
              <div className="book_now">
                <div className="detail-box">
                  <h2>Our Best Cars</h2>
                  <p>
                    It is a long established fact that a reader will be distracted by
                    the
                  </p>
                </div>
                <div className="btn-box">
                  <a href="">Book Now</a>
                </div>
              </div>
            </div>
          </section>
          {/* end best section */}
          {/* rent section */}
          <section className="rent_section layout_padding">
            <div className="container">
              <div className="rent_container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/r-1.png" alt="" />
                  </div>
                  <div className="price">
                    <a href="">Rent $200</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/r-2.png" alt="" />
                  </div>
                  <div className="price">
                    <a href="">Rent $200</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/r-3.png" alt="" />
                  </div>
                  <div className="price">
                    <a href="">Rent $200</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/r-4.png" alt="" />
                  </div>
                  <div className="price">
                    <a href="">Rent $200</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/r-5.png" alt="" />
                  </div>
                  <div className="price">
                    <a href="">Rent $200</a>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/r-6.png" alt="" />
                  </div>
                  <div className="price">
                    <a href="">Rent $200</a>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="">See More</a>
              </div>
            </div>
          </section>
          {/* end rent section */}
          {/* blog section */}
          <section className="blog_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>Our Latest Blog</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the
                </p>
              </div>
            </div>
            <div className="blog_container">
              <div className="layout_padding2-top">
                <div className="carousel-wrap ">
                  <div className="owl-carousel">
                    <div className="item">
                      <div className="box">
                        <div className="date-box">
                          <h6>04 Nov 2019</h6>
                        </div>
                        <div className="img-box">
                          <img src="images/b-1.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Vintage</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable The point of using Lorem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="date-box">
                          <h6>04 Nov 2019</h6>
                        </div>
                        <div className="img-box">
                          <img src="images/b-2.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Steering wheels</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable The point of using Lorem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="date-box">
                          <h6>04 Nov 2019</h6>
                        </div>
                        <div className="img-box">
                          <img src="images/b-3.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Buick Car</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable The point of using Lorem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="date-box">
                          <h6>04 Nov 2019</h6>
                        </div>
                        <div className="img-box">
                          <img src="images/b-2.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Steering wheels</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable The point of using Lorem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end blog section */}
          {/* us section */}
          <section className="us_section">
            <div className="container">
              <div className="heading_container">
                <h2>Why choose Us</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the
                </p>
              </div>
            </div>
            <div className="us_container layout_padding2">
              <div className="content_box">
                <div className="box">
                  <div className="img-box">
                    <img src="images/u-1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Low Rent</h5>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/u-2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Fast Car</h5>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/u-3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Safe Car</h5>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="images/u-4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Quick Support</h5>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="">Read More</a>
              </div>
            </div>
          </section>
          {/* end us section */}
          {/* client section */}
          <section className="client_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>What Is say Customer</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the
                </p>
              </div>
              <div className="layout_padding2-top">
                <div className="carousel-wrap ">
                  <div className="owl-carousel">
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at
                            its layout. The point of using Lorem It is a long
                            established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The
                            point of using Lorem
                          </p>
                        </div>
                        <div className="client_id">
                          <div className="img-box">
                            <img src="images/client-1.png" alt="" className="img-1" />
                            <img
                                src="images/client-1-white.png"
                                alt=""
                                className="img-2"
                            />
                          </div>
                          <div className="name">
                            <h6>Established</h6>
                            <p>by the readable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at
                            its layout. The point of using Lorem It is a long
                            established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The
                            point of using Lorem
                          </p>
                        </div>
                        <div className="client_id">
                          <div className="img-box">
                            <img src="images/client-2.png" alt="" className="img-1" />
                            <img
                                src="images/client-2-white.png"
                                alt=""
                                className="img-2"
                            />
                          </div>
                          <div className="name">
                            <h6>Blished</h6>
                            <p>by the readable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at
                            its layout. The point of using Lorem It is a long
                            established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The
                            point of using Lorem
                          </p>
                        </div>
                        <div className="client_id">
                          <div className="img-box">
                            <img src="images/client-1.png" alt="" className="img-1" />
                            <img
                                src="images/client-1-white.png"
                                alt=""
                                className="img-2"
                            />
                          </div>
                          <div className="name">
                            <h6>Establi</h6>
                            <p>by the readable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at
                            its layout. The point of using Lorem It is a long
                            established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The
                            point of using Lorem
                          </p>
                        </div>
                        <div className="client_id">
                          <div className="img-box">
                            <img src="images/client-1.png" alt="" className="img-1" />
                            <img
                                src="images/client-1-white.png"
                                alt=""
                                className="img-2"
                            />
                          </div>
                          <div className="name">
                            <h6>Establi</h6>
                            <p>by the readable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end client section */}
          {/* contact section */}
          <section className="contact_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>Request A call back</h2>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="form_container">
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                              type="text"
                              className="form-control"
                              id="inputName4"
                              placeholder="Name "
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                              type="text"
                              className="form-control"
                              id="inputSubject4"
                              placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col">
                          <input
                              type="email"
                              className="form-control"
                              id="inputEmail4"
                              placeholder="Email id"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="inputMessage"
                            placeholder="Message"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="contact_items">
                <a href="">
                  <div className="img-box">
                    <img src="images/location.png" alt="" />
                  </div>
                  <h6>Loram Ipusum ari lo elisant na</h6>
                </a>
                <a href="">
                  <div className="img-box">
                    <img src="images/call.png" alt="" />
                  </div>
                  <h6>(+12 1234456789)</h6>
                </a>
                <a href="">
                  <div className="img-box">
                    <img src="images/mail.png" alt="" />
                  </div>
                  <h6>demo@gmail.com</h6>
                </a>
              </div>
              <div className="social_container">
                <div className="social-box">
                  <div>
                    <a href="">
                      <img src="images/fb.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="images/twitter.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="images/linkedin.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="images/insta.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end contact section */}
          {/* map section */}
          <section className="map_section">
            {/* map section */}
            <div className="map_container">
              <div className="map-responsive">
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width={600}
                    height={300}
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen=""
                />
              </div>
            </div>
            {/* end map section */}
          </section>
          {/* end map section */}
          {/* footer section */}
          <footer className="container-fluid footer_section">
            <p>
              Copyright © 2020 All Rights Reserved. Design by
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </footer>
          {/* footer section */}
        </>

      </header>
    </div>
  );
}

export default App;
