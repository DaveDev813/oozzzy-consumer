import React, { useState, useEffect } from 'react'
import Avatar from './Avatar'
import { Skeleton } from '@material-ui/lab';
import SnackbarNotif, { SnackbarVariant } from './Snackbar';
import API, { ApiResponse } from '../utils/api';
import _ from 'lodash';

interface Item {
  user: {
    src: string;
    name: string;
    review: string;
  };
}

const Review: React.FC = (): any => {
  const [reviews, setReviews] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNotif, setHasNotif] = useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });

  useEffect(() => {
    const fetchReview = async (): Promise<void> => {
      const reviewResponse: ApiResponse = await API.get('/reviews');

      if (reviewResponse.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }

      if (reviewResponse.data) {
        setReviews(_.values(reviewResponse.data));
        setIsLoading(false);
      }
    }

    fetchReview().then((): void => console.log('loaded'));

  }, [setReviews, isLoading]);

  return <>
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
    {/* {isLoading ? <Skeleton /> : "BAYAG"} */}
    {
      isLoading ? <><div className="media d-block d-sm-flex review">
        <div className="text-md-center mr-4 mr-xl-5">
          <Skeleton variant="circle" width={112} height={112} />
        </div>
        <div className="media-body">
          <h6 className="mt-2 mb-1"><Skeleton width="30%" /></h6>
          <div className="mb-2"><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" />
          </div>
          <><Skeleton /> <Skeleton width="80%" /> <Skeleton width="40%" /></>
        </div>
      </div>
        <div className="media d-block d-sm-flex review">
          <div className="text-md-center mr-4 mr-xl-5">
            <Skeleton variant="circle" width={112} height={112} />
          </div>
          <div className="media-body">
            <h6 className="mt-2 mb-1"><Skeleton width="30%" /></h6>
            <div className="mb-2"><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" />
            </div>
            <><Skeleton /> <Skeleton width="80%" /> <Skeleton width="40%" /></>
          </div>
        </div>
        <div className="media d-block d-sm-flex review">
          <div className="text-md-center mr-4 mr-xl-5">
            <Skeleton variant="circle" width={112} height={112} />
          </div>
          <div className="media-body">
            <h6 className="mt-2 mb-1"><Skeleton width="30%" /></h6>
            <div className="mb-2"><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" />
            </div>
            <><Skeleton /> <Skeleton width="80%" /> <Skeleton width="40%" /></>
          </div>
        </div>
      </> :
        reviews.map((reviewer: Item, key: any): any => (
          <div key={key} className="media d-block d-sm-flex review">
            <div className="text-md-center mr-4 mr-xl-5">
              <Avatar className="d-block avatar avatar-xl p-2 mb-2" src={reviewer.user.src} alt={reviewer.user.name} />
              <span className="text-uppercase text-muted text-sm">Dec 2018</span>
            </div>
            <div className="media-body">
              <h6 className="mt-2 mb-1">{reviewer.user.name}</h6>
              <div className="mb-2"><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" />
              </div>
              <p className="text-muted text-sm">{reviewer.user.review}</p>
            </div>
          </div>
        ))
    }

  </>;
}

export default Review;
