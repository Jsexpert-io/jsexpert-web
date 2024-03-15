import type { ActionArgs,redirect } from '@remix-run/node';
import { authenticator } from '~/server/services/auth.server';



export async function loader({ request }: any) {
    await authenticator.logout(request, { redirectTo: "/" });
    return redirect("/")
};