import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Fetching Data from API in Client Component</h1>
            <Link href="/productlist">Go to Product Page</Link>
    </main>
  )
}
