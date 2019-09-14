import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
// import Swiper from 'swiper';
import Avatar from '../components/Avatar';

import {
  Card,
  CardBody,
  CardTitle,
  CardTile,
  CardText,
} from '../components/Card';

const Category = () => {
  // useEffect(() => {
  //   const swiper1 = new Swiper("#swiper1", {
  //     speed: 400,
  //     setWrapperSize: true,
  //     slidesPerView: 4
  //   });

  //   const swiper2 = new Swiper("#swiper2", {
  //     speed: 400,
  //     setWrapperSize: true,
  //     slidesPerView: 3,
  //     roundLengths: true
  //   });
  // }, []);

  const CardData = () => {
    return [
      {
        place: 'new_york',
        text: 'The Big Apple',
      },
      {
        place: 'paris',
        text: 'Artist capital oF Europe',
      },
      {
        place: 'barcelona',
        text: 'Dali, Gaudi, Barrio Gotico',
      },
      {
        place: 'prague',
        text: 'City of hundred towers',
      },
    ];
  };

  return (
    <section className="py-6 bg-white">
      <Container>
        <Row className="mb-5">
          <div className="col-md-8">
            <p className="subtitle text-primary">Stay and eat like a local</p>
            <h2>Categories</h2>
          </div>
          <div className="col-md-4 d-lg-flex align-items-center justify-content-end">
            <a href="category.html" className="text-muted text-sm">
              See all guides
              <i className="fas fa-angle-double-right ml-2" />
            </a>
          </div>
        </Row>
        <Row>
          <div id="swiper1" className="swiper-container guides-slider">
            <div className="swiper-wrapper pb-5">
              {CardData().map((dataInfo, index) => {
                // const active = index == 0 ? "swiper-slide-active" : "";
                return (
                  <div key={index} className={`swiper-slide h-auto px-2`}>
                    <Card>
                      <CardTile href="category.html" />
                      <Avatar
                        src={` photo/${dataInfo.place}.jpg`}
                        alt="Card image"
                        className="bg-image"
                      />
                      <CardBody className="overlay-content">
                        <CardTitle className="text-shadow text-uppercase">
                          {dataInfo.place}
                        </CardTitle>
                        <CardText size="sm">{dataInfo.text}</CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Category;
