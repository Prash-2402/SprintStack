import React from 'react';

interface BadgeProps {
  type: 'theme' | 'category' | 'difficulty' | 'id';
  label: string;
  className?: string;
}

export default function StatusBadge({ type, label, className = '' }: BadgeProps) {
  if (type === 'id') {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded font-mono font-bold text-xs bg-[#404E3B] text-white tracking-wide shadow-xs ${className}`}>
        {label}
      </span>
    );
  }

  if (type === 'category') {
    const isHW = label.toLowerCase().includes('hardware');
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
          isHW
            ? 'bg-[#7B9669]/20 text-[#404E3B] border border-[#7B9669]/50'
            : 'bg-[#BAC8B1]/35 text-[#404E3B] border border-[#BAC8B1]'
        } ${className}`}
      >
        {label}
      </span>
    );
  }

  if (type === 'difficulty') {
    const isApplied = label.toLowerCase() === 'applied';
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
          isApplied
            ? 'bg-[#6C8480]/20 text-[#404E3B] border border-[#6C8480]/40'
            : 'bg-[#E6E6E6] text-[#404E3B] border border-[#BAC8B1]/60'
        } ${className}`}
      >
        {label}
      </span>
    );
  }

  // Theme badge
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#BAC8B1]/20 text-[#404E3B] border border-[#BAC8B1]/60 ${className}`}
    >
      {label}
    </span>
  );
}
