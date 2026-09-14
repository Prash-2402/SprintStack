'use client';

import React, { useState, useMemo } from 'react';
import { ProblemStatement } from '@/lib/types';
import ProblemCard from '@/components/ProblemCard';
import FilterBar from '@/components/FilterBar';
import SubmissionCard from '@/components/SubmissionCard';
import { SearchX, Zap } from 'lucide-react';

interface BrowseClientProps {
  initialProblems: ProblemStatement[];
}

export default function BrowseClient({ initialProblems }: BrowseClientProps) {
  const [search, setSearch] = useState('');

  const filteredProblems = useMemo(() => {
    if (!search.trim()) return initialProblems;
    const query = search.toLowerCase().trim();
    return initialProblems.filter((p) => {
      return (
        p.id.toLowerCase().includes(query) ||
        p.title.toLowerCase().includes(query) ||
        p.organization.toLowerCase().includes(query) ||
        p.department.toLowerCase().includes(query) ||
        p.theme.toLowerCase().includes(query) ||
        p.background.toLowerCase().includes(query)
      );
    });
  }, [initialProblems, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-extrabold text-[#404E3B] tracking-tight">
                Problem Statements
              </h1>
              <span className="bg-[#BAC8B1]/35 text-[#404E3B] border border-[#BAC8B1] text-xs font-bold px-2.5 py-0.5 rounded-full">
                SprintStack
              </span>
            </div>
            <p className="text-sm text-[#6C8480]">
              Browse the official problem statements. Select a challenge to view details and submit your project links.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#BAC8B1]/20 text-[#404E3B] border border-[#BAC8B1]/60">
              <Zap className="w-3.5 h-3.5 text-[#7B9669]" />
              Instant Search
            </span>
          </div>
        </div>
      </div>

      {/* Search Bar Component (No Filters) */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        totalResults={filteredProblems.length}
      />

      {/* Grid of cards */}
      {filteredProblems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#E6E6E6] p-12 text-center max-w-lg mx-auto shadow-portal">
          <div className="w-12 h-12 rounded-full bg-[#F5F7F4] flex items-center justify-center text-[#6C8480] mx-auto mb-4">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#404E3B] mb-1">No Problem Statements Found</h3>
          <p className="text-xs text-[#6C8480] mb-6">
            We couldn't find any problem statements matching &quot;{search}&quot;.
          </p>
          <button
            onClick={() => setSearch('')}
            className="px-4 py-2 rounded-lg bg-[#404E3B] text-white text-xs font-semibold hover:bg-[#7B9669] transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Google Form Submission Section at the bottom */}
      <SubmissionCard />
    </div>
  );
}
