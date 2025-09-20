import Image from 'next/image'

interface FeatureServiceProps {
  image: string
  title: string
  text: string
}

export const FeatureService: React.FC<FeatureServiceProps> = ({
  image,
  title,
  text,
}) => (
  <div>
    <div className="bg-sinais-black flex h-48 w-full flex-col items-center justify-center rounded-xl px-5 py-6 text-center font-medium">
      <Image
        src={image}
        alt={title}
        width={130}
        height={130}
        className="size-32 object-contain"
      />
    </div>

    <p className="text-foreground mt-6 text-lg font-bold md:text-xl xl:text-2xl">
      {title}
    </p>
    <p className="mt-4 text-base md:text-lg">{text}</p>
  </div>
)
