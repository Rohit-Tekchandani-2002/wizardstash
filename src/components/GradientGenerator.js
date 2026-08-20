import React, {useMemo, useState} from 'react';
import styles from './GradientGenerator.module.css';

const DEFAULT_START = '#2563eb';
const DEFAULT_END = '#7c3aed';

export default function GradientGenerator() {
  const [gradientType, setGradientType] = useState('linear');
  const [startColor, setStartColor] = useState(DEFAULT_START);
  const [endColor, setEndColor] = useState(DEFAULT_END);
  const [angle, setAngle] = useState(135);
  const [copySuccess, setCopySuccess] = useState('');

  const gradientValue = useMemo(() => {
    if (gradientType === 'radial') {
      return `radial-gradient(circle at center, ${startColor} 0%, ${endColor} 100%)`;
    }

    return `linear-gradient(${angle}deg, ${startColor} 0%, ${endColor} 100%)`;
  }, [angle, endColor, gradientType, startColor]);

  const cssOutput = useMemo(
    () => `background: ${gradientValue};\nbackground-image: ${gradientValue};`,
    [gradientValue],
  );

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
          <h3 className={styles.title}>Gradient generator</h3>
          <p className={styles.subtitle}>
            Build a polished background in real time using pure CSS values.
          </p>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.label}>Type</label>
          <select
            className={styles.select}
            value={gradientType}
            onChange={event => setGradientType(event.target.value)}>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>

        {gradientType === 'linear' && (
          <div className={styles.controlRow}>
            <label className={styles.label}>Angle: {angle}°</label>
            <input
              className={styles.range}
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={event => setAngle(Number(event.target.value))}
            />
          </div>
        )}

        <div className={styles.controlRow}>
          <label className={styles.label}>Colors</label>
          <div className={styles.colorRow}>
            <input
              className={styles.colorPicker}
              type="color"
              value={startColor}
              onChange={event => setStartColor(event.target.value)}
              aria-label="First gradient color"
            />
            <input
              className={styles.input}
              value={startColor}
              onChange={event => setStartColor(event.target.value.trim() || '#000000')}
              aria-label="First gradient color value"
            />
          </div>
          <div className={styles.colorRow}>
            <input
              className={styles.colorPicker}
              type="color"
              value={endColor}
              onChange={event => setEndColor(event.target.value)}
              aria-label="Second gradient color"
            />
            <input
              className={styles.input}
              value={endColor}
              onChange={event => setEndColor(event.target.value.trim() || '#000000')}
              aria-label="Second gradient color value"
            />
          </div>
        </div>

        <button type="button" className={styles.copyBtn} onClick={copyCss}>
          {copySuccess || 'Copy CSS'}
        </button>
      </div>

      <div className={styles.previewArea}>
        <div className={styles.previewCard}>
          <div className={styles.previewBox} style={{background: gradientValue}}>
            <div className={styles.sampleCard}>
              <span>UI Sample</span>
            </div>
          </div>
        </div>

        <pre className={styles.codeBlock} tabIndex={0} aria-label="Generated output">
          {cssOutput}
        </pre>
      </div>
    </div>
  );
}
