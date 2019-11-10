import React, { useState, useEffect } from 'react'
import Avatar from './Avatar'
import { Skeleton } from '@material-ui/lab';
import SnackbarNotif, { SnackbarVariant } from './Snackbar';
import API, { ApiResponse } from '../utils/api';
import _ from 'lodash';

const reviews = [
  {
    'user': {
      'src': 'img/avatar/avatar-8.jpg',
      'name': 'Padmé Amidala',
      'review': 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections'
    }
  },
  {
    'user': {
      'src': 'img/avatar/avatar-2.jpg',
      'name': 'Luke Skywalker',
      'review': 'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What\'s happened to me? he thought.It wasn\'t a dream.'
    }
  },
  {
    'user': {
      'src': 'img/avatar/avatar-3.jpg',
      'name': 'Princess Leia',
      'review': 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.'
    }
  },
  {
    'user': {
      'src': 'img/avatar/avatar-4.jpg',
      'name': 'Princess Leia',
      'review': 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.'
    }
  }
];

interface Item {
  user: {
    src: string;
    name: string;
    review: string;
  };
}

const Review: React.FC = (): any => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNotif, setHasNotif] = useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });

  useEffect(() => {

    const fetchReview = async (): Promise<void> => {

      const reviews: ApiResponse = await API.get('/reviews');

      if (reviews.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }
      setData(_.values(reviews.data));
      setIsLoading(false);
    }

    fetchReview().then((): void => console.log('loaded'));

  }, [data, isLoading]);
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
    {
      reviews.map((reviewer: Item, key: any): any => (
        <div key={key} className="media d-block d-sm-flex review">
          <div className="text-md-center mr-4 mr-xl-5">
            {isLoading ? <Skeleton variant="circle" width={112} height={112} /> : <Avatar className="d-block avatar avatar-xl p-2 mb-2" src={reviewer.user.src} alt={reviewer.user.name} />}
            <span className="text-uppercase text-muted text-sm">Dec 2018</span>
          </div>
          <div className="media-body">
            <h6 className="mt-2 mb-1">{isLoading ? <Skeleton width="30%" /> : reviewer.user.name}</h6>
            <div className="mb-2"><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" />
            </div>
            {isLoading ? <><Skeleton /> <Skeleton width="80%" /> <Skeleton width="40%" /></> : <p className="text-muted text-sm">{reviewer.user.review}</p>}
          </div>
        </div>
      ))
    }

  </>;
}

export default Review;
