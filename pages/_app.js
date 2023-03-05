import { AuthUserProvider } from '@/lib/AuthUserProvider';
import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

initializeApp(firebaseConfig);

export default function App({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}
