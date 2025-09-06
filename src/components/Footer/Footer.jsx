import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">

        {/* Grid system for better responsiveness */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-700">
              &copy; Copyright {new Date().getFullYear()}.
              All Rights Reserved by DevUI.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-800">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-gray-700" to="/">Features</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Pricing</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Affiliate Program</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-800">
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-gray-700" to="/">Account</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Help</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Contact Us</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-800">
              Legals
            </h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-gray-700" to="/">Terms &amp; Conditions</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
