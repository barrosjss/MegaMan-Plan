import React, { useCallback, useState, useMemo } from 'react';
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
import { nodes as initialNodes, edges as initialEdges, projectMeta } from '../data/projectData';
import ModuleNode from './nodes/ModuleNode';
import AINode from './nodes/AINode';
import SDKNode from './nodes/SDKNode';
import ServiceNode from './nodes/ServiceNode';
import UserRoleNode from './nodes/UserRoleNode';
import FlowNode from './nodes/FlowNode';
import NoteNode from './nodes/NoteNode';
import MockupNode from './nodes/MockupNode';
import TopBar from './TopBar';

// Define node types
const nodeTypes = {
  MODULE: ModuleNode,
  AI_CONNECTION: AINode,
  EXTERNAL_SDK: SDKNode,
  SERVICE: ServiceNode,
  USER_ROLE: UserRoleNode,
  FLOW: FlowNode,
  NOTE: NoteNode,
  MOCKUP: MockupNode,
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

// Helper function to get all connected nodes recursively
const getConnectedNodes = (nodeId, edges, visited = new Set()) => {
  if (visited.has(nodeId)) return visited;
  
  visited.add(nodeId);
  
  // Find all edges connected to this node
  const connectedEdges = edges.filter(
    edge => edge.source === nodeId || edge.target === nodeId
  );
  
  // Recursively add connected nodes
  connectedEdges.forEach(edge => {
    if (edge.source === nodeId) {
      getConnectedNodes(edge.target, edges, visited);
    } else {
      getConnectedNodes(edge.source, edges, visited);
    }
  });
  
  return visited;
};

// Helper function to get connected nodes for multiple selected modules
const getConnectedNodesForMultiple = (moduleIds, edges) => {
  const allConnected = new Set();
  moduleIds.forEach(moduleId => {
    getConnectedNodes(moduleId, edges, allConnected);
  });
  return allConnected;
};

// LocalStorage key for saving node positions
const STORAGE_KEY = 'megaman-plan-layout';

// Load saved positions from localStorage or layout-config.json
const loadSavedPositions = () => {
  try {
    // First try localStorage (user's local changes take priority)
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const positions = JSON.parse(saved);
      return initialNodes.map(node => ({
        ...node,
        position: positions[node.id] || node.position
      }));
    }
    
    // If no localStorage, check if layout-config.json was imported
    // This will be handled by the import function
  } catch (error) {
    console.error('Error loading saved positions:', error);
  }
  return initialNodes;
};

// Import layout from file (call this when layout-config.json changes)
export const importLayoutFromFile = (layoutData) => {
  try {
    if (layoutData && layoutData.positions) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(layoutData.positions));
      window.location.reload(); // Reload to apply new positions
    }
  } catch (error) {
    console.error('Error importing layout:', error);
  }
};

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(loadSavedPositions());
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedModules, setSelectedModules] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

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

  // Define flow groups - which nodes belong to which flow
  // Key must match the node ID that represents the flow
  const flowGroups = useMemo(() => ({
    'learning-paths': ['tech-stack', 'style-guide', 'landing', 'learning-paths', 'category-software', 'category-ai', 'category-projects', 'lessons'],
    'profile': ['tech-stack', 'style-guide', 'landing', 'profile', 'experience', 'skills'],
    'projects': ['tech-stack', 'style-guide', 'landing', 'projects', 'project-detail']
  }), []);

  // Filter nodes - only show selected flows completely, hide others
  const filteredNodes = useMemo(() => {
    if (selectedModules.length === 0) return nodes;
    
    // Get all nodes that belong to selected flows
    const visibleNodeIds = new Set();
    selectedModules.forEach(moduleId => {
      const group = flowGroups[moduleId];
      if (group) {
        group.forEach(id => visibleNodeIds.add(id));
      }
    });
    
    // Return only visible nodes
    return nodes.filter(node => visibleNodeIds.has(node.id));
  }, [selectedModules, nodes, flowGroups]);

  const filteredEdges = useMemo(() => {
    if (selectedModules.length === 0) return edges;
    
    // Get all nodes that belong to selected flows
    const visibleNodeIds = new Set();
    selectedModules.forEach(moduleId => {
      const group = flowGroups[moduleId];
      if (group) {
        group.forEach(id => visibleNodeIds.add(id));
      }
    });
    
    // Return only edges where both source and target are visible
    return edges.filter(edge => 
      visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );
  }, [selectedModules, edges, flowGroups]);

  // Get module list for dropdown - Bitácora, Perfil and Proyectos flows
  const moduleList = useMemo(() => {
    const allowedModules = ['learning-paths', 'profile', 'projects'];
    return initialNodes
      .filter(node => allowedModules.includes(node.id))
      .map(node => ({ id: node.id, label: node.data.label }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const handleModuleToggle = (moduleId, isChecked) => {
    setSelectedModules(prev => {
      if (isChecked) {
        return [...prev, moduleId];
      } else {
        return prev.filter(id => id !== moduleId);
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedModules([]);
  };

  // Save current positions to localStorage
  const savePositions = useCallback(() => {
    try {
      const positions = {};
      nodes.forEach(node => {
        positions[node.id] = node.position;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
      setHasUnsavedChanges(false);
      
      // Also export to a file that can be committed
      const layoutData = {
        version: '1.0',
        savedAt: new Date().toISOString(),
        positions: positions
      };
      
      const blob = new Blob([JSON.stringify(layoutData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'layout-config.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert('Layout guardado! El archivo layout-config.json se ha descargado.\n\nPara persistir en el repo:\n1. Mueve el archivo a la carpeta del proyecto\n2. Commit el archivo layout-config.json');
    } catch (error) {
      console.error('Error saving positions:', error);
      alert('Error al guardar el layout');
    }
  }, [nodes]);

  // Export full project data
  const handleExport = () => {
    const data = {
      project: projectMeta,
      nodes: nodes,
      edges: edges,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `megaman-plan-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Track changes to show unsaved indicator
  React.useEffect(() => {
    const handleNodeChange = () => {
      setHasUnsavedChanges(true);
    };
    
    // This will trigger when nodes are moved
    window.addEventListener('mouseup', handleNodeChange);
    return () => window.removeEventListener('mouseup', handleNodeChange);
  }, []);

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
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TopBar 
        projectName={projectMeta.name}
        onExport={handleExport}
        onSaveLayout={savePositions}
        modules={moduleList}
        selectedModules={selectedModules}
        onModuleToggle={handleModuleToggle}
        onClearFilters={handleClearFilters}
        hasUnsavedChanges={hasUnsavedChanges}
      />
      <ReactFlow
        nodes={filteredNodes}
        edges={filteredEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        style={{ width: '100%', height: '100%' }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.2 }}
        minZoom={0.05}
        maxZoom={2}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        panOnScroll={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        panOnDrag={true}
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
              case 'NOTE': return '#9ca3af';
              case 'MOCKUP': return '#94a3b8';
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
