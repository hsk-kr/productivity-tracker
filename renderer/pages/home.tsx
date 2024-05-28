import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Test Page</title>
      </Head>
      <div className="flex flex-col p-8 text-lg gap-8">
        <Link href="/signin">SignIn Page</Link>
        <Link href="/app/home">Home Page</Link>
      </div>
    </React.Fragment>
  );
}
