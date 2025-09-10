import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#2c5364]">MyYojana</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/schemes" 
              className="text-gray-600 hover:text-[#2c5364] transition-colors"
            >
              Schemes
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-[#2c5364] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-[#2c5364] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-[#2c5364] transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-[#2c5364] text-white px-4 py-2 rounded-lg hover:bg-[#203a43] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}