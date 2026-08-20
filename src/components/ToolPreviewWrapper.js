import React from 'react';
import './ToolPreviewWrapper.css';

export default function ToolPreviewWrapper({previewStyle, controls, children}) {
  return (
    <div className="tpw-root">
      <div className="tpw-preview" style={previewStyle}>
        {children}
      </div>
      {controls ? <div className="tpw-controls">{controls}</div> : null}
    </div>
  );
}
