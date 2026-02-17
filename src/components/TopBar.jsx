import React from 'react';
import { Download } from 'lucide-react';

const TopBar = ({ projectName, onExport }) => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#0a0a0a',
      borderBottom: '1px solid #1f2937',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <h1 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Syne, sans-serif',
        margin: 0
      }}>
        {projectName}
      </h1>
      <button 
        onClick={onExport}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#0891b2',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          fontFamily: 'inherit',
          fontSize: '1rem',
          lineHeight: '1.5'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0e7490'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0891b2'}
      >
        <Download size={18} />
        <span>Exportar Plan</span>
      </button>
    </div>
  );
};

export default TopBar;
