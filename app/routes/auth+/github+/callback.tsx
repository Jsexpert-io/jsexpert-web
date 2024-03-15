import { LoaderFunctionArgs } from '@remix-run/node'
import { authenticator } from '../../../server/services/auth.server'



export let loader = ({ request }: LoaderFunctionArgs) => {
    console.log('request', request?.url)
    return authenticator.authenticate('github', request, {
        successRedirect: '/dashboard',
        failureRedirect: '/auth/login',
    })
}