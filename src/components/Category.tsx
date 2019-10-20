import React, { ReactElement, useEffect, useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Swiper from 'swiper';
import Avatar from '../components/Avatar';

import {
  Card,
  CardBody,
  CardTitle,
  CardTile,
  CardText,
} from '../components/Card';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, CircularProgress } from '@material-ui/core';
import { CardData } from '../interfaces';
import API, { ApiResponse } from '../utils/api';
import _ from 'lodash';
import SnackbarNotif, { SnackbarVariant } from './Snackbar';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: 8,
    },
  })
);

const Category: React.FC<any> = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [hasNotif, setHasNotif] = React.useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });
  useEffect(() => {
    const fetchCardData = async (): Promise<void> => {
      const cardDataFetched: ApiResponse = await API.get('/categories');
      // TODO: add error validation
      if (cardDataFetched.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }
      setCardData(_.values(cardDataFetched.data));
      setIsLoading(false);
    };
    fetchCardData().then((): void => {
      Object.assign(
        {},
        new Swiper('#swiper1', {
          speed: 400,
          setWrapperSize: true,
          slidesPerView: 4,
        })
      );
    });
  }, [setCardData, setIsLoading]);

  const classes = useStyles();

  return (
    <React.Fragment>

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
        <section className="py-6 bg-white">
          <Container>
            {isLoading ? (
              <CircularProgress className={classes.progress} />
            ) : (
                <>
                  <Row className="mb-5">
                    <div className="col-md-8">
                      <p className="subtitle text-primary">
                        Stay and eat like a local
                  </p>
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


                        {cardData.length === 0 ?
                          <div className={`swiper-slide h-auto px-2`}>
                            <Skeleton variant="rect" width={180} height={500} />
                            <Skeleton variant="rect" width={180} height={500} />
                            <Skeleton variant="rect" width={180} height={500} />
                          </div> :

                          cardData.map((dataInfo: any, index: any) => {
                            return (
                              <div key={index} className={`swiper-slide h-auto px-2`}>
                                <Card>
                                  <CardTile href="category.html" />
                                  <Avatar
                                    src={`img/photo/${dataInfo.place}.jpg`}
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
                          })
                        }

                        {}
                      </div>
                    </div>
                  </Row>
                </>
              )}

          </Container>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Category;
