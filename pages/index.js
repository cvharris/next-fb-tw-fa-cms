import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/sharp-regular-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>St. Roch Trivia Night</title>
        <meta
          name="description"
          content="St. Roch parish Trivia Night April 22nd, 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </>
  );
}
