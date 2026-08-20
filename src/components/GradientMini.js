import React, {useMemo, useState} from 'react';
import './GradientMini.css';
import {DEFAULTS} from '../utils/constants';
import ToolPreviewWrapper from './ToolPreviewWrapper';

export default function GradientMini() {
  const [start, setStart] = useState(DEFAULTS.GRADIENT_START);
  const [end, setEnd] = useState(DEFAULTS.GRADIENT_END);
  const [angle, setAngle] = useState(DEFAULTS.GRADIENT_ANGLE);

  const gradient = useMemo(
    () => `linear-gradient(${angle}deg, ${start}, ${end})`,
    [angle, start, end],
  );

  const controls = (
    <div className="gm-controls">
      <input
        className="gm-color"
        type="color"
        value={start}
        onChange={e => setStart(e.target.value)}
      />
      <input className="gm-color" type="color" value={end} onChange={e => setEnd(e.target.value)} />
      <input
        className="gm-range"
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={e => setAngle(Number(e.target.value))}
      />
    </div>
  );

  return <ToolPreviewWrapper previewStyle={{background: gradient}} controls={controls} />;
}
