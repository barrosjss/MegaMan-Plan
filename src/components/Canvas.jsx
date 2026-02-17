import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { nodes as initialNodes, edges as initialEdges } from '../data/projectData';
import ModuleNode from './nodes/ModuleNode';
import AINode from './nodes/AINode';
import SDKNode from './nodes/SDKNode';
import ServiceNode from './nodes/ServiceNode';
import UserRoleNode from './nodes/UserRoleNode';
import FlowNode from './nodes/FlowNode';

// Define node types
const nodeTypes = {
  MODULE: ModuleNode,
  AI_CONNECTION: AINode,
  EXTERNAL_SDK: SDKNode,
  SERVICE: ServiceNode,
  USER_ROLE: UserRoleNode,
  FLOW: FlowNode,
};

// Custom edge styles
const edgeOptions = {
  animated: true,
  style: {
    stroke: '#4b5563',
    strokeWidth: 2,
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#4b5563',
  },
};

// Custom connection line style
const connectionLineStyle = {
  stroke: '#4b5563',
  strokeWidth: 2,
};

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      // Only allow connections from source to target
      if (params.source && params.target) {
        setEdges((eds) =>
          addEdge(
            {
              ...params,
              type: 'smoothstep',
              ...edgeOptions,
              label: 'connected',
            },
            eds
          )
        );
      }
    },
    [setEdges]
  );

  React.useEffect(() => {
    const handleResize = () => {
      const canvasElement = document.getElementById('canvas-container');
      if (canvasElement) {
        canvasElement.style.width = `${window.innerWidth}px`;
        canvasElement.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="canvas-container"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={{ width: '100%', height: '100%' }}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={0.1}
        maxZoom={2}
        nodesDraggable
        nodesConnectable
        elementsSelectable
        panOnScroll
        zoomOnScroll
        zoomOnPinch
        panOnDrag
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#374151" gap={16} />
        <Controls className="left-4 bottom-4" />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.type) {
              case 'MODULE': return '#00e5ff';
              case 'AI_CONNECTION': return '#bf5af2';
              case 'EXTERNAL_SDK': return '#39ff14';
              case 'SERVICE': return '#ffd60a';
              case 'USER_ROLE': return '#ff6b35';
              case 'FLOW': return '#ffffff';
              default: return '#6b7280';
            }
          }}
          nodeStrokeWidth={3}
          zoomable
          pannable
        />
        <Panel position="top-right" className="text-xs text-gray-400">
          Scroll to zoom • Drag to pan • Click to select
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Canvas;
