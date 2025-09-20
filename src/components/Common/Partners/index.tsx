import Image from 'next/image'

export const Partners = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 px-6 pt-8 md:grid-cols-4 md:pt-12">
      <div className="flex h-24 rounded bg-white p-4 sm:h-36">
        <Image
          src="/assets/partners/logo-rd-station-partners.png"
          alt="RD Station Partners Logo"
          width={220}
          height={50}
          className="m-auto h-10 object-contain"
        />
      </div>
      <div className="flex h-24 rounded bg-white p-4 sm:h-36">
        <Image
          src="/assets/partners/logo-google-partners.png"
          alt="Google Partners Logo"
          width={220}
          height={50}
          className="m-auto object-contain"
        />
      </div>
      <div className="flex h-24 rounded bg-white p-4 sm:h-36">
        <Image
          src="/assets/partners/logo-facebook-partners.png"
          alt="Facebook Partners Logo"
          width={220}
          height={50}
          className="m-auto object-contain"
        />
      </div>
      <div className="flex h-24 rounded bg-white p-4 sm:h-36">
        <Image
          src="/assets/partners/logo-tiktok-partners.png"
          alt="TikTok Partners Logo"
          width={220}
          height={50}
          className="m-auto h-10 object-contain"
        />
      </div>
    </div>
  )
}
