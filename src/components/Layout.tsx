import React, { useRef, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    {
      name: 'About',
      items: [
        { name: 'The Festival', href: '/the-festival' },
        { name: 'Meet the Festival Team', href: '/team' },
        { name: 'Department of Theatre Studies', href: '/department-of-theatre-studies' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'Getting There', href: '/getting-there' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Programme', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#000]">
      <nav className="bg-[#36B6FF] shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-24">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                    src="/pauseandplay-logo-1.jpg"
                    alt="Pause and Play Logo"
                    className="h-20 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                item.items ? (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className="text-black border-b-2 border-transparent hover:border-black px-3 py-2 text-sm font-medium transition-all inline-flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isAboutOpen && (
                      <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-2 text-sm ${
                                location.pathname === subItem.href
                                  ? 'bg-gray-100 text-black'
                                  : 'text-black hover:bg-gray-50'
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
                    className={`text-black border-b-2 hover:border-black px-3 py-2 text-sm font-medium transition-all ${
                      location.pathname === item.href ? 'border-black' : 'border-transparent'
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-black focus:outline-none"
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
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                item.items ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-black">
                      {item.name}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block pl-6 pr-3 py-2 text-base font-medium border-b-2 ${
                          location.pathname === subItem.href
                            ? 'text-black border-[#EEC60D]'
                            : 'text-black border-transparent hover:border-[#EEC60D]'
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
                    className={`block px-3 py-2 text-base font-medium border-b-2 ${
                      location.pathname === item.href
                        ? 'text-black border-[#EEC60D]'
                        : 'text-black border-transparent hover:border-[#EEC60D]'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pause & Play Festival</h3>
              <p className="text-gray-400">
                This is a festival about celebrating play and creativity.<br/>
                This is a festival to pause and reflect, play to connect.
              </p>
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
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
            Copyright Pause & Play Festival. This festival is being supported by the Department of Theatre Studies within the University of Malta’s School of Performing Arts. This festival website was designed by Onyx Studio.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}