import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'About',
      items: [
        { name: 'The Festival', href: '/the-festival' },
        { name: 'Meet the Festival Team', href: '/team' },
        { name: 'Theatre Studies', href: '/theatre-studies' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'Getting There', href: '/getting-there' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Programme', href: '/programme' },
  ];

  return (
    <div className="min-h-screen bg-[#000]">
      <nav className="bg-[#000] shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#CCFF33]">Festival 2024</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                item.items ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className="text-gray-300 hover:text-[#CCFF33] px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isAboutOpen && (
                      <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1e1e1e] ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-2 text-sm ${
                                location.pathname === subItem.href
                                  ? 'bg-gray-800 text-[#CCFF33]'
                                  : 'text-gray-300 hover:bg-gray-800 hover:text-[#CCFF33]'
                              }`}
                              onClick={() => setIsAboutOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-300 hover:text-[#CCFF33] px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href ? 'text-[#CCFF33]' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#CCFF33] focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1e1e1e]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                item.items ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-300">
                      {item.name}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block pl-6 pr-3 py-2 text-base font-medium ${
                          location.pathname === subItem.href
                            ? 'text-[#CCFF33] bg-gray-800'
                            : 'text-gray-300 hover:text-[#CCFF33] hover:bg-gray-800'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href
                        ? 'text-[#CCFF33] bg-gray-800'
                        : 'text-gray-300 hover:text-[#CCFF33] hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#000] text-white">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Festival 2024</h3>
              <p className="text-gray-400">Celebrating arts and culture through unforgettable experiences.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  item.items ? (
                    <React.Fragment key={item.name}>
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link to={subItem.href} className="text-gray-400 hover:text-white transition-colors">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </React.Fragment>
                  ) : (
                    <li key={item.name}>
                      <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@festival2024.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}