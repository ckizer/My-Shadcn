import '@/app/globals.css'; // Import global styles. Update the path according to your project structure.
import type { AppProps } from 'next/app'
import RootLayout from '@/app/layout'; // Import the Layout component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      {/* Here the Component refers to any page that will be loaded */}
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;