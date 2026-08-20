import React from 'react';
import {Link} from 'react-router-dom';
import {tools} from '../data/tools';
import styles from './ToolsPage.module.css';
import GradientMini from '../components/GradientMini';
import LoaderMini from '../components/LoaderMini';
import ToolPreviewWrapper from '../components/ToolPreviewWrapper';
import previewConfig from '../configs/previewConfig.json';

export default function ToolsPage() {
  return (
    <div className={styles.pageShell}>
      <section className={styles.pageHero}>
        <span className={styles.eyebrow}>Library</span>
        <h1>All tools</h1>
        <p>Explore utilities that are useful in everyday work.</p>
      </section>

      <section className={styles.toolGrid}>
        {tools.map(tool => (
          <article key={tool.id} className={styles.toolCard}>
            <div className={styles.preview}>
              <ToolPreviewWrapper>
                {tool.slug === 'gradient-generator' ? (
                  <GradientMini />
                ) : tool.slug === 'loader-generator' ? (
                  <LoaderMini />
                ) : (
                  <div className={styles[`${tool.accent}Preview`]}></div>
                )}
                <img src={tool.iconImage} alt={tool.name} />
              </ToolPreviewWrapper>
            </div>
            <div className={styles.body}>
              <span className={styles.tag}>{tool.category}</span>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <div className={styles.metaRow}>
                <span>{tool.difficulty}</span>
                <Link to={`/tools/${tool.slug}`}>View tool →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
