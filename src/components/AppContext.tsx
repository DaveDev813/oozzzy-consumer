import React, { ReactElement } from 'react';
import * as storage from 'store';
import { withRouter, RouteComponentProps } from 'react-router';
// import API from '../utils/api';

export enum StorageKeys {
  APP_BEARER = 'sessionKey',
  USER_AUTH = 'user',
}

export interface AppContextStore {
  sessionKey?: string | undefined;
  isSignedIn: boolean;
}

export interface AppContextActions {
  setAuth: () => void;
  logout: () => void;
}

export interface MainAppContextType {
  store: AppContextStore;
  actions: AppContextActions;
}

const MainAppContext = React.createContext<MainAppContextType>({
  store: {
    isSignedIn: false,
  },
  actions: {
    setAuth: (): any => {},
    logout: (): any => {},
  },
});

const SetAppContextProvider: React.FunctionComponent<
  RouteComponentProps<{}>
> = (props: any): ReactElement => {
  const appBearer = storage.get(StorageKeys.APP_BEARER);

  const [state, setState] = React.useState({
    isSignedIn: appBearer !== undefined,
    sessionKey: appBearer,
    user: storage.get(StorageKeys.USER_AUTH),
  } as AppContextStore);

  const actions: AppContextActions = {
    setAuth: (): void => {
      setState({
        isSignedIn: appBearer !== undefined,
        sessionKey: appBearer,
      });
    },
    logout: async (): Promise<void> => {},
  };

  return (
    <MainAppContext.Provider
      value={{
        store: state,
        actions,
      }}>
      {props.children}
    </MainAppContext.Provider>
  );
};

/**
 * Context Components
 */

export const AppContextProvider = withRouter(SetAppContextProvider);

export const AppContextConsumer = MainAppContext.Consumer;

/**
 * HOC for dispatching context data to props
 */

export const withDispatchedContext = (
  Component: React.ComponentType<any>
): any => {
  return (props: any): ReactElement => {
    return (
      <AppContextConsumer>
        {({ actions, store }: MainAppContextType): ReactElement => (
          <Component {...props} actions={actions} store={store} />
        )}
      </AppContextConsumer>
    );
  };
};
