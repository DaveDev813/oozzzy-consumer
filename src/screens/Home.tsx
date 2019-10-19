import React, { ReactElement } from 'react';
// import InitialHome from '../components/InitialHome';
import withLayout from '../components/Layout';
import SnackbarNotif, { SnackbarVariant } from '../components/Snackbar';
import API, { ApiResponse } from '../utils/api';

const Home: React.FC = (): ReactElement => {
  const [hasNotif, setHasNotif] = React.useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });
  React.useEffect((): void => {
    const checkApi = async (): Promise<void> => {
      const call: ApiResponse = await API.get('/connection');
      if (call.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }
    };
    checkApi();
  }, []);
  return (
    <div className="mainContainerTest">
      <SnackbarNotif
        onCloseSnackbar={(): void =>
          setHasNotif({
            isOpen: false,
            variant: hasNotif.variant,
            message: '',
          })
        }
        {...hasNotif}
      />
      <section className="hero-home">
        <div className="swiper-container hero-slider">
          <div className="swiper-wrapper dark-overlay">
            <div
              style={{
                backgroundImage:
                  'url(img/photo/photo-1501621965065-c6e1cf6b53e2.jpg)',
              }}
              className="swiper-slide"
            />
            <div
              style={{
                backgroundImage:
                  'url(img/photo/photo-1519974719765-e6559eac2575.jpg)',
              }}
              className="swiper-slide"
            />
            <div
              style={{
                backgroundImage:
                  'url(img/photo/photo-1490578474895-699cd4e2cf59.jpg)',
              }}
              className="swiper-slide"
            />
            <div
              style={{
                backgroundImage:
                  'url(img/photo/photo-1534850336045-c6c6d287f89e.jpg)',
              }}
              className="swiper-slide"
            />
          </div>
        </div>
        <div className="container py-6 py-md-7 text-white z-index-20">
          <div className="row">
            <div className="col-xl-10">
              <div className="text-center text-lg-left">
                <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">
                  The best holiday experience
                </p>
                <h1 className="display-3 font-weight-bold text-shadow">
                  Stay like a local
                </h1>
              </div>
              <div className="search-bar mt-5 p-3 p-lg-1 pl-lg-4">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-4 d-flex align-items-center form-group">
                      <input
                        type="text"
                        name="search"
                        placeholder="What are you searching for?"
                        className="form-control border-0 shadow-0"
                      />
                    </div>
                    <div className="col-lg-3 d-flex align-items-center form-group">
                      <div className="input-label-absolute input-label-absolute-right w-100">
                        <label htmlFor="location" className="label-absolute">
                          <i className="fa fa-crosshairs" />
                          <span className="sr-only">City</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          id="location"
                          className="form-control border-0 shadow-0"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center form-group no-divider">
                      <select
                        title="Categories"
                        data-style="btn-form-control"
                        className="selectpicker"
                      >
                        <option value="small">Restaurants</option>
                        <option value="medium">Hotels</option>
                        <option value="large">Cafes</option>
                        <option value="x-large">Garages</option>
                      </select>
                    </div>
                    <div className="col-lg-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block rounded-xl h-100"
                      >
                        Search{' '}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-100">
        <div className="container">
          <div className="text-center pb-lg-4">
            <p className="subtitle text-secondary">
              One-of-a-kind vacation rentals{' '}
            </p>
            <h2 className="mb-5">Booking with us is easy</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-3 mb-lg-0 text-center">
              <div className="px-0 px-lg-3">
                <div className="icon-rounded bg-primary-light mb-3">
                  <svg className="svg-icon text-primary w-2rem h-2rem">
                    <use xlinkHref="#destination-map-1" />
                  </svg>
                </div>
                <h3 className="h5">Find the perfect rental</h3>
                <p className="text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed in
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 text-center">
              <div className="px-0 px-lg-3">
                <div className="icon-rounded bg-primary-light mb-3">
                  <svg className="svg-icon text-primary w-2rem h-2rem">
                    <use xlinkHref="#pay-by-card-1" />
                  </svg>
                </div>
                <h3 className="h5">Book with confidence</h3>
                <p className="text-muted">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pit
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 text-center">
              <div className="px-0 px-lg-3">
                <div className="icon-rounded bg-primary-light mb-3">
                  <svg className="svg-icon text-primary w-2rem h-2rem">
                    <use xlinkHref="#heart-1" />
                  </svg>
                </div>
                <h3 className="h5">Enjoy your vacation</h3>
                <p className="text-muted">
                  His room, a proper human room although a little too small, lay
                  peacefully between its four familiar{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-white">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-primary">Stay and eat like a local</p>
              <h2>Our guides</h2>
            </div>
            <div className="col-md-4 d-lg-flex align-items-center justify-content-end">
              <a href="category.html" className="text-muted text-sm">
                See all guides
                <i className="fas fa-angle-double-right ml-2" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container guides-slider">
              {/* Additional required wrapper*/}
              <div className="swiper-wrapper pb-5">
                {/* Slides*/}
                <div className="swiper-slide h-auto px-2">
                  <div className="card card-poster gradient-overlay mb-4 mb-lg-0">
                    <a href="category.html" className="tile-link" />
                    <img
                      src="img/photo/new-york.jpg"
                      alt="Card image"
                      className="bg-image"
                    />
                    <div className="card-body overlay-content">
                      <h6 className="card-title text-shadow text-uppercase">
                        New York
                      </h6>
                      <p className="card-text text-sm">The big apple</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto px-2">
                  <div className="card card-poster gradient-overlay mb-4 mb-lg-0">
                    <a href="category.html" className="tile-link" />
                    <img
                      src="img/photo/paris.jpg"
                      alt="Card image"
                      className="bg-image"
                    />
                    <div className="card-body overlay-content">
                      <h6 className="card-title text-shadow text-uppercase">
                        Paris
                      </h6>
                      <p className="card-text text-sm">
                        Artist capital of Europe
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto px-2">
                  <div className="card card-poster gradient-overlay mb-4 mb-lg-0">
                    <a href="category.html" className="tile-link" />
                    <img
                      src="img/photo/barcelona.jpg"
                      alt="Card image"
                      className="bg-image"
                    />
                    <div className="card-body overlay-content">
                      <h6 className="card-title text-shadow text-uppercase">
                        Barcelona
                      </h6>
                      <p className="card-text text-sm">
                        Dalí, Gaudí, Barrio Gotico
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto px-2">
                  <div className="card card-poster gradient-overlay mb-4 mb-lg-0">
                    <a href="category.html" className="tile-link" />
                    <img
                      src="img/photo/prague.jpg"
                      alt="Card image"
                      className="bg-image"
                    />
                    <div className="card-body overlay-content">
                      <h6 className="card-title text-shadow text-uppercase">
                        Prague
                      </h6>
                      <p className="card-text text-sm">
                        City of hundred towers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination d-md-none" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-100">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-secondary">
                Hurry up, these are expiring soon.{' '}
              </p>
              <h2>Last minute deals</h2>
            </div>
            <div className="col-md-4 d-lg-flex align-items-center justify-content-end">
              <a href="category.html" className="text-muted text-sm">
                See all deals
                <i className="fas fa-angle-double-right ml-2" />
              </a>
            </div>
          </div>
          {/* Slider main container*/}
          <div
            // data-swiper="{\"slidesPerView\":4,\"spaceBetween\":20,\"loop\":true,\"roundLengths\":true,\"breakpoints\":{\"1200\":{\"slidesPerView\":3},\"991\":{\"slidesPerView\":2},\"565\":{\"slidesPerView\":1}},\"pagination\":{\"el\":\".swiper-pagination\",\"clickable\":true,\"dynamicBullets\":true}}"
            className="swiper-container swiper-container-mx-negative swiper-init"
          >
            {/* Additional required wrapper*/}
            <div className="swiper-wrapper pb-5">
              {/* Slides*/}
              <div className="swiper-slide h-auto px-2">
                {/* place item*/}
                <div
                  data-marker-id="59c0c8e33b1527bfe2abaf92"
                  className="w-100 h-100"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      {' '}
                      <img
                        src="img/photo/photo-1484154218962-a197022b5858.jpg"
                        alt="Modern, Well-Appointed Room"
                        className="img-fluid"
                      />
                      <a href="detail-rooms.html" className="tile-link" />
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center">
                          <img
                            src="img/avatar/avatar-0.jpg"
                            alt="Pamela"
                            className="avatar avatar-border-white mr-2"
                          />
                          <div className="media-body">Pamela</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right">
                        <a
                          href="#"
                          className="card-fav-icon position-relative z-index-40"
                        >
                          <svg className="svg-icon text-white">
                            <use xlinkHref="#heart-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title">
                          <a
                            href="detail-rooms.html"
                            className="text-decoration-none text-dark"
                          >
                            Modern, Well-Appointed Room
                          </a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">
                            Private room
                          </p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                          </p>
                        </div>
                        <p className="card-text text-muted">
                          <span className="h4 text-primary">$80</span> per night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                {/* place item*/}
                <div
                  data-marker-id="59c0c8e322f3375db4d89128"
                  className="w-100 h-100"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      {' '}
                      <img
                        src="img/photo/photo-1426122402199-be02db90eb90.jpg"
                        alt="Cute Quirky Garden apt, NYC adjacent"
                        className="img-fluid"
                      />
                      <a href="detail-rooms.html" className="tile-link" />
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center">
                          <img
                            src="img/avatar/avatar-7.jpg"
                            alt="John"
                            className="avatar avatar-border-white mr-2"
                          />
                          <div className="media-body">John</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right">
                        <a
                          href="#"
                          className="card-fav-icon position-relative z-index-40"
                        >
                          <svg className="svg-icon text-white">
                            <use xlinkHref="#heart-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title">
                          <a
                            href="detail-rooms.html"
                            className="text-decoration-none text-dark"
                          >
                            Cute Quirky Garden apt, NYC adjacent
                          </a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">
                            Entire apartment
                          </p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-gray-300" />
                          </p>
                        </div>
                        <p className="card-text text-muted">
                          <span className="h4 text-primary">$121</span> per
                          night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                {/* place item*/}
                <div
                  data-marker-id="59c0c8e3a31e62979bf147c9"
                  className="w-100 h-100"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      {' '}
                      <img
                        src="img/photo/photo-1512917774080-9991f1c4c750.jpg"
                        alt="Modern Apt - Vibrant Neighborhood!"
                        className="img-fluid"
                      />
                      <a href="detail-rooms.html" className="tile-link" />
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center">
                          <img
                            src="img/avatar/avatar-8.jpg"
                            alt="Julie"
                            className="avatar avatar-border-white mr-2"
                          />
                          <div className="media-body">Julie</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right">
                        <a
                          href="#"
                          className="card-fav-icon position-relative z-index-40"
                        >
                          <svg className="svg-icon text-white">
                            <use xlinkHref="#heart-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title">
                          <a
                            href="detail-rooms.html"
                            className="text-decoration-none text-dark"
                          >
                            Modern Apt - Vibrant Neighborhood!
                          </a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">
                            Entire apartment
                          </p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-gray-300" />
                            <i className="fa fa-star text-gray-300" />
                          </p>
                        </div>
                        <p className="card-text text-muted">
                          <span className="h4 text-primary">$75</span> per night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                {/* place item*/}
                <div
                  data-marker-id="59c0c8e3503eb77d487e8082"
                  className="w-100 h-100"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      {' '}
                      <img
                        src="img/photo/photo-1494526585095-c41746248156.jpg"
                        alt="Sunny Private Studio-Apartment"
                        className="img-fluid"
                      />
                      <a href="detail-rooms.html" className="tile-link" />
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center">
                          <img
                            src="img/avatar/avatar-9.jpg"
                            alt="Barbora"
                            className="avatar avatar-border-white mr-2"
                          />
                          <div className="media-body">Barbora</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right">
                        <a
                          href="#"
                          className="card-fav-icon position-relative z-index-40"
                        >
                          <svg className="svg-icon text-white">
                            <use xlinkHref="#heart-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title">
                          <a
                            href="detail-rooms.html"
                            className="text-decoration-none text-dark"
                          >
                            Sunny Private Studio-Apartment
                          </a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">
                            Shared room
                          </p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-gray-300" />
                          </p>
                        </div>
                        <p className="card-text text-muted">
                          <span className="h4 text-primary">$93</span> per night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                {/* place item*/}
                <div
                  data-marker-id="59c0c8e39aa2eed0626e485d"
                  className="w-100 h-100"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      {' '}
                      <img
                        src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                        alt="Mid-Century Modern Garden Paradise"
                        className="img-fluid"
                      />
                      <a href="detail-rooms.html" className="tile-link" />
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center">
                          <img
                            src="img/avatar/avatar-10.jpg"
                            alt="Jack"
                            className="avatar avatar-border-white mr-2"
                          />
                          <div className="media-body">Jack</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right">
                        <a
                          href="#"
                          className="card-fav-icon position-relative z-index-40"
                        >
                          <svg className="svg-icon text-white">
                            <use xlinkHref="#heart-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title">
                          <a
                            href="detail-rooms.html"
                            className="text-decoration-none text-dark"
                          >
                            Mid-Century Modern Garden Paradise
                          </a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">
                            Entire house
                          </p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                          </p>
                        </div>
                        <p className="card-text text-muted">
                          <span className="h4 text-primary">$115</span> per
                          night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                {/* place item*/}
                <div
                  data-marker-id="59c0c8e39aa2edasd626e485d"
                  className="w-100 h-100"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      {' '}
                      <img
                        src="img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                        alt="Brooklyn Life, Easy to Manhattan"
                        className="img-fluid"
                      />
                      <a href="detail-rooms.html" className="tile-link" />
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center">
                          <img
                            src="img/avatar/avatar-11.jpg"
                            alt="Stuart"
                            className="avatar avatar-border-white mr-2"
                          />
                          <div className="media-body">Stuart</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right">
                        <a
                          href="#"
                          className="card-fav-icon position-relative z-index-40"
                        >
                          <svg className="svg-icon text-white">
                            <use xlinkHref="#heart-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title">
                          <a
                            href="detail-rooms.html"
                            className="text-decoration-none text-dark"
                          >
                            Brooklyn Life, Easy to Manhattan
                          </a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">
                            Private room
                          </p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-warning" />
                            <i className="fa fa-star text-gray-300" />
                          </p>
                        </div>
                        <p className="card-text text-muted">
                          <span className="h4 text-primary">$123</span> per
                          night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* If we need pagination*/}
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* Divider Section*/}
      <section className="py-7 position-relative dark-overlay">
        <img
          src="img/photo/photo-1497436072909-60f360e1d4b1.jpg"
          alt=""
          className="bg-image"
        />
        <div className="container">
          <div className="overlay-content text-white py-lg-5">
            <h3 className="display-3 font-weight-bold text-serif text-shadow mb-5">
              Ready for your next holidays?
            </h3>
            <a href="category-rooms.html" className="btn btn-light">
              Get started
            </a>
          </div>
        </div>
      </section>
      <section className="py-7">
        <div className="container">
          <div className="text-center">
            <p className="subtitle text-primary">Testimonials</p>
            <h2 className="mb-5">Our dear customers said about us</h2>
          </div>
          {/* Slider main container*/}
          <div className="swiper-container testimonials-slider testimonials">
            {/* Additional required wrapper*/}
            <div className="swiper-wrapper pt-2 pb-5">
              {/* Slides*/}
              <div className="swiper-slide px-3">
                <div className="testimonial card rounded-lg shadow border-0">
                  <div className="testimonial-avatar">
                    <img
                      src="img/avatar/avatar-3.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                    <strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide px-3">
                <div className="testimonial card rounded-lg shadow border-0">
                  <div className="testimonial-avatar">
                    <img
                      src="img/avatar/avatar-3.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                    <strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide px-3">
                <div className="testimonial card rounded-lg shadow border-0">
                  <div className="testimonial-avatar">
                    <img
                      src="img/avatar/avatar-3.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                    <strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide px-3">
                <div className="testimonial card rounded-lg shadow border-0">
                  <div className="testimonial-avatar">
                    <img
                      src="img/avatar/avatar-3.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                    <strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide px-3">
                <div className="testimonial card rounded-lg shadow border-0">
                  <div className="testimonial-avatar">
                    <img
                      src="img/avatar/avatar-3.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                    <strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
              <div className="swiper-slide px-3">
                <div className="testimonial card rounded-lg shadow border-0">
                  <div className="testimonial-avatar">
                    <img
                      src="img/avatar/avatar-3.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                    <strong>Jessica Watson</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-100">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-secondary">
                Stories from around the globe
              </p>
              <h2>From our travel blog</h2>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end">
              <a href="blog.html" className="text-muted text-sm">
                See all articles
                <i className="fas fa-angle-double-right ml-2" />
              </a>
            </div>
          </div>
          <div className="row">
            {/* blog item*/}
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card shadow border-0 h-100">
                <a href="post.html">
                  <img
                    src="img/photo/photo-1512917774080-9991f1c4c750.jpg"
                    alt="..."
                    className="img-fluid card-img-top"
                  />
                </a>
                <div className="card-body">
                  <a
                    href="#"
                    className="text-uppercase text-muted text-sm letter-spacing-2"
                  >
                    Travel{' '}
                  </a>
                  <h5 className="my-2">
                    <a href="post.html" className="text-dark">
                      Autumn fashion tips and tricks{' '}
                    </a>
                  </h5>
                  <p className="text-gray-500 text-sm my-3">
                    <i className="far fa-clock mr-2" />
                    January 16, 2016
                  </p>
                  <p className="my-2 text-muted text-sm">
                    Pellentesque habitant morbi tristique senectus. Vestibulum
                    tortor quam, feugiat vitae, ultricies ege...
                  </p>
                  <a href="post.html" className="btn btn-link pl-0">
                    Read more
                    <i className="fa fa-long-arrow-alt-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
            {/* blog item*/}
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card shadow border-0 h-100">
                <a href="post.html">
                  <img
                    src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                    alt="..."
                    className="img-fluid card-img-top"
                  />
                </a>
                <div className="card-body">
                  <a
                    href="#"
                    className="text-uppercase text-muted text-sm letter-spacing-2"
                  >
                    Living{' '}
                  </a>
                  <h5 className="my-2">
                    <a href="post.html" className="text-dark">
                      Newest photo apps{' '}
                    </a>
                  </h5>
                  <p className="text-gray-500 text-sm my-3">
                    <i className="far fa-clock mr-2" />
                    January 16, 2016
                  </p>
                  <p className="my-2 text-muted text-sm">
                    ellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibu...
                  </p>
                  <a href="post.html" className="btn btn-link pl-0">
                    Read more
                    <i className="fa fa-long-arrow-alt-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
            {/* blog item*/}
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card shadow border-0 h-100">
                <a href="post.html">
                  <img
                    src="img/photo/photo-1482463084673-98272196658a.jpg"
                    alt="..."
                    className="img-fluid card-img-top"
                  />
                </a>
                <div className="card-body">
                  <a
                    href="#"
                    className="text-uppercase text-muted text-sm letter-spacing-2"
                  >
                    Travel{' '}
                  </a>
                  <h5 className="my-2">
                    <a href="post.html" className="text-dark">
                      Best books about Photography{' '}
                    </a>
                  </h5>
                  <p className="text-gray-500 text-sm my-3">
                    <i className="far fa-clock mr-2" />
                    January 16, 2016
                  </p>
                  <p className="my-2 text-muted text-sm">
                    Vestibulum tortor quam, feugiat vitae, ultricies eget,
                    tempor sit amet, ante. Mauris placerat eleif...
                  </p>
                  <a href="post.html" className="btn btn-link pl-0">
                    Read more
                    <i className="fa fa-long-arrow-alt-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram*/}
      <section>
        <div className="container-fluid px-0">
          <div className="swiper-container instagram-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-1.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-2.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-3.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-4.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-5.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-6.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-7.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-8.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-9.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-10.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-11.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-12.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-13.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
              <div className="swiper-slide overflow-hidden">
                <a href="#">
                  <img
                    src="img/instagram/instagram-14.jpg"
                    alt=""
                    className="img-fluid hover-scale"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="position-relative z-index-10 d-print-none">
        {/* Main block - menus, subscribe form*/}
        <div className="py-6 bg-gray-200 text-muted">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="font-weight-bold text-uppercase text-dark mb-3">
                  Directory
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      target="_blank"
                      title="twitter"
                      className="text-muted text-hover-primary"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      target="_blank"
                      title="facebook"
                      className="text-muted text-hover-primary"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      target="_blank"
                      title="instagram"
                      className="text-muted text-hover-primary"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      target="_blank"
                      title="pinterest"
                      className="text-muted text-hover-primary"
                    >
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      target="_blank"
                      title="vimeo"
                      className="text-muted text-hover-primary"
                    >
                      <i className="fab fa-vimeo" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <h6 className="text-uppercase text-dark mb-3">Rentals</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="index.html" className="text-muted">
                      Rooms{' '}
                    </a>
                  </li>
                  <li>
                    <a href="category-rooms.html" className="text-muted">
                      Map on top{' '}
                    </a>
                  </li>
                  <li>
                    <a href="category-2-rooms.html" className="text-muted">
                      Side map{' '}
                    </a>
                  </li>
                  <li>
                    <a href="category-3-rooms.html" className="text-muted">
                      No map{' '}
                    </a>
                  </li>
                  <li>
                    <a href="detail-rooms.html" className="text-muted">
                      Room detail{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <h6 className="text-uppercase text-dark mb-3">Pages</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="contact.html" className="text-muted">
                      Contact{' '}
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html" className="text-muted">
                      Pricing{' '}
                    </a>
                  </li>
                  <li>
                    <a href="text.html" className="text-muted">
                      Text page{' '}
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" className="text-muted">
                      F.A.Q.s <span className="badge badge-info ml-1">New</span>{' '}
                    </a>
                  </li>
                  <li>
                    <a href="coming-soon.html" className="text-muted">
                      Coming soon{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h6 className="text-uppercase text-dark mb-3">
                  Daily Offers &amp; Discounts
                </h6>
                <p className="mb-3">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  itaque temporibus.
                </p>
                <form action="#" id="newsletter-form">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      aria-label="Your Email Address"
                      className="form-control bg-transparent border-dark border-right-0"
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-outline-dark border-left-0"
                      >
                        {' '}
                        <i className="fa fa-paper-plane text-lg" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright section of the footer*/}
        <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left">
                <p className="text-sm mb-md-0">
                  © 2019 Your company. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                  <li className="list-inline-item">
                    <img src="img/visa.svg" alt="..." className="w-2rem" />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/mastercard.svg"
                      alt="..."
                      className="w-2rem"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img src="img/paypal.svg" alt="..." className="w-2rem" />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/western-union.svg"
                      alt="..."
                      className="w-2rem"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default withLayout(Home);
