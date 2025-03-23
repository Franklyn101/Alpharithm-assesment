import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#051131] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
                <span className="text-[#051131] font-bold">A</span>
              </div>
            </Link>
            <p className="text-white/70 mb-4">AI-powered solutions for modern businesses.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Market Prediction
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Content Generation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Alpharithm, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-white/50 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-white/50 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm text-white/50 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

