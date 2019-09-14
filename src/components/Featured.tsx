import React from 'react';
import Row from '../components/Row';
import Container from '../components/Container';
import {
  CardImg,
  CardBody,
  CardTitle,
  CardTile,
  CardText,
  CardSubtitle,
} from '../components/Card';
import Avatar from '../components/Avatar';
import Rate from '../components/Rate';

const CardData2 = () => {
  return [
    {
      user: {
        src: ' img/avatar/avatar-0.jpg',
        name: 'Pamela',
        room: {
          description: 'Modern, Well Appointed Room',
          type: 'Private Room',
          price: '$80',
          stars: 5,
        },
      },
    },
    {
      user: {
        src: ' img/avatar/avatar-7.jpg',
        name: 'John',
        room: {
          description: 'Cute Quirky Garden apt, NYC adjacent',
          type: 'Entire apartment',
          price: '$121',
          stars: 4,
        },
      },
    },
    {
      user: {
        src: ' img/avatar/avatar-8.jpg',
        name: 'Julie',
        room: {
          description: 'Modern Apt - Vibrant Neighborhood!',
          type: 'Entire apartment',
          price: '$75',
          stars: 3,
        },
      },
    },
    {
      user: {
        src: ' img/avatar/avatar-9.jpg',
        name: 'Barbora',
        room: {
          description: 'Sunny Private Studio-Apartment',
          type: 'Shared Room',
          price: '$93',
          stars: 4,
        },
      },
    },
    {
      user: {
        src: ' img/avatar/avatar-10.jpg',
        name: 'Jack',
        room: {
          description: 'Mid-Century Modern Garden Paradise',
          type: 'Entire house',
          price: '$115',
          stars: 5,
        },
      },
    },
    {
      user: {
        src: ' img/avatar/avatar-11.jpg',
        name: 'Stuart',
        room: {
          description: 'Brooklyn Life, Easy to Manhattan',
          type: 'Private Room',
          price: '$123',
          stars: 4,
        },
      },
    },
  ];
};

const Featured = () => {
  return (
    <section className="py-6 bg-gray-100">
      <Container>
        <Row className="mb-5">
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
        </Row>
        <div
          id="swiper2"
          className="swiper-container swiper-container-mx-negative swiper-init"
        >
          <div className="swiper-wrapper pb-5">
            {CardData2().map((details, index) => {
              return (
                <div key={index} className="swiper-slide h-auto px-2">
                  {/* <!-- place item--> */}
                  <div className="w-100 h-100">
                    <div className="card h-100 border-0 shadow">
                      <CardImg
                        className="overflow-hidden gradient-overlay"
                        position="top"
                      >
                        <Avatar
                          src=" img/photo/photo-1484154218962-a197022b5858.jpg"
                          alt={details.user.room.description}
                          className="img-fluid"
                        />
                        <CardTile href="detail-rooms.html" />
                        <CardImg
                          overlay={true}
                          position="bottom"
                          className="z-index-20"
                        >
                          <div className="media text-white text-sm align-items-center">
                            <Avatar
                              src={details.user.src}
                              alt="Pamela"
                              className="avatar avatar-border-white mr-2"
                            />
                            <div className="media-body">
                              {details.user.name}
                            </div>
                          </div>
                        </CardImg>
                        <CardImg overlay={true} position="top" className="text-right">
                          <a
                            href="javascript: void();"
                            className="card-fav-icon position-relative z-index-40"
                          >
                            HEART
                            {/* <svg className="svg-icon text-white">
                          <use xlink: href="#heart-1"></use>
                        </svg> */}
                          </a>
                        </CardImg>
                      </CardImg>
                      <CardBody className="d-flex align-items-center">
                        <div className="w-100">
                          <CardTitle>
                            <a
                              href="detail-rooms.html"
                              className="text-decoration-none text-dark"
                            >
                              {details.user.room.description}
                            </a>
                          </CardTitle>
                          <CardSubtitle>
                            <p className="flex-grow-1 mb-0 text-muted text-sm">
                              {details.user.room.type}
                            </p>
                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                              {/* {Stars(details.user.room.stars)} */}

                              <Rate rate={details.user.room.stars} />
                            </p>
                          </CardSubtitle>
                          <CardText muted={true}>
                            <span className="h4 text-primary">
                              {details.user.room.price}
                            </span>{' '}
                            per night
                          </CardText>
                        </div>
                      </CardBody>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="swiper-pagination2" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
