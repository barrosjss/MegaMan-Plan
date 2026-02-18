import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Canvas from './components/Canvas';
import Legend from './components/Legend';
import './App.css';

function App() {
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
          top: '80px', 
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
