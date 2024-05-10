import Image from 'next/image'

// we can add buttons specific to each subdomain in future if required
export default function Home() {
  return (
    <div>
      <Image src='/homePage.png' alt="homepage" width={5000} height={5000} />
    </div>
  )
}
