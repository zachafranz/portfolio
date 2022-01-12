import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Template</title>
      <meta name="description" content="NextJS TS Tailwind Prettier Template" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-mono">Hello World</h1>
    </main>
  </>
)

export default Home
