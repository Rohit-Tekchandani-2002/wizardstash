import React, {useMemo, useState} from 'react';
import styles from './ClipPathGenerator.module.css';

const PRESETS = {
  none: 'none',
  triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  trapezoid: 'polygon(10% 0%, 90% 0%, 75% 100%, 25% 100%)',
  parallelogram: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
  hexagon: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
  slanted: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
};

export default function ClipPathGenerator() {
  const [type, setType] = useState('preset');
  const [preset, setPreset] = useState('triangle');
  const [insetTop, setInsetTop] = useState(0);
  const [insetRight, setInsetRight] = useState(0);
  const [insetBottom, setInsetBottom] = useState(0);
  const [insetLeft, setInsetLeft] = useState(0);
  const [circleRadius, setCircleRadius] = useState(50);
  const [copySuccess, setCopySuccess] = useState('');

  const clipValue = useMemo(() => {
    if (type === 'preset') return PRESETS[preset] || PRESETS.none;
    if (type === 'inset') return `inset(${insetTop}% ${insetRight}% ${insetBottom}% ${insetLeft}%)`;
    if (type === 'circle') return `circle(${circleRadius}% at 50% 50%)`;
    if (type === 'ellipse')
      return `ellipse(${circleRadius}% ${Math.max(20, circleRadius / 2)}% at 50% 50%)`;
    return 'none';
  }, [type, preset, insetTop, insetRight, insetBottom, insetLeft, circleRadius]);

  const cssOutput = useMemo(
    () => `clip-path: ${clipValue};\n-webkit-clip-path: ${clipValue};`,
    [clipValue],
  );

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1600);
    } catch {
      setCopySuccess('Copy failed');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <div className={styles.generator}>
      <div className={styles.controls}>
        <div className={styles.header}>
          <h3 className={styles.title}>Clip-path generator</h3>
          <p className={styles.subtitle}>
            Create shapes and masks using CSS <strong>clip-path</strong>.
          </p>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Mode</label>
          <select className={styles.select} value={type} onChange={e => setType(e.target.value)}>
            <option value="preset">Presets</option>
            <option value="inset">Inset</option>
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
          </select>
        </div>

        {type === 'preset' && (
          <div className={styles.controlRow}>
            <label className={styles.label}>Preset</label>
            <select
              className={styles.select}
              value={preset}
              onChange={e => setPreset(e.target.value)}>
              {Object.keys(PRESETS).map(key => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
              ))}
            </select>
          </div>
        )}

        {type === 'inset' && (
          <div className={styles.controlRow}>
            <label className={styles.label}>Inset (top, right, bottom, left)</label>
            <div className={styles.rowGrid}>
              <input
                className={styles.range}
                type="range"
                min="0"
                max="50"
                value={insetTop}
                onChange={e => setInsetTop(Number(e.target.value))}
              />
              <input
                className={styles.range}
                type="range"
                min="0"
                max="50"
                value={insetRight}
                onChange={e => setInsetRight(Number(e.target.value))}
              />
              <input
                className={styles.range}
                type="range"
                min="0"
                max="50"
                value={insetBottom}
                onChange={e => setInsetBottom(Number(e.target.value))}
              />
              <input
                className={styles.range}
                type="range"
                min="0"
                max="50"
                value={insetLeft}
                onChange={e => setInsetLeft(Number(e.target.value))}
              />
            </div>
          </div>
        )}

        {(type === 'circle' || type === 'ellipse') && (
          <div className={styles.controlRow}>
            <label className={styles.label}>Radius: {circleRadius}%</label>
            <input
              className={styles.range}
              type="range"
              min="10"
              max="100"
              value={circleRadius}
              onChange={e => setCircleRadius(Number(e.target.value))}
            />
          </div>
        )}

        <button type="button" className={styles.copyBtn} onClick={copyCss}>
          {copySuccess || 'Copy CSS'}
        </button>
      </div>

      <div className={styles.previewArea}>
        <div className={styles.previewCard}>
          <div
            className={styles.previewBox}
            style={{clipPath: clipValue, WebkitClipPath: clipValue}}>
            <div className={styles.sampleCard}>
              <span>Sample</span>
            </div>
          </div>
        </div>

        <pre className={styles.codeBlock} tabIndex={0} aria-label="Generated CSS output">
          {cssOutput}
        </pre>
      </div>
    </div>
  );
}
