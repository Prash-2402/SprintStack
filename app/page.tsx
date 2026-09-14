import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Layers, 
  Award, 
  ExternalLink,
  GitBranch, 
  Globe, 
  Users, 
  CheckCircle2, 
  Trophy,
  Medal,
  Sparkles
} from 'lucide-react';
import SubmissionCard from '@/components/SubmissionCard';
import { GOOGLE_FORM_SUBMISSION_URL } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="space-y-14 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#404E3B] via-[#323D2E] to-[#242E21] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#404E3B]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#BAC8B1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7B9669]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          {/* Hackathon Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#BAC8B1]/20 border border-[#BAC8B1]/30 text-xs font-semibold tracking-wide text-[#BAC8B1] uppercase backdrop-blur-sm">
            <div className="w-5 h-5 rounded-md bg-white/10 p-0.5 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="SprintStack" width={20} height={20} className="w-full h-full object-contain" />
            </div>
            SprintStack Hackathon
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            SprintStack <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BAC8B1] via-[#E6E6E6] to-[#7B9669]">
              Problem Statements
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#E6E6E6]/90 max-w-2xl mx-auto leading-relaxed">
            Select your team&apos;s challenge from the official software problem statements. Build a working
            prototype, deploy it online, and submit your <strong>GitHub repository link</strong> and <strong>live deployed link</strong>.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/browse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7B9669] hover:bg-[#BAC8B1] hover:text-[#404E3B] text-white font-bold shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              <Layers className="w-5 h-5" />
              <span>Browse Problem Statements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={GOOGLE_FORM_SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 hover:border-white/30 transition-all text-sm sm:text-base"
            >
              <span>Submit Project Links</span>
              <ExternalLink className="w-4 h-4 text-[#BAC8B1]" />
            </a>
          </div>
        </div>
      </section>

      {/* Hackathon Selection & Evaluation Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E6E6E6] shadow-portal p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-[#7B9669] uppercase tracking-wider">Evaluation Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B]">How Teams Are Evaluated</h2>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              All teams submit their code and working demo. Only the top teams advance to the live presentation stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-[#F5F7F4] p-6 rounded-xl border border-[#E6E6E6] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B] font-bold text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-[#404E3B]">Pick a Problem Statement</h3>
              <p className="text-xs text-[#6C8480] leading-relaxed">
                Review the official problem statements. All statements are tailored for pure software solutions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F5F7F4] p-6 rounded-xl border border-[#E6E6E6] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B] font-bold text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-[#404E3B]">Build & Deploy</h3>
              <p className="text-xs text-[#6C8480] leading-relaxed">
                Build your functional prototype. You only need to submit two items: your <strong>public GitHub link</strong> and your <strong>live deployed web link</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#BAC8B1]/20 p-6 rounded-xl border border-[#BAC8B1]/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#7B9669] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#404E3B]">Top 5 Live Presentations</h3>
              <p className="text-xs text-[#404E3B] leading-relaxed">
                Judges inspect all submitted links. The <strong>Top 5 shortlisted teams</strong> will be called to present live on stage to the judges!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes & Cash Awards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E6E6E6] shadow-portal p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAC8B1]/25 text-[#404E3B] border border-[#BAC8B1]/60 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9669]" />
              Hackathon Awards
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] tracking-tight">
              Prizes & Cash Awards
            </h2>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              Compete among the best teams, build the most complete software prototype, and claim the cash prizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* 1st Place Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#404E3B] via-[#323D2E] to-[#242E21] text-white p-7 sm:p-8 shadow-xl border border-[#7B9669]/50 flex flex-col justify-between group hover:border-[#BAC8B1] transition-all duration-200">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#7B9669]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAC8B1]/20 border border-[#BAC8B1]/40 text-xs font-extrabold text-[#BAC8B1] uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5 text-[#BAC8B1]" />
                    1st Place · Winner
                  </span>
                  <span className="text-xs text-[#BAC8B1]/80 font-medium">Champion</span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1.5">
                    <span>₹5,000</span>
                    <span className="text-base font-semibold text-[#BAC8B1] tracking-normal">Cash Prize</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E6E6E6]/90 mt-2.5 leading-relaxed">
                    Awarded to the championship team with the top-scoring prototype, clean codebase, deployed reliability, and live presentation defense.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#BAC8B1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BAC8B1] shrink-0" />
                    <span>Grand Championship Winner Title</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#BAC8B1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BAC8B1] shrink-0" />
                    <span>Direct Grand Finale Live Stage Presentation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Place Card */}
            <div className="relative overflow-hidden rounded-2xl bg-[#F5F7F4] p-7 sm:p-8 border-2 border-[#BAC8B1] shadow-portal flex flex-col justify-between group hover:border-[#7B9669] transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C8480]/15 border border-[#6C8480]/30 text-xs font-extrabold text-[#404E3B] uppercase tracking-wider">
                    <Medal className="w-3.5 h-3.5 text-[#7B9669]" />
                    2nd Place · Runner-Up
                  </span>
                  <span className="text-xs text-[#6C8480] font-medium">Finalist</span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#404E3B] tracking-tight flex items-baseline gap-1.5">
                    <span>₹3,000</span>
                    <span className="text-base font-semibold text-[#6C8480] tracking-normal">Cash Prize</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#404E3B]/80 mt-2.5 leading-relaxed">
                    Awarded to the outstanding runner-up team demonstrating exemplary engineering, usability, and technical execution.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6E6E6] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#404E3B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9669] shrink-0" />
                    <span>Official Runner-Up Honor</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#404E3B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9669] shrink-0" />
                    <span>Top Finalist Live Showcase Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Rubric Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#404E3B] via-[#323D2E] to-[#242E21] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#7B9669]/40 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BAC8B1]/20 border border-[#BAC8B1]/30 text-xs font-semibold text-[#BAC8B1] uppercase">
              <Award className="w-3.5 h-3.5 text-[#BAC8B1]" />
              100-Point Scoring Matrix
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Judging Standards for Top 5 Shortlisting
            </h2>

            <p className="text-[#E6E6E6]/90 text-sm sm:text-base leading-relaxed">
              Points are awarded for real working software, deployed usability, clean repository code, and edge-case handling.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                <div className="text-2xl font-black text-[#BAC8B1]">20 Pts</div>
                <div className="text-xs text-[#E6E6E6] mt-1 font-medium">Problem Understanding & Scope</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                <div className="text-2xl font-black text-[#BAC8B1]">30 Pts</div>
                <div className="text-xs text-[#E6E6E6] mt-1 font-medium">Working Code & Architecture</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                <div className="text-2xl font-black text-[#BAC8B1]">25 Pts</div>
                <div className="text-xs text-[#E6E6E6] mt-1 font-medium">Live Deployed Usability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                <div className="text-2xl font-black text-[#BAC8B1]">25 Pts</div>
                <div className="text-xs text-[#E6E6E6] mt-1 font-medium">Top 5 Presentation & Q&A</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/rubric"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#404E3B] font-bold hover:bg-[#BAC8B1] transition-colors text-sm shadow-md"
              >
                <span>Read Full 100-Point Rubric & Ground Rules</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Google Form Submission Section at the Bottom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SubmissionCard />
      </section>
    </div>
  );
}
