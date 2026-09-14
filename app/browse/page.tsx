import React, { Suspense } from 'react';
import { getProblemStatements } from '@/lib/data';
import BrowseClient from '@/components/BrowseClient';

export default function BrowsePage() {
  const { data: problems } = getProblemStatements();

  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="w-8 h-8 border-4 border-[#7B9669] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-medium text-[#6C8480]">Loading problem statements...</p>
        </div>
      }
    >
      <BrowseClient initialProblems={problems} />
    </Suspense>
  );
}
