export const  APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore'
export const  APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "A modern e-commerce platform that built in with Next.js, TypeScript, and Tailwind CSS."
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT)  || 4
export const DEFAULT_SIGN_IN_VALUES = {
    email : 'test@test.com',
    password : '123456',
}