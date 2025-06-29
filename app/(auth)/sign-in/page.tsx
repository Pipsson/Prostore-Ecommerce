import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { APP_NAME } from '@/lib/constants'
import CredentialsSignInForm from './credentials-signin-form'

export const metadata : Metadata = {
    title : 'Sign In',
    description : 'Sign In to your account',
}
const SignInPage = () => {
  return (
    <div 
    className='w-full max-w-md mx-auto' 
    >
        <Card>
            <CardHeader className='space-y-4'>
                <Link href='/' className='flex-center'>
                    <Image  src='/images/logo.svg' alt={`${APP_NAME} logo`} width={100} height={100}  priority = {true} />
                </Link>
                <CardTitle className='text-center '>
                    Sign In
                </CardTitle>
                <CardDescription className='text-center'>
                    Sign in to your account to continue
                </CardDescription>
                <CardContent>
                    <CredentialsSignInForm />
                </CardContent>
            </CardHeader>
        </Card>
    </div>
  )
}

export default SignInPage