import React from 'react';
import { Handle, Position } from 'reactflow';

const MockupNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-slate-900/95 border border-slate-500/50 backdrop-blur-sm w-80">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-slate-300 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-slate-700/50 text-slate-400 rounded-full border border-slate-500/30">MAQUETA</span>
      </div>
      
      {data.sections && (
        <div className="mt-2 space-y-2">
          {data.sections.map((section, index) => (
            <div key={index} className="border-l-2 border-slate-600/50 pl-2">
              <h4 className="text-xs font-semibold text-slate-300">{section.name}</h4>
              <p className="text-xs text-slate-500">{section.description}</p>
              {section.cta && (
                <span className="text-xs text-slate-400 italic">→ {section.cta}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {data.fields?.map((field, index) => (
        <div key={index} className="flex justify-between text-xs font-mono text-slate-400 mt-1">
          <span className="text-slate-300">{field.name}</span>
          <span className="text-slate-500">{field.type}</span>
        </div>
      ))}

      {data.description && (
        <p className="mt-2 text-xs text-slate-500 italic">{data.description}</p>
      )}

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-slate-400" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-slate-400" />
    </div>
  );
};

export default MockupNode;
