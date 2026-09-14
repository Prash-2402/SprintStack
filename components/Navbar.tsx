'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Compass, CheckCircle2, Menu, X, ExternalLink, Layers, Terminal } from 'lucide-react';
import { GOOGLE_FORM_SUBMISSION_URL } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: Compass },
    { name: 'Browse Statements', href: '/browse', icon: Layers },
    { name: 'Judging Rubric', href: '/rubric', icon: CheckCircle2 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E6E6E6] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#F5F7F4] border border-[#E6E6E6] p-1 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#7B9669] transition-all">
              <Image
                src="/logo.png"
                alt="SprintStack Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-[#404E3B] text-lg tracking-tight">SPRINTSTACK</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#BAC8B1]/40 text-[#404E3B] border border-[#BAC8B1]">
                  Hackathon
                </span>
              </div>
              <p className="text-xs text-[#6C8480] -mt-0.5">Problem Statement Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#BAC8B1]/35 text-[#404E3B] font-semibold'
                      : 'text-[#404E3B]/80 hover:text-[#404E3B] hover:bg-[#E6E6E6]/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#7B9669]' : 'text-[#6C8480]'}`} />
                  {link.name}
                </Link>
              );
            })}

            <div className="h-5 w-px bg-[#E6E6E6] mx-2" />

            <Link
              href="/browse"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#404E3B] hover:bg-[#E6E6E6]/60 rounded-lg transition-colors"
            >
              Browse Statements
            </Link>

            {/* Google Form Submission Direct Link */}
            <a
              href={GOOGLE_FORM_SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#7B9669] hover:bg-[#404E3B] rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span>Submit Project Links</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#404E3B] hover:bg-[#E6E6E6] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E6E6E6] bg-white px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'bg-[#BAC8B1]/35 text-[#404E3B] font-semibold'
                    : 'text-[#404E3B] hover:bg-[#E6E6E6]/60'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#7B9669]' : 'text-[#6C8480]'}`} />
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 space-y-2">
            <Link
              href="/browse"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#404E3B] text-white font-medium shadow-sm"
            >
              Browse Statements
            </Link>
            <a
              href={GOOGLE_FORM_SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#7B9669] text-white font-medium shadow-sm"
            >
              <span>Submit Project Links (Google Form)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
