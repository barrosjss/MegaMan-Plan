import React from 'react';
import { Handle, Position } from 'reactflow';

const UserRoleNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-gray-800/90 border border-orange-500/50 backdrop-blur-sm w-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-orange-400 font-semibold text-sm">{data.label}</h3>
        <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded-full">ROLE</span>
      </div>
      
      {data.permissions && data.permissions.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-gray-400 mb-1">Permissions:</p>
          <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
            {data.permissions.map((permission, index) => (
              <li key={index} className="ml-2">{permission}</li>
            ))}
          </ul>
        </div>
      )}

      {data.accessTo && data.accessTo.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-gray-400">Access to:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {data.accessTo.map((access, index) => (
              <span key={index} className="text-xs px-2 py-0.5 bg-orange-500/10 text-orange-300 rounded">
                {access}
              </span>
            ))}
          </div>
        </div>
      )}

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-orange-400" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-orange-400" />
    </div>
  );
};

export default UserRoleNode;
