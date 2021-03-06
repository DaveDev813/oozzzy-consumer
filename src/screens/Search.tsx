import React, { ReactElement } from 'react';
import withLayout from '../components/Layout';

const Search: React.FC<any> = (props: any): ReactElement => {
  //   const cardImage = {
  //   backgroundImage:
  //     'url(https://d19m59y37dris4.cloudfront.net/directory/1-2/img/photo/restaurant-1430931071372-38127bd472b8.jpg); min-height: 200px',
  // };
  return (
    <div>
      <div className="container-fluid py-5 px-lg-5">
        <div className="row">
          <div className="col-lg-3 pt-3">
            <form action="#" className="pr-xl-3">
              <div className="mb-4">
                <label htmlFor="form_search" className="form-label">
                  Keyword
                </label>
                <div className="input-label-absolute input-label-absolute-right">
                  <div className="label-absolute">
                    <i className="fa fa-search" />
                  </div>
                  <i className="fa fa-search">
                    <input
                      type="search"
                      name="search"
                      placeholder="Keywords"
                      id="form_search"
                      className="form-control pr-4"
                    />
                  </i>
                </div>
                <i className="fa fa-search" />
              </div>
              <i className="fa fa-search">
                <div className="mb-4">
                  <label htmlFor="form_category" className="form-label">
                    NEIGHBOURHOOD
                  </label>
                  <div className="input-label-absolute input-label-absolute-right">
                    <select
                      name="sort"
                      id="form_neighbourhood"
                      data-style="btn-selectpicker"
                      // title={true}
                      className="selectpicker  form-control"
                    >
                      <option value="neighbourhood_0">
                        Battery Park City{'{'}' '{'}'}
                      </option>
                      <option value="neighbourhood_1">Bowery </option>
                      <option value="neighbourhood_2">Carnegie Hill </option>
                      <option value="neighbourhood_3">Central Park </option>
                      <option value="neighbourhood_4">Chelsea </option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="form_category" className="form-label">
                    Category
                  </label>
                  <div className="input-label-absolute input-label-absolute-right">
                    <select
                      name="sort"
                      id="form_category"
                      data-style="btn-selectpicker"
                      // title={true}
                      className="selectpicker  form-control"
                    >
                      <option value="category_0">Hipster </option>
                      <option value="category_1">Music club </option>
                      <option value="category_2">Bar </option>
                      <option value="category_3">Pub </option>
                      <option value="category_4">Deli </option>
                      <option value="category_5">Bistro </option>
                    </select>
                  </div>
                </div>
              </i>
            </form>
          </div>
          <i className="fa fa-search">
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
                <div className="mr-3">
                  <p className="mb-3 mb-md-0">
                    <strong>12</strong> results found
                  </p>
                </div>
                <div>
                  <label htmlFor="form_sort" className="form-label mr-2">
                    Sort by
                  </label>
                  <select
                    name="sort"
                    id="form_sort"
                    data-style="btn-selectpicker"
                    // title={true}
                    className="selectpicker"
                  >
                    <option value="sortBy_0">Most popular </option>
                    <option value="sortBy_1">Recommended </option>
                    <option value="sortBy_2">Newest </option>
                    <option value="sortBy_3">Oldest </option>
                    <option value="sortBy_4">Closest </option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div
                  data-marker-id="59c0c8e33b1527bfe2abaf92"
                  className="col-sm-6 col-xl-4 mb-5"
                >
                  <div className="card h-100 border-0 shadow">
                    <div className="card h-100 border-0 shadow">
                      <div
                        style={{}}
                        className="card-img-top overflow-hidden dark-overlay bg-cover"
                      >
                        <a href="detail.html" className="tile-link">
                          <div className="card-img-overlay-bottom z-index-20">
                            <h4 className="text-white text-shadow">
                              Blue Hill
                            </h4>
                            <p className="mb-2 text-xs">
                              <i className="fa fa-star text-warning">
                                <i className="fa fa-star text-warning">
                                  <i className="fa fa-star text-warning">
                                    <i className="fa fa-star text-warning">
                                      <i className="fa fa-star text-gray-300" />
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </p>
                            <i className="fa fa-star text-warning">
                              <i className="fa fa-star text-warning">
                                <i className="fa fa-star text-warning">
                                  <i className="fa fa-star text-gray-300" />
                                </i>
                              </i>
                            </i>
                          </div>
                          <i className="fa fa-star text-warning">
                            <i className="fa fa-star text-warning">
                              <i className="fa fa-star text-warning">
                                <i className="fa fa-star text-gray-300" />
                              </i>
                            </i>
                          </i>
                        </a>
                        <i className="fa fa-star text-warning">
                          <i className="fa fa-star text-warning">
                            <i className="fa fa-star text-gray-300">
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <a href="detail.html" className="tile-link">
                                  <div className="badge badge-transparent badge-pill px-3 py-2">
                                    Restaurants
                                  </div>
                                </a>
                                <a
                                  href="javascript: void();"
                                  className="card-fav-icon position-relative z-index-40"
                                />
                              </div>
                              <a
                                href="javascript: void();"
                                className="card-fav-icon position-relative z-index-40"
                              />
                            </i>
                          </i>
                        </i>
                      </div>
                      <i className="fa fa-star text-warning">
                        <i className="fa fa-star text-warning">
                          <i className="fa fa-star text-warning">
                            <i className="fa fa-star text-gray-300">
                              <a
                                href="javascript: void();"
                                className="card-fav-icon position-relative z-index-40"
                              />
                            </i>
                          </i>
                        </i>
                      </i>
                    </div>
                    <i className="fa fa-star text-warning">
                      <i className="fa fa-star text-warning">
                        <i className="fa fa-star text-warning">
                          <i className="fa fa-star text-gray-300">
                            <a
                              href="javascript: void();"
                              className="card-fav-icon position-relative z-index-40"
                            />
                            <div className="card-body">
                              <a
                                href="javascript: void();"
                                className="card-fav-icon position-relative z-index-40"
                              >
                                <p className="text-sm text-muted mb-3">
                                  {'{'}' '{'}'}
                                  Cupidatat excepteur non dolore laborum et quis
                                  nostrud veniam dolore deserunt. Pariatur
                                  dolore ut in elit id nulla. Irur...
                                </p>
                              </a>
                              <p className="text-sm text-muted text-uppercase mb-1">
                                <a
                                  href="javascript: void();"
                                  className="card-fav-icon position-relative z-index-40"
                                >
                                  By{'{'}' '{'}'}
                                </a>
                                <a href="#" className="text-dark">
                                  Matt Damon
                                </a>
                              </p>
                              <p className="text-sm mb-0">
                                <a href="#" className="mr-1">
                                  Restaurant,
                                </a>
                                <a href="#" className="mr-1">
                                  Contemporary
                                </a>
                              </p>
                            </div>
                          </i>
                        </i>
                      </i>
                    </i>
                  </div>
                  <i className="fa fa-star text-warning">
                    <i className="fa fa-star text-warning">
                      <i className="fa fa-star text-warning">
                        <i className="fa fa-star text-gray-300" />
                      </i>
                    </i>
                  </i>
                </div>
                <i className="fa fa-star text-warning">
                  <i className="fa fa-star text-warning">
                    <i className="fa fa-star text-warning">
                      <i className="fa fa-star text-gray-300">
                        <div
                          data-marker-id="59c0c8e33b1527bfe2abaf92"
                          className="col-sm-6 col-xl-4 mb-5"
                        >
                          <div className="card h-100 border-0 shadow">
                            <div className="card h-100 border-0 shadow">
                              <div
                                style={{}}
                                className="card-img-top overflow-hidden dark-overlay bg-cover"
                              >
                                <a href="detail.html" className="tile-link">
                                  <div className="card-img-overlay-bottom z-index-20">
                                    <h4 className="text-white text-shadow">
                                      Blue Hill
                                    </h4>
                                    <p className="mb-2 text-xs">
                                      <i className="fa fa-star text-warning">
                                        <i className="fa fa-star text-warning">
                                          <i className="fa fa-star text-warning">
                                            <i className="fa fa-star text-warning">
                                              <i className="fa fa-star text-gray-300" />
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </p>
                                    <i className="fa fa-star text-warning">
                                      <i className="fa fa-star text-warning">
                                        <i className="fa fa-star text-warning">
                                          <i className="fa fa-star text-gray-300" />
                                        </i>
                                      </i>
                                    </i>
                                  </div>
                                  <i className="fa fa-star text-warning">
                                    <i className="fa fa-star text-warning">
                                      <i className="fa fa-star text-warning">
                                        <i className="fa fa-star text-gray-300" />
                                      </i>
                                    </i>
                                  </i>
                                </a>
                                <i className="fa fa-star text-warning">
                                  <i className="fa fa-star text-warning">
                                    <i className="fa fa-star text-gray-300">
                                      <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                        <a
                                          href="detail.html"
                                          className="tile-link"
                                        >
                                          <div className="badge badge-transparent badge-pill px-3 py-2">
                                            Restaurants
                                          </div>
                                        </a>
                                        <a
                                          href="javascript: void();"
                                          className="card-fav-icon position-relative z-index-40"
                                        />
                                      </div>
                                      <a
                                        href="javascript: void();"
                                        className="card-fav-icon position-relative z-index-40"
                                      />
                                    </i>
                                  </i>
                                </i>
                              </div>
                              <i className="fa fa-star text-warning">
                                <i className="fa fa-star text-warning">
                                  <i className="fa fa-star text-warning">
                                    <i className="fa fa-star text-gray-300">
                                      <a
                                        href="javascript: void();"
                                        className="card-fav-icon position-relative z-index-40"
                                      />
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </div>
                            <i className="fa fa-star text-warning">
                              <i className="fa fa-star text-warning">
                                <i className="fa fa-star text-warning">
                                  <i className="fa fa-star text-gray-300">
                                    <a
                                      href="javascript: void();"
                                      className="card-fav-icon position-relative z-index-40"
                                    />
                                    <div className="card-body">
                                      <a
                                        href="javascript: void();"
                                        className="card-fav-icon position-relative z-index-40"
                                      >
                                        <p className="text-sm text-muted mb-3">
                                          {'{'}' '{'}'}
                                          Cupidatat excepteur non dolore laborum
                                          et quis nostrud veniam dolore
                                          deserunt. Pariatur dolore ut in elit
                                          id nulla. Irur...
                                        </p>
                                      </a>
                                      <p className="text-sm text-muted text-uppercase mb-1">
                                        <a
                                          href="javascript: void();"
                                          className="card-fav-icon position-relative z-index-40"
                                        >
                                          By{'{'}' '{'}'}
                                        </a>
                                        <a href="#" className="text-dark">
                                          Matt Damon
                                        </a>
                                      </p>
                                      <p className="text-sm mb-0">
                                        <a href="#" className="mr-1">
                                          Restaurant,
                                        </a>
                                        <a href="#" className="mr-1">
                                          Contemporary
                                        </a>
                                      </p>
                                    </div>
                                  </i>
                                </i>
                              </i>
                            </i>
                          </div>
                          <i className="fa fa-star text-warning">
                            <i className="fa fa-star text-warning">
                              <i className="fa fa-star text-warning">
                                <i className="fa fa-star text-gray-300" />
                              </i>
                            </i>
                          </i>
                        </div>
                        <i className="fa fa-star text-warning">
                          <i className="fa fa-star text-warning">
                            <i className="fa fa-star text-warning">
                              <i className="fa fa-star text-gray-300">
                                <div
                                  data-marker-id="59c0c8e33b1527bfe2abaf92"
                                  className="col-sm-6 col-xl-4 mb-5"
                                >
                                  <div className="card h-100 border-0 shadow">
                                    <div className="card h-100 border-0 shadow">
                                      <div
                                        style={{}}
                                        className="card-img-top overflow-hidden dark-overlay bg-cover"
                                      >
                                        <a
                                          href="detail.html"
                                          className="tile-link"
                                        >
                                          <div className="card-img-overlay-bottom z-index-20">
                                            <h4 className="text-white text-shadow">
                                              Blue Hill
                                            </h4>
                                            <p className="mb-2 text-xs">
                                              <i className="fa fa-star text-warning">
                                                <i className="fa fa-star text-warning">
                                                  <i className="fa fa-star text-warning">
                                                    <i className="fa fa-star text-warning">
                                                      <i className="fa fa-star text-gray-300" />
                                                    </i>
                                                  </i>
                                                </i>
                                              </i>
                                            </p>
                                            <i className="fa fa-star text-warning">
                                              <i className="fa fa-star text-warning">
                                                <i className="fa fa-star text-warning">
                                                  <i className="fa fa-star text-gray-300" />
                                                </i>
                                              </i>
                                            </i>
                                          </div>
                                          <i className="fa fa-star text-warning">
                                            <i className="fa fa-star text-warning">
                                              <i className="fa fa-star text-warning">
                                                <i className="fa fa-star text-gray-300" />
                                              </i>
                                            </i>
                                          </i>
                                        </a>
                                        <i className="fa fa-star text-warning">
                                          <i className="fa fa-star text-warning">
                                            <i className="fa fa-star text-gray-300">
                                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                                <a
                                                  href="detail.html"
                                                  className="tile-link"
                                                >
                                                  <div className="badge badge-transparent badge-pill px-3 py-2">
                                                    Restaurants
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript: void();"
                                                  className="card-fav-icon position-relative z-index-40"
                                                />
                                              </div>
                                              <a
                                                href="javascript: void();"
                                                className="card-fav-icon position-relative z-index-40"
                                              />
                                            </i>
                                          </i>
                                        </i>
                                      </div>
                                      <i className="fa fa-star text-warning">
                                        <i className="fa fa-star text-warning">
                                          <i className="fa fa-star text-warning">
                                            <i className="fa fa-star text-gray-300">
                                              <a
                                                href="javascript: void();"
                                                className="card-fav-icon position-relative z-index-40"
                                              />
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </div>
                                    <i className="fa fa-star text-warning">
                                      <i className="fa fa-star text-warning">
                                        <i className="fa fa-star text-warning">
                                          <i className="fa fa-star text-gray-300">
                                            <a
                                              href="javascript: void();"
                                              className="card-fav-icon position-relative z-index-40"
                                            />
                                            <div className="card-body">
                                              <a
                                                href="javascript: void();"
                                                className="card-fav-icon position-relative z-index-40"
                                              >
                                                <p className="text-sm text-muted mb-3">
                                                  {'{'}' '{'}'}
                                                  Cupidatat excepteur non dolore
                                                  laborum et quis nostrud veniam
                                                  dolore deserunt. Pariatur
                                                  dolore ut in elit id nulla.
                                                  Irur...
                                                </p>
                                              </a>
                                              <p className="text-sm text-muted text-uppercase mb-1">
                                                <a
                                                  href="javascript: void();"
                                                  className="card-fav-icon position-relative z-index-40"
                                                >
                                                  By{'{'}' '{'}'}
                                                </a>
                                                <a
                                                  href="#"
                                                  className="text-dark"
                                                >
                                                  Matt Damon
                                                </a>
                                              </p>
                                              <p className="text-sm mb-0">
                                                <a href="#" className="mr-1">
                                                  Restaurant,
                                                </a>
                                                <a href="#" className="mr-1">
                                                  Contemporary
                                                </a>
                                              </p>
                                            </div>
                                          </i>
                                        </i>
                                      </i>
                                    </i>
                                  </div>
                                  <i className="fa fa-star text-warning">
                                    <i className="fa fa-star text-warning">
                                      <i className="fa fa-star text-warning">
                                        <i className="fa fa-star text-gray-300" />
                                      </i>
                                    </i>
                                  </i>
                                </div>
                                <i className="fa fa-star text-warning">
                                  <i className="fa fa-star text-warning">
                                    <i className="fa fa-star text-warning">
                                      <i className="fa fa-star text-gray-300">
                                        <div
                                          data-marker-id="59c0c8e33b1527bfe2abaf92"
                                          className="col-sm-6 col-xl-4 mb-5"
                                        >
                                          <div className="card h-100 border-0 shadow">
                                            <div className="card h-100 border-0 shadow">
                                              <div
                                                style={{}}
                                                className="card-img-top overflow-hidden dark-overlay bg-cover"
                                              >
                                                <a
                                                  href="detail.html"
                                                  className="tile-link"
                                                >
                                                  <div className="card-img-overlay-bottom z-index-20">
                                                    <h4 className="text-white text-shadow">
                                                      Blue Hill
                                                    </h4>
                                                    <p className="mb-2 text-xs">
                                                      <i className="fa fa-star text-warning">
                                                        <i className="fa fa-star text-warning">
                                                          <i className="fa fa-star text-warning">
                                                            <i className="fa fa-star text-warning">
                                                              <i className="fa fa-star text-gray-300" />
                                                            </i>
                                                          </i>
                                                        </i>
                                                      </i>
                                                    </p>
                                                    <i className="fa fa-star text-warning">
                                                      <i className="fa fa-star text-warning">
                                                        <i className="fa fa-star text-warning">
                                                          <i className="fa fa-star text-gray-300" />
                                                        </i>
                                                      </i>
                                                    </i>
                                                  </div>
                                                  <i className="fa fa-star text-warning">
                                                    <i className="fa fa-star text-warning">
                                                      <i className="fa fa-star text-warning">
                                                        <i className="fa fa-star text-gray-300" />
                                                      </i>
                                                    </i>
                                                  </i>
                                                </a>
                                                <i className="fa fa-star text-warning">
                                                  <i className="fa fa-star text-warning">
                                                    <i className="fa fa-star text-gray-300">
                                                      <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                                        <a
                                                          href="detail.html"
                                                          className="tile-link"
                                                        >
                                                          <div className="badge badge-transparent badge-pill px-3 py-2">
                                                            Restaurants
                                                          </div>
                                                        </a>
                                                        <a
                                                          href="javascript: void();"
                                                          className="card-fav-icon position-relative z-index-40"
                                                        />
                                                      </div>
                                                      <a
                                                        href="javascript: void();"
                                                        className="card-fav-icon position-relative z-index-40"
                                                      />
                                                    </i>
                                                  </i>
                                                </i>
                                              </div>
                                              <i className="fa fa-star text-warning">
                                                <i className="fa fa-star text-warning">
                                                  <i className="fa fa-star text-warning">
                                                    <i className="fa fa-star text-gray-300">
                                                      <a
                                                        href="javascript: void();"
                                                        className="card-fav-icon position-relative z-index-40"
                                                      />
                                                    </i>
                                                  </i>
                                                </i>
                                              </i>
                                            </div>
                                            <i className="fa fa-star text-warning">
                                              <i className="fa fa-star text-warning">
                                                <i className="fa fa-star text-warning">
                                                  <i className="fa fa-star text-gray-300">
                                                    <a
                                                      href="javascript: void();"
                                                      className="card-fav-icon position-relative z-index-40"
                                                    />
                                                    <div className="card-body">
                                                      <a
                                                        href="javascript: void();"
                                                        className="card-fav-icon position-relative z-index-40"
                                                      >
                                                        <p className="text-sm text-muted mb-3">
                                                          {'{'}' '{'}'}
                                                          Cupidatat excepteur
                                                          non dolore laborum et
                                                          quis nostrud veniam
                                                          dolore deserunt.
                                                          Pariatur dolore ut in
                                                          elit id nulla. Irur...
                                                        </p>
                                                      </a>
                                                      <p className="text-sm text-muted text-uppercase mb-1">
                                                        <a
                                                          href="javascript: void();"
                                                          className="card-fav-icon position-relative z-index-40"
                                                        >
                                                          By{'{'}' '{'}'}
                                                        </a>
                                                        <a
                                                          href="#"
                                                          className="text-dark"
                                                        >
                                                          Matt Damon
                                                        </a>
                                                      </p>
                                                      <p className="text-sm mb-0">
                                                        <a
                                                          href="#"
                                                          className="mr-1"
                                                        >
                                                          Restaurant,
                                                        </a>
                                                        <a
                                                          href="#"
                                                          className="mr-1"
                                                        >
                                                          Contemporary
                                                        </a>
                                                      </p>
                                                    </div>
                                                  </i>
                                                </i>
                                              </i>
                                            </i>
                                          </div>
                                          <i className="fa fa-star text-warning">
                                            <i className="fa fa-star text-warning">
                                              <i className="fa fa-star text-warning">
                                                <i className="fa fa-star text-gray-300" />
                                              </i>
                                            </i>
                                          </i>
                                        </div>
                                        <i className="fa fa-star text-warning">
                                          <i className="fa fa-star text-warning">
                                            <i className="fa fa-star text-warning">
                                              <i className="fa fa-star text-gray-300" />
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </i>
                  </i>
                </i>
              </div>
              <i className="fa fa-star text-gray-300">
                <i className="fa fa-star text-gray-300">
                  <i className="fa fa-star text-warning">
                    <i className="fa fa-star text-warning">
                      <i className="fa fa-star text-warning">
                        <i className="fa fa-star text-gray-300" />
                      </i>
                    </i>
                  </i>
                </i>
              </i>
            </div>
            <i className="fa fa-star text-gray-300">
              <i className="fa fa-star text-gray-300">
                <i className="fa fa-star text-warning">
                  <i className="fa fa-star text-warning">
                    <i className="fa fa-star text-warning">
                      <i className="fa fa-star text-gray-300" />
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </div>
        <i className="fa fa-search">
          <i className="fa fa-star text-gray-300">
            <i className="fa fa-star text-gray-300">
              <i className="fa fa-star text-warning">
                <i className="fa fa-star text-warning">
                  <i className="fa fa-star text-warning">
                    <i className="fa fa-star text-gray-300" />
                  </i>
                </i>
              </i>
            </i>
          </i>
        </i>
      </div>
      <i className="fa fa-search">
        <i className="fa fa-star text-gray-300">
          <i className="fa fa-star text-gray-300">
            <i className="fa fa-star text-warning">
              <i className="fa fa-star text-warning">
                <i className="fa fa-star text-warning">
                  <i className="fa fa-star text-gray-300" />
                </i>
              </i>
            </i>
          </i>
        </i>
      </i>
    </div>
  );
};

export default withLayout(Search);
