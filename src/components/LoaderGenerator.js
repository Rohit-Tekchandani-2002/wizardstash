import React, {useState, useMemo} from 'react';
import Loader from './Loader';
import styles from './LoaderGenerator.module.css';

export default function LoaderGenerator() {
  const [variant, setVariant] = useState('spinner');
  const [size, setSize] = useState(44);
  const [color, setColor] = useState('var(--accent)');
  const [thickness, setThickness] = useState(4);
  const [speed, setSpeed] = useState(0.9);
  const [paused, setPaused] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const cssOutput = useMemo(() => {
    return `/* Loader CSS (variant: ${variant}) */\n.loader {\n  --loader-size: ${size}px;\n  --loader-color: ${color};\n  --loader-thickness: ${thickness}px;\n  --loader-speed: ${speed}s;\n}\n`;
  }, [variant, size, color, thickness, speed]);

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1800);
    } catch {
      setCopySuccess('Copy failed');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <div className={styles.generator}>
      <div className={styles.controls}>
        <div className={styles.header}>
          <h3 className={styles.title}>Loader generator</h3>
          <p className={styles.subtitle}>
            Configure a compact loading component and copy ready-to-use CSS variables.
          </p>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Variant</label>
          <select
            className={styles.select}
            value={variant}
            onChange={e => setVariant(e.target.value)}>
            <option value="spinner">Spinner</option>
            <option value="dots">Dots</option>
            <option value="bars">Bars</option>
          </select>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Size</label>
          <input
            className={styles.range}
            type="range"
            min="12"
            max="120"
            value={size}
            onChange={e => setSize(Number(e.target.value))}
          />
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Thickness</label>
          <input
            className={styles.range}
            type="range"
            min="1"
            max="14"
            value={thickness}
            onChange={e => setThickness(Number(e.target.value))}
          />
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Speed (s)</label>
          <input
            className={styles.range}
            type="range"
            min="0.2"
            max="3"
            step="0.1"
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
          />
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Color</label>
          <div className={styles.colorRow}>
            <input
              className={styles.colorPicker}
              type="color"
              value={isColorHex(color) ? color : '#2563eb'}
              onChange={e => setColor(e.target.value)}
            />
            <input
              className={styles.input}
              value={color}
              onChange={e => setColor(e.target.value)}
              aria-label="Custom color or CSS variable"
            />
          </div>
        </div>

        <div className={styles.inlineRow}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" checked={paused} onChange={e => setPaused(e.target.checked)} />
            <span>Pause animation</span>
          </label>
          <button onClick={copyCss} className={styles.copyBtn} aria-live="polite">
            {copySuccess || 'Copy CSS'}
          </button>
        </div>
      </div>

      <div className={styles.previewArea}>
        <div className={styles.previewCard}>
          <div className={styles.previewBox}>
            <Loader
              variant={variant}
              size={size}
              color={color}
              thickness={thickness}
              speed={speed}
              paused={paused}
            />
          </div>
        </div>

        <pre className={styles.codeBlock} tabIndex={0} aria-label="output">
          {cssOutput}
        </pre>
      </div>
    </div>
  );
}

function isColorHex(value) {
  if (typeof value !== 'string') return false;
  return /^#([0-9A-F]{3}){1,2}$/i.test(value.trim());
}
