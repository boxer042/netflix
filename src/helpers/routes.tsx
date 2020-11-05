import React from "react";
import { Route, Redirect } from "react-router-dom";
// 로그인 유무를 파악해서 리디렉트를 해준다.
export interface IIsUserRedirect {
  children: React.ReactNode;
  user: any;
  loggedInPath: any;
  path: any;
}

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...rest
}: IIsUserRedirect) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export interface IProtectedRoute {
  children: React.ReactNode;
  user: any;
  path: any;
}

// 유저가 로그인 없이 메인 브라우져로 들어오면 로그인 페이지로 보낸다.
// 예) 주소를 직접 입력하고 들어오는 경우(/browse)
export function ProtectedRoute({ user, children, ...rest }: IProtectedRoute) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
