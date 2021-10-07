import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { HeaderLayout } from "../../templates/HeaderLayout";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route
        path="/home"
        //デフォルトで受け取ってるpropsの中にmatchがあって
        //その中のurlにある”home”を受け取ることで
        //これからくる全てのページにhome/をつけてる（詳しくは5－19）
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
