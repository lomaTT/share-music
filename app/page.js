import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center mt-5 items-center flex-col">
      <div><img src="/logo.png" alt="logo" className="w-56"/></div>
      <div className="font-bold mt-4 text-2xl">
        Say hello to all your music and friends!
      </div>
    </div>
  )
}
