import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import Header from '../components/Header'
import Snippet from '../components/Snippet'

export default function Home() {
  const { data, mutate } = useSWR('/api/snippets', (apiURL) => fetch(apiURL).then(res => res.json()))

  return (
    <div>
      <Head>
        <title>Snippet App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-12">
          <Header title="Code Snippets" subtitle="Create and browse snippets in Web development" />
        </div>
        {data && data.map(snippet => <Snippet key={snippet.id} snippet={snippet} snippetDeleted={mutate} />
        )}
      </main>
    </div>
  )
}
