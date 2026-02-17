import React from 'react';
import { Handle, Position } from 'reactflow';

const ServiceNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-800/90 border border-yellow-500/50 backdrop-blur-sm w-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-yellow-400 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full">SERVICE</span>
      </div>
      
      {data.description && (
        <p className="text-xs text-gray-300 mt-1">{data.description}</p>
      )}

      {data.connectedTo && (
        <p className="mt-2 text-xs text-gray-400">
          <span className="text-gray-300">Connected to:</span> {data.connectedTo}
        </p>
      )}

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-yellow-400" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-yellow-400" />
    </div>
  );
};

export default ServiceNode;
