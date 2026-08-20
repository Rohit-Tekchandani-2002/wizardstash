import React, {useState} from 'react';
import Loader from './Loader';
import './LoaderMini.css';
import {DEFAULTS} from '../utils/constants';
import ToolPreviewWrapper from './ToolPreviewWrapper';

export default function LoaderMini() {
  const [variant, setVariant] = useState('spinner');
  const [size] = useState(DEFAULTS.LOADER_SIZE);
  const [color, setColor] = useState(DEFAULTS.LOADER_COLOR);

  const controls = (
    <>
      <select value={variant} onChange={e => setVariant(e.target.value)}>
        <option value="spinner">Spinner</option>
        <option value="dots">Dots</option>
        <option value="bars">Bars</option>
      </select>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
    </>
  );

  return (
    <ToolPreviewWrapper
      previewStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      controls={controls}>
      <Loader variant={variant} size={size} color={color} />
    </ToolPreviewWrapper>
  );
}
