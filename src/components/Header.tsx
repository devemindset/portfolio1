"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="flex items-center justify-between bg-white/80 backdrop-blur rounded-xl shadow-md px-6 py-4">
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center">
          <div>
            <Image src="android-chrome-192x192.png" alt="validation flow" width={24} height={24} />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Validation<span className="text-blue-600">Flow</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600">How it works</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm text-gray-700 hover:text-blue-600">
            Sign in
          </Link>
          <Link
            href="/register"
            className="bg-[#1E2A3A] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white mt-2 rounded-lg shadow px-4 py-3 text-sm text-gray-700 space-y-2">
          <a href="#features" className="block hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="block hover:text-blue-600">How it works</a>
          <a href="#pricing" className="block hover:text-blue-600">Pricing</a>
          <a href="#faq" className="block hover:text-blue-600">FAQ</a>
          <a href="/contact" className="block hover:text-blue-600">Contact</a>
          <hr />
          <Link href="/login" className="block text-gray-700 hover:text-blue-600">Sign in</Link>
          <Link
            href="/register"
            className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Start Free
          </Link>
        </div>
      )}
    </header>
  );
}
