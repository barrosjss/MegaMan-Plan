import React from 'react';
import { Handle, Position } from 'reactflow';

const FlowNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-800/90 border border-white/30 backdrop-blur-sm w-56">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-white/10 text-white rounded-full">FLOW</span>
      </div>
      
      {data.description && (
        <p className="mt-1 text-xs text-gray-300">{data.description}</p>
      )}

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-white" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-white" />
    </div>
  );
};

export default FlowNode;
