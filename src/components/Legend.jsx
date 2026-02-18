import React from 'react';

const Legend = () => {
  const legendItems = [
    { color: 'bg-cyan-500', label: 'MODULE' },
    { color: 'bg-purple-500', label: 'AI_CONNECTION' },
    { color: 'bg-green-500', label: 'EXTERNAL_SDK' },
    { color: 'bg-yellow-500', label: 'SERVICE' },
    { color: 'bg-orange-500', label: 'USER_ROLE' },
    { color: 'bg-gray-500', label: 'NOTE' },
    { color: 'bg-slate-400', label: 'MOCKUP' },
  ];

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-3 rounded-lg shadow-lg">
      <div className="space-y-2">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span className="text-xs font-mono text-gray-300">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
