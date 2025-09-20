import React from 'react'

interface FeatureAboutProps {
  strong: string
  small: string
  text: string
}

export const FeatureAbout: React.FC<FeatureAboutProps> = ({
  strong,
  small,
  text,
}) => (
  <div>
    <div className="bg-sinais-blue flex h-48 w-full flex-col items-center justify-center rounded-xl px-5 py-3 text-center font-medium">
      <strong className="block text-2xl font-bold md:text-3xl xl:text-4xl">
        {strong}
      </strong>
      <small className="text-lg md:text-xl xl:text-2xl">{small}</small>
    </div>

    <p className="text-foreground mt-6 text-lg font-bold md:text-xl xl:text-2xl">
      {text}
    </p>
  </div>
)
