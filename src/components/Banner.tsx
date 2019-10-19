import React, { ReactElement } from 'react';
// import Row from '../components/Row';
// import Container from '../components/Container';
import {
  InputLabel,
  // InputBase,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';

const Banner: React.FC<any> = (): ReactElement => (
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
                  <FormControl>
                    <InputLabel htmlFor="categories">Categories</InputLabel>
                    <Select
                      value=""
                      inputProps={{
                        name: 'categories',
                        id: 'categories',
                      }}
                      style={{ width: 220 }}>
                      <MenuItem value="small">Restaurants</MenuItem>
                      <MenuItem value="medium">Hotels</MenuItem>
                      <MenuItem value="large">Cafes</MenuItem>
                      <MenuItem value="x-large">Garages</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-lg-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block rounded-xl h-100">
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
);

export default Banner;
