import { LoaderFunctionArgs, redirect } from '@remix-run/node'

import { authenticator } from '../../server/services/auth.server'

import { commitSession, getSession } from '~/server/services/user.session.server'




export let loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await authenticator.authenticate('github', request)


    // manually get the session
    const session = await getSession(request.headers.get("cookie"));
    // and store the user data



    session.set(authenticator.sessionKey, { ...user });

    // commit the session
    const headers = new Headers({ "Set-Cookie": await commitSession(session) });

    return redirect("/dashboard", { headers });
}