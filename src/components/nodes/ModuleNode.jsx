import React from 'react';
import { Handle, Position } from 'reactflow';

const ModuleNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-800/90 border border-cyan-500/50 backdrop-blur-sm w-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-cyan-400 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full">MODULE</span>
      </div>
      
      <div className="mt-2 space-y-1">
        {data.fields?.map((field, index) => (
          <div key={index} className="flex justify-between text-xs font-mono text-gray-300">
            <span className="text-cyan-300">{field.name}</span>
            <span className="text-gray-400">{field.type}</span>
          </div>
        ))}
      </div>

      {data.description && (
        <p className="mt-2 text-xs text-gray-400 italic">{data.description}</p>
      )}

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-cyan-400" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-cyan-400" />
    </div>
  );
};

export default ModuleNode;
