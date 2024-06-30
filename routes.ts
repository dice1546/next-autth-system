/**
 * These are the public routes.
 * These are of @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification"
];

/**
 * These are the authentication routes.
 * These are of @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

/**
 * These are the api authentication routes.
 * Routes that start with this prefix are used for API authntication purposes.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";