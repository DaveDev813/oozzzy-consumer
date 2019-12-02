import React, { ReactElement, useState, useEffect } from 'react';
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
import API, { ApiResponse } from '../utils/api';
import _ from 'lodash';
import Swiper from 'swiper';
import SnackbarNotif, { SnackbarVariant } from './Snackbar';
import { Theme, CircularProgress } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

interface Item {
  user: {
    src: string;
    name: string;
    room: {
      description: string;
      type: string;
      price: string;
      stars: number;
    };
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: 8,
    },
  })
);

const Featured: React.FC<any> = (): ReactElement => {
  const [cardData, setcardData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNotif, setHasNotif] = React.useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });
  useEffect(() => {
    const fetchFeaturedData = async (): Promise<void> => {
      const featuredData: ApiResponse = await API.get('/featured');

      if (featuredData.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }

      if (featuredData.data) {
        setcardData(_.values(featuredData.data));
        setIsLoading(false);
      }
    };

    fetchFeaturedData().then((): void => {
      Object.assign(
        {},
        new Swiper('#swiper2', {
          speed: 400,
          slidesPerView: 3,
          roundLengths: true,
          spaceBetween: 20,
          loop: true,
        })
      );
    });
  }, [setcardData, isLoading]);

  const classes = useStyles();

  return (
    <section className="py-6 bg-gray-100">
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
        {
          isLoading ? (
            <div style={{ textAlign: 'center' }}>
              <CircularProgress className={classes.progress} />
            </div>
          ) : (
              <div
                id="swiper2"
                className="swiper-container swiper-container-mx-negative swiper-init">
                <div className="swiper-wrapper pb-5">
                  {
                    cardData.map((details: any, index: any) => {
                      return (
                        <div key={index} className="swiper-slide h-auto px-2">
                          {/* <!-- place item--> */}
                          <div className="w-100 h-100">
                            <div className="card h-100 border-0 shadow">
                              <CardImg
                                className="overflow-hidden gradient-overlay"
                                position="top">
                                <img
                                  src={details.user.room.src}
                                  alt={details.user.room.description}
                                  className="img-fluid"
                                />
                                <CardTile to={{
                                  pathname: '/details', state: details,
                                }} />
                                <CardImg
                                  overlay={true}
                                  position="bottom"
                                  className="z-index-20">
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
                                <CardImg
                                  overlay={true}
                                  position="top"
                                  className="text-right">
                                  <a
                                    href="#"
                                    className="card-fav-icon position-relative z-index-40">
                                    <svg className="svg-icon text-white">
                                      <use xlinkHref={`icons/orion-svg-sprite.svg#heart-1`} />
                                    </svg>
                                  </a>
                                </CardImg>
                              </CardImg>
                              <CardBody className="d-flex align-items-center">
                                <div className="w-100">
                                  <CardTitle>
                                    <a
                                      href="detail-rooms.html"
                                      className="text-decoration-none text-dark">
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
                    })
                  }

                  <div className="swiper-pagination2" />
                </div>
              </div>
            )
        }

      </Container>
    </section>
  );
};

export default Featured;
