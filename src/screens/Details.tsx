import React, { ReactElement } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import OperationHours from '../components/OperationHours';
import Review from '../components/Review';
import Rate from '../components/Rate';

const Details: React.FC = (props: any): ReactElement<void> => {

  const { user } = props.location.state;

  console.log(user);
  return <>
    <section style={{ backgroundImage: `url(${user.room.src})` }} className="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover">
      <div className="container overlay-content">
        <div className="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
          <div className="text-white mb-4 mb-lg-0">
            <div className="badge badge-pill badge-transparent px-3 py-2 mb-4">{user.name}</div>
            <h1 className="text-shadow verified">{user.room.description}</h1>
            <p><i className="fa-map-marker-alt fas mr-2" /> 53 Broadway, Brooklyn, NY 1129</p>
            <p className="mb-0 d-flex align-items-center">
              <Rate rate={user.room.stars} />
              <i className="fa fa-xs fa-star text-gray-200 mr-4" />8 Reviews</p>
          </div>
          <div className="calltoactions">
            <a href="#leaveReview" className="btn btn-primary">Leave a Review</a></div>
        </div>
      </div>
    </section>

    <section className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="text-block">
              <div style={{ top: 100 }} className="p-4 shadow ml-lg-4 rounded">
                <p className="text-muted"><span className="text-primary h2">{user.room.price}</span> per night</p>
                <hr className="my-4" />
                <form id="booking-form" method="get" action="#" className="form">
                  <div className="form-group">
                    <label htmlFor="bookingDate" className="form-label">Your stay *</label>
                    <div className="datepicker-container datepicker-container-right">
                      <input type="text" name="bookingDate" id="bookingDate" placeholder="Choose your dates" required={true} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="guests" className="form-label">Guests *</label>
                    <select name="guests" id="guests" className="form-control">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Book your stay</button>
                  </div>
                </form>
                <p className="text-muted text-sm text-center">Some additional text can be also placed here.</p>
                <hr className="my-4" />
                <div className="text-center">
                  <p> <a href="#" className="text-secondary text-sm"> <i className="fa fa-heart" /> Bookmark This Listing</a></p>
                  <p className="text-muted text-sm">79 people bookmarked this place </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Location</h3>
              <div className="map-wrapper-300 mb-3">
                <Map center={[14.456208, 120.961121]}
                  zoom={15}
                  maxZoom={10}
                  attributionControl={true}
                  zoomControl={true}
                  doubleClickZoom={true}
                  scrollWheelZoom={true}
                  dragging={true}
                  animate={true}
                  easeLinearity={0.35}
                  style={{ height: 400 }}
                >
                  <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[14.456208, 120.961121]}>
                    <Popup>
                      Popup for any custom information.
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Gallery</h3>
              <div className="row gallery ml-n1 mr-n1">
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1515164783716-8e6920f3e77c.jpg"><img src="img/photo/restaurant-1515164783716-8e6920f3e77c.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1466978913421-dad2ebd01d17.jpg"><img src="img/photo/restaurant-1466978913421-dad2ebd01d17.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg"><img src="img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1505275350441-83dcda8eeef5.jpg"><img src="img/photo/restaurant-1505275350441-83dcda8eeef5.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1508766917616-d22f3f1eea14.jpg"><img src="img/photo/restaurant-1508766917616-d22f3f1eea14.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1430931071372-38127bd472b8.jpg"><img src="img/photo/restaurant-1430931071372-38127bd472b8.jpg" alt="..." className="img-fluid" /></a></div>
              </div>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Amenities</h3>
              <ul className="amenities-list list-inline">
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check" /></div><span>Elevator</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check" /></div><span>Vegan friendly</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check" /></div><span>Alcohol served</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check" /></div><span>No smoking</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check" /></div><span>Parking spaces (paid)</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check" /></div><span>WiFi</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-block">
              <p className="subtitle text-sm text-primary">Reviews    </p>
              <h5 className="mb-4">Listing Reviews </h5>
              <Review />
              <div className="py-5">
                <button type="button" data-toggle="collapse" data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview" className="btn btn-outline-primary">Leave a review</button>
                <div id="leaveReview" className="collapse mt-4">
                  <h5 className="mb-4">Leave a review</h5>
                  <form id="contact-form" method="get" action="#" className="form">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">Your name *</label>
                          <input type="text" name="name" id="name" placeholder="Enter your name" required={true} className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="rating" className="form-label">Your rating *</label>
                          <select name="rating" id="rating" className="custom-select focus-shadow-0">
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Your email *</label>
                      <input type="email" name="email" id="email" placeholder="Enter your  email" required={true} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="review" className="form-label">Review text *</label>
                      <textarea rows={4} name="review" id="review" placeholder="Enter your review" required={true} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Post review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pl-xl-4">
              <div className="card border-0 shadow mb-5">
                <div className="card-header bg-gray-100 py-4 border-0">
                  <div className="media align-items-center">
                    <div className="media-body">
                      <p className="subtitle text-sm text-primary">Opening in 5 minutes</p>
                      <h4 className="mb-0">Opening Hours </h4>
                    </div>
                    <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-muted">
                      <use xlinkHref="#wall-clock-1" />
                    </svg>
                  </div>
                </div>
                <OperationHours />
              </div>
              <div className="card border-0 shadow mb-5">
                <div className="card-header bg-gray-100 py-4 border-0">
                  <div className="media align-items-center">
                    <div className="media-body">
                      <p className="subtitle text-sm text-primary">Drop Us a Line</p>
                      <h4 className="mb-0">Contact</h4>
                    </div>
                    <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-muted">
                      <use xlinkHref="#fountain-pen-1" />
                    </svg>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"> <a href="#" className="text-gray-00 text-sm text-decoration-none"><i className="fa fa-phone mr-3" /><span className="text-muted">(020) 123 456 789</span></a></li>
                    <li className="mb-2"> <a href="#" className=" text-sm text-decoration-none"><i className="fa fa-envelope mr-3" /><span className="text-muted">info@example.com</span></a></li>
                    <li className="mb-2"> <a href="#" className=" text-sm text-decoration-none"><i className="fa fa-globe mr-3" /><span className="text-muted">www.example.com</span></a></li>
                    <li className="mb-2"> <a href="#" className="text-blue text-sm text-decoration-none"><i className="fab fa-facebook mr-3" /><span className="text-muted">Facebook</span></a></li>
                    <li className="mb-2"> <a href="#" className=" text-sm text-decoration-none"><i className="fab fa-twitter mr-3" /><span className="text-muted">Twitter</span></a></li>
                    <li className="mb-2"> <a href="#" className=" text-sm text-decoration-none"><i className="fab fa-instagram mr-3" /><span className="text-muted">Instagram</span></a></li>
                    <li className="mb-2"> <a href="#" className=" text-sm text-decoration-none"><i className="fab fa-google-plus mr-3" /><span className="text-muted">Google+</span></a></li>
                  </ul>
                  <div className="text-center"><a href="#" className="btn btn-outline-primary btn-block"> <i className="far fa-paper-plane mr-2" />Send a Message</a></div>
                </div>
              </div>
              <div className="text-center">
                <p><a href="#" className="text-secondary"> <i className="fa fa-heart" /> Bookmark This Listing</a></p><span>79 people bookmarked this place </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Details;
