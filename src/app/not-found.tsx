import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-black px-4 py-20 text-white">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-6 text-2xl">Página não encontrada</h2>
      <p className="mb-8 max-w-md text-center">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="bg-sinais-blue hover:bg-sinais-blue/80 animate-(--pulse-shadow-sinais-blue) rounded-xl px-8 py-3 font-medium text-white transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  )
}
