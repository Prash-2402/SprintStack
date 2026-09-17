'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProblemStatement } from '@/lib/types';
import ProblemCard from '@/components/ProblemCard';
import FilterBar from '@/components/FilterBar';
import SubmissionCard from '@/components/SubmissionCard';
import { SearchX, Zap, GraduationCap, Rocket, Layers } from 'lucide-react';

interface BrowseClientProps {
  initialProblems: ProblemStatement[];
}

export default function BrowseClient({ initialProblems }: BrowseClientProps) {
  const searchParams = useSearchParams();
  const semQuery = searchParams.get('sem');
  const defaultSem = semQuery === '5' || semQuery === '5th' ? '5th' : (semQuery === 'all' ? 'all' : '3rd');

  const [selectedSemester, setSelectedSemester] = useState<'3rd' | '5th' | 'all'>(defaultSem);
  const [search, setSearch] = useState('');

  const filteredProblems = useMemo(() => {
    let list = initialProblems;

    // Filter by Semester track
    if (selectedSemester === '3rd') {
      list = list.filter((p) => p.semester === '3rd Sem');
    } else if (selectedSemester === '5th') {
      list = list.filter((p) => p.semester === '5th Sem');
    }

    // Filter by Search query
    if (search.trim()) {
      const query = search.toLowerCase().trim();
      list = list.filter((p) => {
        return (
          p.id.toLowerCase().includes(query) ||
          (p.displayId && p.displayId.toLowerCase().includes(query)) ||
          p.title.toLowerCase().includes(query) ||
          p.organization.toLowerCase().includes(query) ||
          p.department.toLowerCase().includes(query) ||
          p.theme.toLowerCase().includes(query) ||
          p.background.toLowerCase().includes(query)
        );
      });
    }

    return list;
  }, [initialProblems, selectedSemester, search]);

  const sem3Count = useMemo(() => initialProblems.filter((p) => p.semester === '3rd Sem').length, [initialProblems]);
  const sem5Count = useMemo(() => initialProblems.filter((p) => p.semester === '5th Sem').length, [initialProblems]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
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
              Browse challenges partitioned for <strong>3rd Semester (Day 1)</strong> and <strong>5th Semester (Day 2)</strong>. Select your challenge to view full specifications.
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

      {/* Semester / Track Switcher */}
      <div className="flex flex-wrap items-center gap-3 bg-[#F5F7F4] p-2 rounded-2xl border border-[#E6E6E6]">
        <button
          onClick={() => setSelectedSemester('3rd')}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            selectedSemester === '3rd'
              ? 'bg-[#404E3B] text-white shadow-md shadow-[#404E3B]/20'
              : 'text-[#404E3B] hover:bg-white/80'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-[#BAC8B1]" />
          <span>3rd Sem (Day 1)</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              selectedSemester === '3rd'
                ? 'bg-white/20 text-white'
                : 'bg-[#BAC8B1]/40 text-[#404E3B]'
            }`}
          >
            {sem3Count} PS (1–20)
          </span>
        </button>

        <button
          onClick={() => setSelectedSemester('5th')}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            selectedSemester === '5th'
              ? 'bg-[#404E3B] text-white shadow-md shadow-[#404E3B]/20'
              : 'text-[#404E3B] hover:bg-white/80'
          }`}
        >
          <Rocket className="w-4 h-4 text-[#BAC8B1]" />
          <span>5th Sem (Day 2)</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              selectedSemester === '5th'
                ? 'bg-white/20 text-white'
                : 'bg-[#BAC8B1]/40 text-[#404E3B]'
            }`}
          >
            {sem5Count} PS (1–20)
          </span>
        </button>

        <button
          onClick={() => setSelectedSemester('all')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ml-auto ${
            selectedSemester === 'all'
              ? 'bg-[#7B9669] text-white shadow-sm'
              : 'text-[#6C8480] hover:text-[#404E3B]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All ({initialProblems.length})</span>
        </button>
      </div>

      {/* Track Description Banner */}
      <div className="bg-[#BAC8B1]/15 border border-[#BAC8B1]/40 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="text-[#404E3B] font-medium">
          {selectedSemester === '3rd' && (
            <span>Showing <strong>3rd Semester (Day 1)</strong> problem statements — PS01 to PS20.</span>
          )}
          {selectedSemester === '5th' && (
            <span>Showing <strong>5th Semester (Day 2)</strong> problem statements — PS01 to PS20.</span>
          )}
          {selectedSemester === 'all' && (
            <span>Showing all <strong>40 Problem Statements</strong> across 3rd & 5th Semesters.</span>
          )}
        </div>
        <div className="text-[#6C8480]">
          Total Filtered Results: <strong className="text-[#404E3B]">{filteredProblems.length}</strong>
        </div>
      </div>

      {/* Search Bar Component */}
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
