import React, { ReactElement, useState, useEffect } from 'react';
import { CardBody } from './Card';

import SnackbarNotif, { SnackbarVariant } from './Snackbar';
import API, { ApiResponse } from '../utils/api';
import { CircularProgress, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import _ from 'lodash';
interface WorkingHours {
  day: string;
  time: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: 8,
    },
  })
);

const OperationHours: React.FC = (): ReactElement => {
  const [operationsData, setOperationsData] = useState<WorkingHours[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasNotif, setHasNotif] = useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });

  useEffect(() => {

    const fetchData = async (): Promise<void> => {
      const operationsData: ApiResponse = await API.get('/operation');

      if (operationsData.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }
      setOperationsData(_.values(operationsData.data));
      setIsLoading(false);
    }

    fetchData().then((): void => console.log('loaded'))

  }, [setOperationsData, isLoading]);

  const classes = useStyles();

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
    <CardBody>
      {isLoading ? <div style={{ textAlign: 'center' }}>
        <CircularProgress className={classes.progress} />
      </div> :
        <table className="table text-sm mb-0">
          <tbody>
            {
              operationsData.map((working: WorkingHours, key: any): any => {
                return <tr key={key}>
                  <th className="pl-0 border-0">{working.day}</th>
                  <td className="pr-0 text-right border-0">{working.time}</td>
                </tr>;
              })
            }
          </tbody>
        </table>
      }
    </CardBody >
  </>;

};

export default OperationHours;
