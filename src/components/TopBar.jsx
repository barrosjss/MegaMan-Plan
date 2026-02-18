import React, { useState } from 'react';
import { Download, Filter, X, ChevronDown, ChevronUp, Save, Circle } from 'lucide-react';

const TopBar = ({ projectName, onExport, onSaveLayout, modules, selectedModules, onModuleToggle, onClearFilters, hasUnsavedChanges }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const selectedCount = selectedModules.length;
  
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
      zIndex: 10,
      gap: '1rem'
    }}>
      <h1 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Syne, sans-serif',
        margin: 0,
        whiteSpace: 'nowrap'
      }}>
        {projectName}
      </h1>
      
      {/* Filter Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        flex: 1,
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#9ca3af',
          fontSize: '0.875rem'
        }}>
          <Filter size={16} />
          <span>Filtrar módulos:</span>
        </div>
        
        {/* Custom Dropdown with Checkboxes */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#1f2937',
              color: 'white',
              border: '1px solid #374151',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              minWidth: '220px',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            <span>
              {selectedCount === 0 
                ? 'Todos los módulos' 
                : `${selectedCount} módulo${selectedCount > 1 ? 's' : ''} seleccionado${selectedCount > 1 ? 's' : ''}`
              }
            </span>
            {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '0.5rem',
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.375rem',
              maxHeight: '300px',
              overflowY: 'auto',
              zIndex: 100,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Select All / Clear All */}
              <div style={{
                padding: '0.5rem 0.75rem',
                borderBottom: '1px solid #374151',
                display: 'flex',
                gap: '0.5rem'
              }}>
                <button
                  onClick={() => {
                    modules.forEach(m => onModuleToggle(m.id, true));
                  }}
                  style={{
                    fontSize: '0.75rem',
                    color: '#06b6d4',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem 0.5rem'
                  }}
                >
                  Seleccionar todos
                </button>
                <button
                  onClick={() => onClearFilters()}
                  style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem 0.5rem'
                  }}
                >
                  Limpiar
                </button>
              </div>
              
              {/* Checkbox List */}
              {modules.map((module) => (
                <label
                  key={module.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s',
                    fontSize: '0.875rem',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <input
                    type="checkbox"
                    checked={selectedModules.includes(module.id)}
                    onChange={(e) => onModuleToggle(module.id, e.target.checked)}
                    style={{
                      width: '16px',
                      height: '16px',
                      cursor: 'pointer',
                      accentColor: '#06b6d4'
                    }}
                  />
                  <span style={{ flex: 1 }}>{module.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        
        {selectedCount > 0 && (
          <button
            onClick={onClearFilters}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.5rem',
              backgroundColor: 'transparent',
              color: '#9ca3af',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
            title="Limpiar filtros"
          >
            <X size={16} />
          </button>
        )}
        
        {selectedCount > 0 && (
          <span style={{
            fontSize: '0.75rem',
            color: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid rgba(6, 182, 212, 0.3)'
          }}>
            Filtrando conexiones
          </span>
        )}
      </div>
      
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {/* Unsaved Changes Indicator */}
        {hasUnsavedChanges && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '0.375rem',
              color: '#f59e0b',
              fontSize: '0.75rem'
            }}
            title="Hay cambios sin guardar en el layout"
          >
            <Circle size={8} fill="#f59e0b" />
            <span>Cambios sin guardar</span>
          </div>
        )}
        
        {/* Save Layout Button */}
        <button 
          onClick={onSaveLayout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: hasUnsavedChanges ? '#f59e0b' : '#374151',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            fontFamily: 'inherit',
            fontSize: '1rem',
            lineHeight: '1.5',
            whiteSpace: 'nowrap'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = hasUnsavedChanges ? '#d97706' : '#4b5563'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = hasUnsavedChanges ? '#f59e0b' : '#374151'}
          title="Guardar layout actual (localStorage + archivo)"
        >
          <Save size={18} />
          <span>Guardar Layout</span>
        </button>
        
        {/* Export Button */}
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
            lineHeight: '1.5',
            whiteSpace: 'nowrap'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0e7490'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0891b2'}
        >
          <Download size={18} />
          <span>Exportar Plan</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
