import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='w-full h-[70px] flex justify-center items-center shadow-md  bg-white z-50'>
      <Link href='/'>navbar</Link>
    </nav>
  );
}
