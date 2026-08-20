import React from 'react';
import GradientMini from './GradientMini';
import LoaderMini from './LoaderMini';
import './GenericToolPreview.css';
import previewConfig from '../configs/previewConfig.json';

export default function GenericToolPreview({tool}) {
  const cfg = previewConfig[tool.slug] || previewConfig.default;

  if (cfg.type === 'gradient') return <GradientMini />;
  if (cfg.type === 'loader') return <LoaderMini />;

  if (cfg.type === 'layout') {
    return (
      <div className="gtp-layout">
        <div className="gtp-box gtp-box-a">A</div>
        <div className="gtp-box gtp-box-b">B</div>
      </div>
    );
  }

  if (cfg.type === 'shadow') {
    return <div className="gtp-shadow-sample">Shadow</div>;
  }

  if (cfg.type === 'spacing') {
    return <div className="gtp-spacing-sample">Spacing</div>;
  }

  // default accent preview uses the existing class on card via accentPreview
  return <div className="gtp-accent" />;
}
