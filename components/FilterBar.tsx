'use client';

import React from 'react';
import { Search, X, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  totalResults: number;
}

export default function FilterBar({
  search,
  setSearch,
  totalResults,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl border border-[#E6E6E6] shadow-portal p-4 sm:p-5 mb-8">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#6C8480] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search problem statements by ID (e.g. PS01), title, ministry, keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E6E6E6] text-sm text-[#404E3B] placeholder:text-[#6C8480]/70 focus:outline-none focus:ring-2 focus:ring-[#7B9669] focus:border-transparent transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C8480] hover:text-[#404E3B] p-1"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-[#6C8480]">
          <span className="font-semibold text-[#404E3B] bg-[#F5F7F4] px-3 py-2 rounded-md border border-[#E6E6E6]">
            Showing <strong className="text-[#7B9669] font-bold">{totalResults}</strong> Statements
          </span>
          {search && (
            <button
              onClick={() => setSearch('')}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[#404E3B] bg-[#BAC8B1]/40 hover:bg-[#BAC8B1]/70 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
