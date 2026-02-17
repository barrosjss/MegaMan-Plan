import React from 'react';
import { Handle, Position } from 'reactflow';

const AINode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-800/90 border border-purple-500/50 backdrop-blur-sm w-72">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-purple-400 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">AI</span>
      </div>
      
      <div className="mt-2">
        <p className="text-xs text-gray-300">Model: <span className="text-purple-300">{data.model}</span></p>
        
        {data.accesses && data.accesses.length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-gray-400">Accesses:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {data.accesses.map((access, index) => (
                <span key={index} className="text-xs px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded">
                  {access}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {data.delivers && (
          <p className="mt-2 text-xs text-gray-300">
            <span className="text-gray-400">Delivers:</span> {data.delivers}
          </p>
        )}
      </div>

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-purple-400" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-purple-400" />
    </div>
  );
};

export default AINode;
