import React from 'react';
import { Handle, Position } from 'reactflow';

const NoteNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-900/95 border border-gray-600/50 backdrop-blur-sm w-72">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-300 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded-full border border-gray-600/30">NOTA</span>
      </div>
      
      <div className="mt-2 space-y-1">
        {data.fields?.map((field, index) => (
          <div key={index} className="flex justify-between text-xs font-mono text-gray-400">
            <span className="text-gray-300">{field.name}</span>
            <span className="text-gray-500">{field.type}</span>
          </div>
        ))}
      </div>

      {data.items && (
        <ul className="mt-2 space-y-1">
          {data.items.map((item, index) => (
            <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {data.description && (
        <p className="mt-2 text-xs text-gray-500 italic">{data.description}</p>
      )}

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-gray-500" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-gray-500" />
    </div>
  );
};

export default NoteNode;
