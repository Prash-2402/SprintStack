import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ShieldCheck, Award, FileSpreadsheet, Zap } from 'lucide-react';
import { GOOGLE_FORM_SUBMISSION_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#404E3B] text-[#E6E6E6] border-t border-[#7B9669]/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center border border-[#BAC8B1]/40 overflow-hidden shadow-xs">
                <Image
                  src="/logo.png"
                  alt="SprintStack Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">SprintStack</span>
            </div>
            <p className="text-sm text-[#E6E6E6]/80 max-w-md mb-4 leading-relaxed">
              Official software problem statements formatted with detailed specifications. Submit your GitHub repository and live deployed prototype to qualify for the Top 5 live presentation round.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#BAC8B1]">
              <Zap className="w-3.5 h-3.5 text-[#BAC8B1]" />
              <span>100% Static High-Concurrency Architecture</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Portal Navigation</h3>
            <ul className="space-y-2 text-sm text-[#E6E6E6]/80">
              <li>
                <Link href="/" className="hover:text-[#BAC8B1] transition-colors">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-[#BAC8B1] transition-colors">
                  Browse Problem Statements
                </Link>
              </li>
              <li>
                <Link href="/rubric" className="hover:text-[#BAC8B1] transition-colors">
                  100-Point Judging Rubric
                </Link>
              </li>
              <li>
                <a
                  href={GOOGLE_FORM_SUBMISSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#BAC8B1] font-semibold"
                >
                  <span>Submit Project Links</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Hackathon Essentials</h3>
            <ul className="space-y-2 text-sm text-[#E6E6E6]/80">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#BAC8B1]" />
                <span>GitHub & Deployed Links</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#BAC8B1]" />
                <span>Top 5 Live Presentations</span>
              </li>
              <li className="flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-[#BAC8B1]" />
                <span>Google Form Submission</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#7B9669]/30 flex flex-col sm:flex-row justify-between items-center text-xs text-[#BAC8B1]/80 gap-4">
          <p>© {new Date().getFullYear()} SprintStack Hackathon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Official Problem Statements</span>
            <span>•</span>
            <span>Static Pre-rendered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
