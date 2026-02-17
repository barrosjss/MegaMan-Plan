import React, { useCallback, useState } from 'react';
import { ReactFlowProvider } from 'reactflow';
import { projectMeta } from './data/projectData';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import Legend from './components/Legend';
import './App.css';

function App() {
  const [projectName] = useState(projectMeta.name);

  const handleExport = useCallback(() => {
    // Export functionality will be implemented here
    console.log('Exporting project...');
  }, []);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden', 
      background: '#0a0a0a',
      margin: 0,
      padding: 0 
    }}>
      <div style={{ 
        flex: 1, 
        position: 'relative', 
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <ReactFlowProvider>
          <Canvas />
        </ReactFlowProvider>
        <div style={{ 
          position: 'absolute', 
          top: '8px', 
          left: '8px', 
          zIndex: 10 
        }}>
          <Legend />
        </div>
      </div>
    </div>
  );
}

export default App;
