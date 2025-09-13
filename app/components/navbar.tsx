"use client";

import { usePathname } from 'next/navigation';
import NavbarWrapper from './navbarWrapper';

export default function Navbar() {
  const pathname = usePathname();
  
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  
  if (isAuthPage) {
    return null;
  }
  return <NavbarWrapper />;
}