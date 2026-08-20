import React from 'react';
import {Link} from 'react-router-dom';
import {tools} from '../data/tools';
import styles from './HomePage.module.css';

export default function HomePage() {
  const featuredTools = tools.slice(0, 3);
  const totalTools = tools.length;
  const totalCategories = new Set(tools.map(tool => tool.category)).size;

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Generators</span>
          <h1>Build cleaner interfaces with better tools.</h1>
          <p>
            Discover ready-to-use property references, layout helpers, and generators for modern
            front-end work.
          </p>

          <div className={styles.actions}>
            <Link to="/tools" className={styles.primaryButton}>
              Explore tools
            </Link>
            <Link to="/categories" className={styles.secondaryButton}>
              Browse categories
            </Link>
          </div>

          <ul className={styles.stats}>
            <li>
              <strong>{totalTools}</strong>
              <span>tools</span>
            </li>
            <li>
              <strong>{totalCategories}</strong>
              <span>categories</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>ready for UI</span>
            </li>
          </ul>
        </div>

        <div className={styles.panel} aria-label="Tool preview panel">
          <div className={styles.panelTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.amber}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>

          <div className={styles.surface}>
            <div className={styles.stackRow}>
              <div className={`${styles.miniCard} ${styles.gradientCard}`} />
              <div className={`${styles.miniCard} ${styles.shadowCard}`} />
            </div>
            <div className={styles.barRow}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.loaderPreview} />
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.sectionHead}>
          <div>
            <span className={`${styles.eyebrow} ${styles.light}`}>Popular generators</span>
            <h2>Most-used utilities</h2>
          </div>
          <Link to="/tools" className={styles.secondaryButton}>
            View all
          </Link>
        </div>

        <div className={styles.toolGrid}>
          {featuredTools.map(tool => (
            <div key={tool.id} className={styles.toolCard}>
              <div className={`${styles.toolPreview} ${styles[`${tool.accent}Preview`]}`} />
              <div className={styles.cardBody}>
                <span className={styles.tag}>{tool.category}</span>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.sectionHead}>
          <div>
            <span className={`${styles.eyebrow} ${styles.light}`}>Why this works</span>
            <h2>Built for faster discovery.</h2>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Clearer structure</h3>
            <p>Every generator is grouped by real use case instead of generic link lists.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Better scanning</h3>
            <p>Users can compare loaders, gradients, and shapes in a single glance.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>More trust</h3>
            <p>The tools feel practical, relevant, and immediately usable in real product work.</p>
          </div>
        </div>
      </div>
    </>
  );
}
