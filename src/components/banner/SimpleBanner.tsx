interface BannerProps {
  title: string
  description?: string
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <section className="relative py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-4 text-5xl font-bold text-gray-900 sm:text-6xl tracking-tight">{title}</h1>
        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>

  )
}

export default Banner
