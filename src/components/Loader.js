import React from 'react';
import styles from './Loader.module.css';

export default function Loader({
  variant = 'spinner',
  size = 44,
  color = 'var(--accent)',
  thickness = 4,
  speed = 0.9,
  paused = false,
  'aria-label': ariaLabel = 'Loading',
}) {
  const style = {
    ['--loader-size']: `${typeof size === 'number' ? size + 'px' : size}`,
    ['--loader-color']: color,
    ['--loader-thickness']: `${thickness}px`,
    ['--loader-speed']: `${speed}s`,
    ['--loader-play']: paused ? 'paused' : 'running',
  };

  if (variant === 'dots') {
    return (
      <div className={styles.dots} style={style} role="status" aria-label={ariaLabel}>
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (variant === 'bars') {
    return (
      <div className={styles.bars} style={style} role="status" aria-label={ariaLabel}>
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className={styles.spinner} style={style} role="status" aria-label={ariaLabel}>
      <div />
    </div>
  );
}
