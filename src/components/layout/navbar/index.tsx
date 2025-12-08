import { MenuIcon, SearchIcon } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Blog', link: '/blog' },
  { title: 'Tài liệu', link: '/doc' },
  { title: 'Ứng dụng', link: '/case-study' },
  { title: 'Liên hệ', link: '/contact' },
]

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleShowNav = () => setShowNav(!showNav)
  const handleModal = () => setShowModal(!showModal)

  return (
    <>
      <nav className="relative z-20 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between bg-white px-2 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 sm:gap-10">
            {/* hamburger menu */}
            <button onClick={handleShowNav} aria-label="Toggle Menu" className="md:hidden">
              <MenuIcon color="#202020" strokeWidth={3} size={25} />
            </button>

            {/* logo */}
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                className="h-8"
                alt="Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-primary md:text-2xl">
                Ghiền AI
              </span>
            </a>

            {/* nav links */}
            <div
              className={`absolute left-0 right-0 -z-10 flex w-full flex-col gap-3 bg-white p-3 shadow transition-all duration-300 ease-in-out md:relative md:left-0 md:right-auto md:top-auto md:z-auto md:flex-row md:shadow-none ${
                showNav ? 'top-[60px]' : 'top-[-165px]'
              }`}
            >
              {navLinks.map(({ title, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="rounded-md px-3 py-2 text-secondary transition-colors duration-100 ease-linear hover:bg-background hover:text-white"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div>
            <button
              type="button"
              onClick={handleModal}
              className="flex items-center gap-2 rounded-lg border bg-theme px-4 py-2 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-theme-hover active:scale-95 sm:px-5 sm:py-2.5"
            >
              <SearchIcon size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
          onClick={handleModal}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center border-b border-gray-300 px-2 py-1">
              <SearchIcon className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="ml-2 w-full border-none bg-transparent outline-none focus:ring-0"
              />
            </div>
            <button
              onClick={handleModal}
              className="mt-4 w-full rounded bg-theme px-4 py-2 text-white hover:bg-theme-hover"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
