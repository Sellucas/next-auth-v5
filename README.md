# Next Auth v5 - User Authentication

![NextAuth]()

## About

This Next.js project integrates Next-auth v5 to offer a robust authentication system with a wide range of features. Designed to enhance security and flexibility, it serves as a reliable solution for authentication needs in Next.js applications.

The deployment was carried out using Vercel and is available [here](/).

## Technologies

- NextJs v14
- Zod
- Shadcn UI
- Tailwind
- UUID
- Resend
- Prisma

## Features

- Authentication: Utilizes Next-auth v5 for authentication functionalities.
- Server Actions: Employs Next.js 14 with server actions for enhanced performance.
- Credentials Provider: Allows users to authenticate with email and password.
- OAuth Provider: Enables social login with Google and GitHub.
- Forgot Password: Implements functionality for users to reset their password.
- Email Verification: Verifies user email addresses upon registration.
- Two-Factor Verification: Provides an additional layer of security with two-factor authentication.
- User Roles: Supports two user roles: Admin and User.
- Forgot Password Component: Renders a component for users to initiate the password reset process.
- Verification Component: Displays a component for email verification.
- Error Component: Renders an error component for handling authentication errors.
- Login and Logout Button: Provides a login and logout button component.
- Role Gate: Controls access to certain functionalities based on user roles.
- Render Content for Admins: Renders specific content for users with admin privileges using RoleGate component.
- Protect API Routes: Secures API routes to be accessible only by admins.
- Protect Server Actions: Ensures server actions are accessible only by admins.
- Change Email: Allows users to change their email with new verification in the Settings page.
- Change Password: Facilitates changing passwords with old password confirmation in the Settings page.
- Enable/Disable Two-Factor Auth: Allows users to enable or disable two-factor authentication in the Settings page.
- Change User Role: Permits changing user roles in the Settings page (for development purposes only).

## Cloning

```shell
git clone https://github.com/Sellucas/next-auth-v5.git

cd next-auth-v5

npm i
```

### Setup .env file

```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Getting Started

```shell
npm run dev
```

## Contact

- LinkedIn: [in/lucas-sell-machado](https://www.linkedin.com/in/lucas-sell-machado/)
- Email: <lucassellmachado@gmail.com>