import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight, Code } from 'lucide-react';
import { ProblemStatement } from '@/lib/types';
import StatusBadge from './StatusBadge';

interface ProblemCardProps {
  problem: ProblemStatement;
}

export default function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-[#E6E6E6] shadow-portal hover:shadow-portal-hover hover:border-[#7B9669]/70 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div className="p-5 sm:p-6 flex-1">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <StatusBadge type="id" label={problem.displayId || problem.id} />
            <StatusBadge type="category" label="Software" />
          </div>
          {problem.semester && (
            <span className="text-[11px] font-bold text-[#404E3B] bg-[#BAC8B1]/30 px-2.5 py-0.5 rounded-full border border-[#BAC8B1]">
              {problem.semester} {problem.day ? `• ${problem.day}` : ''}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#404E3B] group-hover:text-[#7B9669] transition-colors line-clamp-2 leading-snug mb-2">
          <Link href={`/problem/${problem.id}`}>
            {problem.title}
          </Link>
        </h3>

        {/* Theme */}
        <div className="mb-3">
          <StatusBadge type="theme" label={problem.theme} />
        </div>

        {/* Organization / Department */}
        <div className="flex items-start gap-2 text-xs text-[#6C8480] mb-4 bg-[#F5F7F4] p-2.5 rounded-lg border border-[#E6E6E6]">
          <Building2 className="w-3.5 h-3.5 text-[#7B9669] mt-0.5 shrink-0" />
          <div className="line-clamp-2">
            <span className="font-semibold text-[#404E3B]">{problem.organization}</span>
            {problem.department && (
              <span className="text-[#6C8480]"> · {problem.department}</span>
            )}
          </div>
        </div>

        {/* Background summary */}
        <p className="text-xs text-[#404E3B]/80 line-clamp-3 leading-relaxed">
          {problem.background}
        </p>
      </div>

      {/* Card Action footer */}
      <div className="px-5 sm:px-6 py-3.5 bg-[#F5F7F4] border-t border-[#E6E6E6] flex items-center justify-between">
        <span className="text-[11px] font-medium text-[#6C8480] flex items-center gap-1">
          <Code className="w-3.5 h-3.5 text-[#7B9669]" />
          Software Solution
        </span>
        <Link
          href={`/problem/${problem.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7B9669] group-hover:text-[#404E3B] group-hover:translate-x-0.5 transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
