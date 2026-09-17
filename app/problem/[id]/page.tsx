import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Building2, 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { getProblemStatementById, getProblemStatements } from '@/lib/data';
import StatusBadge from '@/components/StatusBadge';
import TabsSection from '@/components/TabsSection';
import SubmissionCard from '@/components/SubmissionCard';
import { GOOGLE_FORM_SUBMISSION_URL } from '@/lib/constants';

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const { data } = getProblemStatements();
  const idSet = new Set<string>();
  data.forEach((item) => {
    idSet.add(item.id);
    if (item.displayId) {
      idSet.add(item.displayId);
    }
  });
  return Array.from(idSet).map((id) => ({ id }));
}

export default function ProblemDetailPage({ params }: PageProps) {
  const problem = getProblemStatementById(params.id);

  if (!problem) {
    notFound();
  }

  // Calculate next and previous problem within the same semester track
  const { data: allProblems } = getProblemStatements();
  const sameSemester = allProblems.filter((p) => p.semester === problem.semester);
  const currentIndex = sameSemester.findIndex((p) => p.id === problem.id);
  const prevProblem = currentIndex > 0 ? sameSemester[currentIndex - 1] : null;
  const nextProblem = currentIndex >= 0 && currentIndex < sameSemester.length - 1 ? sameSemester[currentIndex + 1] : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6C8480]">
        <Link href="/" className="hover:text-[#404E3B] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#BAC8B1]" />
        <Link href="/browse" className="hover:text-[#404E3B] transition-colors">
          Browse Statements
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#BAC8B1]" />
        <span className="font-semibold text-[#404E3B]">
          {problem.semester ? `${problem.semester} • ` : ''}{problem.displayId || problem.id}
        </span>
      </nav>

      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <Link
          href="/browse"
          className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#404E3B] hover:text-[#404E3B] bg-white border border-[#E6E6E6] hover:bg-[#BAC8B1]/15 px-3.5 py-2 rounded-lg shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#7B9669]" />
          <span>Back to Statements</span>
        </Link>

        {/* Prev / Next navigation + Direct Form Submit */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          {prevProblem && (
            <Link
              href={`/problem/${prevProblem.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#404E3B] hover:bg-[#BAC8B1]/20 bg-white border border-[#E6E6E6] px-3 py-2 rounded-lg shadow-xs transition-colors"
              title="Previous Problem Statement"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#7B9669]" />
              <span>{prevProblem.displayId || prevProblem.id}</span>
            </Link>
          )}
          {nextProblem && (
            <Link
              href={`/problem/${nextProblem.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#404E3B] hover:bg-[#BAC8B1]/20 bg-white border border-[#E6E6E6] px-3 py-2 rounded-lg shadow-xs transition-colors"
              title="Next Problem Statement"
            >
              <span>{nextProblem.displayId || nextProblem.id}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7B9669]" />
            </Link>
          )}

          <a
            href={GOOGLE_FORM_SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#7B9669] hover:bg-[#404E3B] text-white font-bold text-xs shadow-xs transition-all"
          >
            <span>Lock In {problem.displayId || problem.id}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Card 1: Official Schema Card */}
      <div className="bg-white rounded-2xl border border-[#E6E6E6] shadow-portal overflow-hidden">
        <div className="p-6 sm:p-10 space-y-8">
          {/* Header & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <StatusBadge type="id" label={problem.displayId || problem.id} className="text-sm px-3 py-1" />
              {problem.semester && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#7B9669]/20 text-[#404E3B] border border-[#7B9669]/50">
                  {problem.semester} {problem.day ? `• ${problem.day}` : ''}
                </span>
              )}
              <StatusBadge type="category" label={problem.category} />
              <StatusBadge type="difficulty" label={problem.difficulty} />
              <StatusBadge type="theme" label={problem.theme} />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] tracking-tight leading-snug">
              {problem.title}
            </h1>
          </div>

          {/* Ministry / Department Banner */}
          <div className="bg-[#BAC8B1]/15 border border-[#BAC8B1]/40 rounded-xl p-4 flex items-start gap-3.5">
            <Building2 className="w-5 h-5 text-[#7B9669] mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#6C8480]">
                Host Ministry & Division
              </div>
              <div className="text-sm font-bold text-[#404E3B] mt-0.5">
                {problem.organization}
              </div>
              {problem.department && (
                <div className="text-xs text-[#6C8480] font-medium">
                  {problem.department}
                </div>
              )}
            </div>
          </div>

          {/* Official Field 1: Background */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-extrabold text-[#404E3B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669]"></span>
              Background
            </h2>
            <div className="bg-[#F5F7F4] p-5 rounded-xl border border-[#E6E6E6] text-sm text-[#404E3B] leading-relaxed font-sans">
              {problem.background}
            </div>
          </div>

          {/* Official Field 2: Description */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-extrabold text-[#404E3B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669]"></span>
              Description
            </h2>
            <div className="bg-white p-5 rounded-xl border border-[#E6E6E6] text-sm text-[#242E21] leading-relaxed font-sans whitespace-pre-wrap">
              {problem.description}
            </div>
          </div>

          {/* Official Field 3: Expected Solution */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-extrabold text-[#404E3B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669]"></span>
              Expected Solution
            </h2>
            <div className="bg-[#BAC8B1]/20 p-5 rounded-xl border border-[#BAC8B1]/40 text-sm text-[#404E3B] leading-relaxed font-sans whitespace-pre-wrap">
              {problem.expected_solution}
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: 4 Tabs Section (Added Value for 5-Hour Agentic Builds) */}
      <TabsSection problem={problem} />

      {/* Card 3: Google Form Submission Card for This Problem */}
      <SubmissionCard
        selectedProblemId={problem.id}
        selectedProblemTitle={problem.title}
      />
    </div>
  );
}
