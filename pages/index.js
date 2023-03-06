import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/sharp-regular-svg-icons';
import { attributes } from '../content/home.md';

export default function Home() {
  return (
    <>
      <Head>
        <title>{attributes.title}</title>
        <meta name="description" content={attributes.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="min-h-screen flex">
        <div className="flex-grow flex justify-center items-center">
          <h1>{attributes.title}</h1>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <footer />
      </div>
    </>
  );
}
