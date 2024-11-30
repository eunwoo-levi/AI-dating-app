'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const menuItems = [
    {
      name: 'Products',
      items: ['Product 1', 'Product 2', 'Product 3'],
    },
    {
      name: 'Solutions',
      items: ['Solution 1', 'Solution 2', 'Solution 3'],
    },
    {
      name: 'Resources',
      items: ['Blog', 'Documentation', 'Help Center'],
    },
  ];

  return (
    <nav className='w-full bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <span className='text-2xl font-bold'>Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className='relative group'
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown('')}
              >
                <button className='flex items-center space-x-1 text-gray-700 hover:text-gray-900'>
                  <span>{item.name}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                {activeDropdown === item.name && (
                  <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2'>
                    {item.items.map((subItem) => (
                      <a key={subItem} href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button className='p-2' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          {menuItems.map((item) => (
            <div key={item.name} className='px-4 py-2'>
              <div className='font-medium'>{item.name}</div>
              <div className='pl-4'>
                {item.items.map((subItem) => (
                  <a key={subItem} href='#' className='block py-2 text-gray-600'>
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
