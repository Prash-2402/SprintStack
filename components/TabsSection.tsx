'use client';

import React, { useState } from 'react';
import { Layers, Database, PackageCheck, ShieldAlert, Sparkles, CheckCircle, Info } from 'lucide-react';
import { ProblemStatement } from '@/lib/types';

interface TabsSectionProps {
  problem: ProblemStatement;
}

type TabKey = 'build_plan' | 'inputs_outputs' | 'deliverables' | 'guardrails';

export default function TabsSection({ problem }: TabsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('build_plan');

  const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: 'build_plan', label: 'Implementation Roadmap', icon: Layers },
    { key: 'inputs_outputs', label: 'Inputs / Outputs', icon: Database },
    { key: 'deliverables', label: 'Submission Deliverables', icon: PackageCheck },
    { key: 'guardrails', label: 'Hackathon Guidelines', icon: ShieldAlert },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'build_plan':
        return (
          <div>
            {problem.build_plan ? (
              <div className="prose prose-slate max-w-none whitespace-pre-wrap font-sans text-sm text-[#242E21]">
                {problem.build_plan}
              </div>
            ) : (
              <div className="bg-[#BAC8B1]/15 rounded-xl p-6 border border-[#BAC8B1]/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B] shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base font-bold text-[#404E3B]">Recommended Implementation Roadmap</h4>
                      <span className="text-[11px] font-semibold bg-[#7B9669]/20 text-[#404E3B] px-2 py-0.5 rounded-full border border-[#7B9669]/40">
                        Hackathon Guide
                      </span>
                    </div>
                    <p className="text-sm text-[#6C8480] mb-4">
                      Follow this modular build structure to ensure your solution is fully functional, deployed, and presentation-ready.
                    </p>

                    {/* Standard Hackathon Milestone Template */}
                    <div className="bg-white rounded-lg p-4 border border-[#BAC8B1]/40 shadow-xs space-y-2.5 text-xs text-[#404E3B]">
                      <div className="font-semibold text-[#404E3B] flex items-center gap-1.5 text-sm">
                        <Sparkles className="w-4 h-4 text-[#7B9669]" />
                        Key Development Phases:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
                        <div className="bg-[#F5F7F4] p-2.5 rounded border border-[#E6E6E6]">
                          <strong className="text-[#404E3B] block mb-1">1. Data & Schema</strong>
                          <span className="text-[#6C8480]">Synthesize test inputs and define data structures.</span>
                        </div>
                        <div className="bg-[#F5F7F4] p-2.5 rounded border border-[#E6E6E6]">
                          <strong className="text-[#404E3B] block mb-1">2. Core Engine</strong>
                          <span className="text-[#6C8480]">Implement business rules, algorithms, or API logic.</span>
                        </div>
                        <div className="bg-[#F5F7F4] p-2.5 rounded border border-[#E6E6E6]">
                          <strong className="text-[#404E3B] block mb-1">3. User Interface</strong>
                          <span className="text-[#6C8480]">Build responsive UI with real-time feedback & actions.</span>
                        </div>
                        <div className="bg-[#F5F7F4] p-2.5 rounded border border-[#E6E6E6]">
                          <strong className="text-[#404E3B] block mb-1">4. Edge Cases</strong>
                          <span className="text-[#6C8480]">Test against boundary conditions and sample variations.</span>
                        </div>
                        <div className="bg-[#F5F7F4] p-2.5 rounded border border-[#E6E6E6]">
                          <strong className="text-[#404E3B] block mb-1">5. Deploy & Submit</strong>
                          <span className="text-[#6C8480]">Deploy to live URL and submit GitHub repository.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'inputs_outputs':
        return (
          <div>
            {problem.inputs || problem.outputs ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F5F7F4] p-5 rounded-xl border border-[#E6E6E6]">
                  <h4 className="font-bold text-[#404E3B] mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#7B9669]" />
                    Expected Inputs
                  </h4>
                  <p className="text-sm text-[#404E3B] whitespace-pre-wrap">{problem.inputs || 'Not specified'}</p>
                </div>
                <div className="bg-[#F5F7F4] p-5 rounded-xl border border-[#E6E6E6]">
                  <h4 className="font-bold text-[#404E3B] mb-2 flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-[#7B9669]" />
                    Expected Outputs
                  </h4>
                  <p className="text-sm text-[#404E3B] whitespace-pre-wrap">{problem.outputs || 'Not specified'}</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#F5F7F4] rounded-xl p-6 border border-[#E6E6E6] text-center py-10">
                <Database className="w-8 h-8 text-[#6C8480] mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-[#404E3B] mb-1">Inputs & Outputs Specification</h4>
                <p className="text-xs text-[#6C8480] max-w-md mx-auto">
                  Provide sample inputs (JSON payloads, CSV test files, user parameters) and verify your system generates clear, actionable outputs.
                </p>
              </div>
            )}
          </div>
        );

      case 'deliverables':
        return (
          <div>
            <div className="bg-[#F5F7F4] rounded-xl p-6 border border-[#E6E6E6]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#BAC8B1]/40 flex items-center justify-center text-[#404E3B] shrink-0">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-[#404E3B]">Mandatory Submission Requirements</h4>
                    <span className="text-[11px] font-semibold bg-[#7B9669]/20 text-[#404E3B] px-2 py-0.5 rounded-full border border-[#7B9669]/40">
                      Top 5 Selection
                    </span>
                  </div>
                  <p className="text-sm text-[#6C8480] mb-4">
                    All teams must submit the following two links via the Google Form. Judges evaluate submissions to shortlist the <strong>Top 5 teams</strong> who will present on stage:
                  </p>
                  <ul className="space-y-3 text-xs text-[#404E3B]">
                    <li className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-[#E6E6E6]">
                      <CheckCircle className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                      <div>
                        <strong>1. GitHub Repository Link:</strong> Must be public, contains all source code, commit history, and a README with clear setup steps.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-[#E6E6E6]">
                      <CheckCircle className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                      <div>
                        <strong>2. Live Deployed Link:</strong> A functional web URL (e.g. Vercel, Netlify, Render, AWS) where judges can test the working software.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 bg-[#BAC8B1]/20 p-3 rounded-lg border border-[#BAC8B1]/40">
                      <CheckCircle className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                      <div>
                        <strong>Final Round:</strong> Only the <strong>Top 5 shortlisted teams</strong> will be invited to give live presentations to the judging panel.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'guardrails':
        return (
          <div>
            <div className="bg-[#F5F7F4] rounded-xl p-6 border border-[#E6E6E6]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#6C8480]/20 flex items-center justify-center text-[#404E3B] shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-[#404E3B]">Hackathon Ground Rules & Guardrails</h4>
                    <span className="text-[11px] font-semibold bg-[#6C8480]/20 text-[#404E3B] px-2 py-0.5 rounded-full border border-[#6C8480]/40">
                      Evaluation Policy
                    </span>
                  </div>
                  <p className="text-sm text-[#6C8480] mb-4">
                    Key rules all participating teams must adhere to:
                  </p>
                  <ul className="space-y-2 text-xs text-[#404E3B]">
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#6C8480] shrink-0" />
                      <span>Software-only: All problem statements must be implemented as functional software applications or web prototypes.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#6C8480] shrink-0" />
                      <span>Zero mock screenshots: Deployed apps must show live interactive state transitions, not static mockup images.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#6C8480] shrink-0" />
                      <span>Explainable logic: Transparent rules, algorithms, and clean data processing are preferred over ungrounded black boxes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E6E6E6] shadow-portal overflow-hidden mt-8">
      {/* Tabs Header */}
      <div className="border-b border-[#E6E6E6] bg-[#F5F7F4] px-4 sm:px-6 pt-3 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                isActive
                  ? 'border-[#7B9669] text-[#404E3B] bg-white rounded-t-lg shadow-xs'
                  : 'border-transparent text-[#6C8480] hover:text-[#404E3B] hover:border-[#BAC8B1]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#7B9669]' : 'text-[#6C8480]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-6 sm:p-8">
        {renderContent()}
      </div>
    </div>
  );
}
