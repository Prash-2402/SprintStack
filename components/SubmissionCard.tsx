import React from 'react';
import { ExternalLink, Award, CheckCircle2, GitBranch, Globe, Users } from 'lucide-react';
import { GOOGLE_FORM_SUBMISSION_URL } from '@/lib/constants';

interface SubmissionCardProps {
  selectedProblemId?: string;
  selectedProblemTitle?: string;
  className?: string;
}

export default function SubmissionCard({
  selectedProblemId,
  selectedProblemTitle,
  className = '',
}: SubmissionCardProps) {
  return (
    <div
      id="submit-section"
      className={`bg-gradient-to-br from-[#404E3B] via-[#333E2F] to-[#404E3B] text-white rounded-2xl border border-[#7B9669]/50 shadow-portal-hover p-6 sm:p-10 relative overflow-hidden ${className}`}
    >
      {/* Subtle nature glow accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B9669]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#BAC8B1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#BAC8B1]/20 text-[#BAC8B1] border border-[#BAC8B1]/30 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#BAC8B1]" />
            Official Project Submission & Evaluation
          </span>
          <span className="text-xs text-[#BAC8B1]/80">
            • Top 5 Teams Advance to Live Presentations
          </span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {selectedProblemId ? (
              <>
                Submit Project for <span className="text-[#BAC8B1]">{selectedProblemId}</span>
              </>
            ) : (
              'Submit Your Team’s Project'
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#E6E6E6]/90 mt-2 leading-relaxed">
            {selectedProblemId ? (
              <>
                Selected Challenge: <strong className="text-white">{selectedProblemTitle}</strong>. 
                All teams submit their solution links via the Google Form. Judges will review all submissions and select the <strong>Top 5 teams</strong> to present live on stage!
              </>
            ) : (
              'All teams must submit their solution via the official Google Form. Judges evaluate all submissions to select the Top 5 teams who will deliver final presentations!'
            )}
          </p>
        </div>

        {/* The 2 Core Submission Requirements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/15">
            <div className="p-2 rounded-lg bg-[#BAC8B1]/20 text-[#BAC8B1]">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Requirement 1</div>
              <div className="text-sm font-semibold text-[#BAC8B1]">GitHub Repository Link</div>
              <p className="text-xs text-[#E6E6E6]/70 mt-0.5">Public repo with README and runnable source code.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/15">
            <div className="p-2 rounded-lg bg-[#BAC8B1]/20 text-[#BAC8B1]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Requirement 2</div>
              <div className="text-sm font-semibold text-[#BAC8B1]">Live Deployed Link</div>
              <p className="text-xs text-[#E6E6E6]/70 mt-0.5">Working web application or prototype deployment.</p>
            </div>
          </div>
        </div>

        {/* Evaluation note */}
        <div className="bg-[#BAC8B1]/10 rounded-lg p-3 border border-[#BAC8B1]/20 flex items-center gap-2.5 text-xs text-[#BAC8B1]">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#BAC8B1]" />
          <span>Judges evaluate working code and deployed app. <strong>Only the Top 5 teams</strong> will present live.</span>
        </div>

        {/* CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href={GOOGLE_FORM_SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#7B9669] hover:bg-[#BAC8B1] hover:text-[#404E3B] text-white font-bold text-sm sm:text-base shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5"
          >
            <span>Submit GitHub & Deployed Links</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <span className="text-xs text-[#BAC8B1]/70 text-center sm:text-left">
            Redirects directly to official Google Form.
          </span>
        </div>
      </div>
    </div>
  );
}
