import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";



import { GitHubStrategy } from "remix-auth-github";
import { GoogleStrategy } from 'remix-auth-google';


import path from 'path';
import { getSession, sessionStorage } from "./user.session.server";
import { RoleType, UserService } from "./user/user.server";
interface IUser {
  id: string;

  email: string;
  name: string;
  type: RoleType;
  role: string
  [key: string]: any;


}

export const getLoginUrlWithRole = (referer: any) => {
  return '/auth/google?redirect_url=' + referer;
}

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<IUser>(sessionStorage);
const userService = new UserService();
const googleStrategy = new GoogleStrategy(
  {
    clientID: '845702027190-utlsmshlnbccc3hmi5v8m227d1grmfoq.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: `${process.env.APP_URL}/auth/google/callback`,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    return userService.loginByGoogle(profile)
  }
)
const gitHubStrategy = new GitHubStrategy(
  {
    clientID: "Iv1.4a1be0530deb8a55",
    clientSecret: "45351efa8a3924945510eb2424ea9b5168c6d266",
    callbackURL: `${process.env.APP_URL}/auth/github/callback`,
  },
  async ({ accessToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    console.log('profile', accessToken, extraParams, profile)
    return userService.loginByGoogle(profile)
  },

);
authenticator.use(gitHubStrategy, 'github')
authenticator.use(googleStrategy, 'google')

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email: any = form.get("email");
    const password: any = form.get("password");


    return userService.login(email, password);
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);

export const requireUser = async (request: Request) => {
  const session = await getSession(request.headers.get("cookie"));
  // get the url from where the user is coming from
  console.log('session', path.parse(request.url))
  const referer = request.url
  if (!session) {
    return authenticator.logout(request, { redirectTo: getLoginUrlWithRole(referer) });
  }
  const user = session.get(authenticator.sessionKey);
  if (!user) {

    return authenticator.logout(request, { redirectTo: getLoginUrlWithRole(referer) });
  }
  return user as IUser;
}

export const getNavigationForUser = (user: IUser) => {
  return [
    "Dashboard", "Team", "Projects", "Calendar", "Documents", "Reports"
  ]
}



