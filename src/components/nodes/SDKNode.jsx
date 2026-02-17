import React from 'react';
import { Handle, Position } from 'reactflow';

const SDKNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-800/90 border border-green-500/50 backdrop-blur-sm w-72">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-green-400 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full">SDK</span>
      </div>
      
      {data.extractedData && data.extractedData.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-gray-400 mb-1">Extracted Data:</p>
          <div className="space-y-1">
            {data.extractedData.map((item, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-green-300">{item.field}</span>
                <span className="text-gray-400">{item.unit} • {item.frequency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.sendsTo && (
        <p className="mt-2 text-xs text-gray-300">
          <span className="text-gray-400">Sends to:</span> {data.sendsTo}
        </p>
      )}

      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-green-400" />
    </div>
  );
};

export default SDKNode;
