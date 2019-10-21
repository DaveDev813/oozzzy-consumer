import React, { ReactElement } from 'react';
import Star from '@material-ui/icons/star';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    warning: {
      color: '#ffc107',
    },
  })
);

const Rate: React.FC<any> = (props: any): ReactElement => {
  const style = useStyles();
  const stars = [];
  for (let index = 0; index < 5; index++) {
    let fill = '';
    for (let index2 = 0; index2 < props.rate; index2++) {
      if (index === index2) {
        fill = style.warning;
      }
    }
    stars.push(<Star key={index} className={fill} color="disabled" style={{ fontSize: 14 }} />);
  }

  return <>{stars}</>;
};

export default Rate;
