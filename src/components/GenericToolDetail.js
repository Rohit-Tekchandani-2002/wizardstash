import React, {useState} from 'react';
import GradientGenerator from './GradientGenerator';
import LoaderGenerator from './LoaderGenerator';
import previewConfig from '../configs/previewConfig.json';
import './GenericToolDetail.css';

export default function GenericToolDetail({tool}) {
  const cfg = previewConfig[tool.slug] || previewConfig.default;

  if (tool.slug === 'gradient-generator') return <GradientGenerator />;
  if (tool.slug === 'loader-generator') return <LoaderGenerator />;

  // For other tools render a simple interactive detail area
  return (
    <div className="gtd-root">
      <h2>{tool.name}</h2>
      <p className="gtd-desc">{tool.description}</p>
      <div className="gtd-grid">
        <div className="gtd-preview">
          <div className="gtd-sample">Preview</div>
        </div>
        <div className="gtd-controls">
          <p>
            Controls for <strong>{cfg.type}</strong> (basic demo)
          </p>
          <div className="gtd-control-row">
            <label>Sample control</label>
            <input type="range" min="0" max="100" />
          </div>
        </div>
      </div>
    </div>
  );
}
