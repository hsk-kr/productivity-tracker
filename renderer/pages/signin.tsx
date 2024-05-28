import React from 'react';
import Head from 'next/head';
import GoogleSignIn from '../components/GoogleSignIn';

export default function SignInPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Productivity Tracker - Sign In</title>
      </Head>
      <div className="flex justify-center items-center h-svh">
        <div className="max-w-[768px] text-center p-8 pb-30">
          <h1 className="uppercase mb-2 text-3xl font-bold">
            Welcome to Productivity Tracker!
          </h1>
          <p className="mb-4 italic">
            Track your daily productivity and maximize your efficiency.
          </p>
          <GoogleSignIn />
        </div>
      </div>
    </React.Fragment>
  );
}
