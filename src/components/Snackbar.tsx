import React, { SyntheticEvent, ReactElement } from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles, Theme } from '@material-ui/core/styles';

export enum SnackbarVariant {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 10,
  },
}));

/**
 * TODO: This component is too larg and complicated and needs refactoring
 */
export interface SnackbarContentWrapperProps {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: SnackbarVariant;
}

const SnackbarContentWrapper = (
  props: SnackbarContentWrapperProps
): ReactElement => {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

interface SnackbarNotifProps extends SnackbarContentWrapperProps {
  isOpen: boolean;
  onCloseSnackbar: () => void;
}

const SnackbarNotif = ({
  isOpen,
  onCloseSnackbar,
  ...props
}: SnackbarNotifProps): ReactElement => {
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect((): void => setOpen(isOpen), [setOpen, isOpen]);

  const handleClose = (event?: SyntheticEvent, reason?: string): void => {
    onCloseSnackbar();
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContentWrapper onClose={handleClose} {...props} />
    </Snackbar>
  );
};

export default SnackbarNotif;
