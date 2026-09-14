import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  GitBranch, 
  Globe, 
  Trophy,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { GOOGLE_FORM_SUBMISSION_URL } from '@/lib/constants';

export default function RubricPage() {
  const judgingCriteria = [
    {
      category: 'Problem Understanding & Scope',
      weight: '20 Pts',
      description: 'Understanding the problem statement, edge cases, and workflow requirements.',
      breakdown: [
        'Precise decomposition of the problem into concrete software components (10 pts)',
        'Realistic handling of domain constraints and boundary conditions (10 pts)'
      ]
    },
    {
      category: 'GitHub Repository & Code Quality',
      weight: '30 Pts',
      description: 'Clean source code, modular structure, Git commit history, and setup documentation.',
      breakdown: [
        'Clean modular software architecture (APIs, state handling, logic modules) (15 pts)',
        'Comprehensive README with installation & local execution instructions (15 pts)'
      ]
    },
    {
      category: 'Live Deployed Prototype Usability',
      weight: '25 Pts',
      description: 'A functioning web application or prototype accessible via the submitted live URL.',
      breakdown: [
        'Live working demo with real inputs, state changes, and reactive outputs (15 pts)',
        'Responsive UI and resilient error/boundary handling (10 pts)'
      ]
    },
    {
      category: 'Top 5 Presentation & Defense',
      weight: '25 Pts',
      description: 'Delivered exclusively by the Top 5 shortlisted teams in the final live presentation round.',
      breakdown: [
        'High-impact live walkthrough of the working application (15 pts)',
        'Clarity in answering technical and architectural questions from judges (10 pts)'
      ]
    },
  ];

  const groundRules = [
    {
      do: 'Reward functional prototypes that run live via the submitted deployed link with real interactive output.',
      dont: 'Do not reward static screenshot decks, non-working buttons, or non-functional mockups.'
    },
    {
      do: 'Reward clean public GitHub repositories with active commit history and clear README setup guides.',
      dont: 'Do not reward code dumps, missing repositories, or broken builds that fail to run.'
    },
    {
      do: 'Reward thoughtful boundary handling, input validation, and real-world fallback behavior.',
      dont: 'Do not reward brittle happy-path only scripts that crash on unexpected inputs.'
    },
    {
      do: 'Select the Top 5 teams strictly based on code quality and live deployed functionality.',
      dont: 'Do not select teams based on superficial presentation polish without working code.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title & Introduction */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BAC8B1]/30 text-[#404E3B] text-xs font-bold uppercase tracking-wider border border-[#BAC8B1]">
          <Award className="w-3.5 h-3.5 text-[#7B9669]" />
          Official Evaluation Standard
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#404E3B] tracking-tight">
          100-Point Judging Rubric & Selection Rules
        </h1>
        <p className="text-sm sm:text-base text-[#6C8480] leading-relaxed">
          How teams are evaluated for the <strong>Top 5 live presentation round</strong> based strictly on their 
          submitted GitHub repository and live deployed application.
        </p>
      </div>

      {/* Cash Prizes Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-[#404E3B] to-[#323D2E] text-white p-4 sm:p-5 rounded-xl border border-[#7B9669]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#BAC8B1]/20 flex items-center justify-center text-[#BAC8B1]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#BAC8B1] uppercase tracking-wider">1st Place Winner</div>
              <div className="text-xl font-extrabold text-white">₹5,000 Cash Prize</div>
            </div>
          </div>
          <span className="text-xs bg-[#BAC8B1]/20 text-[#BAC8B1] px-2.5 py-1 rounded-full border border-[#BAC8B1]/30 font-semibold">Champion</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E6E6E6] shadow-portal flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B]">
              <Award className="w-5 h-5 text-[#7B9669]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#6C8480] uppercase tracking-wider">2nd Place Runner-Up</div>
              <div className="text-xl font-extrabold text-[#404E3B]">₹3,000 Cash Prize</div>
            </div>
          </div>
          <span className="text-xs bg-[#6C8480]/15 text-[#404E3B] px-2.5 py-1 rounded-full border border-[#6C8480]/30 font-semibold">Runner-Up</span>
        </div>
      </div>

      {/* 100-Point Table */}
      <div className="bg-white rounded-2xl border border-[#E6E6E6] shadow-portal overflow-hidden">
        <div className="bg-[#404E3B] text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[#BAC8B1] text-xs font-bold uppercase tracking-wider">Evaluation Framework</span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">100-Point Breakdown</h2>
          </div>
          <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-center">
            <div className="text-2xl font-black text-[#BAC8B1]">100 Pts</div>
            <div className="text-[11px] text-[#E6E6E6] uppercase font-medium">Total Available</div>
          </div>
        </div>

        <div className="divide-y divide-[#E6E6E6]">
          {judgingCriteria.map((item, index) => (
            <div key={item.category} className="p-6 hover:bg-[#F5F7F4] transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#BAC8B1]/40 text-[#404E3B] text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#404E3B]">{item.category}</h3>
                </div>
                <span className="inline-block self-start sm:self-auto px-2.5 py-1 rounded-md bg-[#BAC8B1]/30 text-[#404E3B] font-extrabold text-xs border border-[#BAC8B1]">
                  {item.weight}
                </span>
              </div>
              <p className="text-xs text-[#6C8480] mb-3 pl-8">{item.description}</p>
              <div className="space-y-1.5 pl-8">
                {item.breakdown.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-[#404E3B]">
                    <span className="text-[#7B9669] mt-0.5">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ground Rules: Do vs. Don't Reward */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold text-[#7B9669] uppercase tracking-wider mb-1">Judging Philosophy</div>
          <h2 className="text-2xl font-bold text-[#404E3B]">Hackathon Ground Rules</h2>
          <p className="text-sm text-[#6C8480] mt-1">
            Principles for shortlisting the Top 5 presentation finalists.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E6E6E6] shadow-portal overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E6E6E6]">
            {/* Do Column */}
            <div className="p-6 bg-[#BAC8B1]/15">
              <div className="flex items-center gap-2 text-[#404E3B] font-bold text-sm mb-4 pb-2 border-b border-[#BAC8B1]">
                <CheckCircle2 className="w-5 h-5 text-[#7B9669]" />
                <span>WHAT JUDGES REWARD (DO)</span>
              </div>
              <ul className="space-y-4">
                {groundRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#404E3B]">
                    <CheckCircle2 className="w-4 h-4 text-[#7B9669] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{rule.do}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't Column */}
            <div className="p-6 bg-[#6C8480]/10">
              <div className="flex items-center gap-2 text-[#404E3B] font-bold text-sm mb-4 pb-2 border-b border-[#6C8480]/30">
                <XCircle className="w-5 h-5 text-[#6C8480]" />
                <span>WHAT JUDGES PENALIZE (DON'T)</span>
              </div>
              <ul className="space-y-4">
                {groundRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#404E3B]">
                    <XCircle className="w-4 h-4 text-[#6C8480] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{rule.dont}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Baseline: 2 Requirements */}
      <div className="bg-white rounded-2xl border border-[#E6E6E6] p-6 sm:p-8 shadow-portal space-y-6">
        <div>
          <div className="text-xs font-bold text-[#7B9669] uppercase tracking-wider mb-1">Submission Standard</div>
          <h2 className="text-xl font-bold text-[#404E3B]">The 2 Required Submission Links</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Requirement 1 */}
          <div className="bg-[#F5F7F4] p-5 rounded-xl border border-[#E6E6E6] space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B]">
              <GitBranch className="w-5 h-5 text-[#7B9669]" />
            </div>
            <h3 className="font-bold text-[#404E3B]">1. Public GitHub Link</h3>
            <p className="text-xs text-[#6C8480] leading-relaxed">
              Public GitHub repository with all source code, commit history, and a README explaining how to run the project.
            </p>
          </div>

          {/* Requirement 2 */}
          <div className="bg-[#F5F7F4] p-5 rounded-xl border border-[#E6E6E6] space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B]">
              <Globe className="w-5 h-5 text-[#7B9669]" />
            </div>
            <h3 className="font-bold text-[#404E3B]">2. Live Deployed Link</h3>
            <p className="text-xs text-[#6C8480] leading-relaxed">
              Live working URL hosted on Vercel, Netlify, Cloudflare, AWS, etc., so the judges can directly test your interactive application.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E6E6E6] flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          <Link
            href="/browse"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#404E3B] text-white font-semibold text-xs hover:bg-[#7B9669] transition-colors shadow-xs"
          >
            <span>Browse 20 Problem Statements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={GOOGLE_FORM_SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#7B9669] text-white font-semibold text-xs hover:bg-[#404E3B] transition-colors shadow-xs"
          >
            <span>Submit Project Links (Google Form)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
