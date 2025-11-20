import type { AppProps } from "next/app";
import Head from "next/head";

import LogoIcon from "../src/PageHome/assets/logo.svg";
import "../src/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Сонце Вам В Мережу</title>
        <meta
          name="description"
          content="Спеціалізований центр зниження енергозалежності."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={LogoIcon} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
