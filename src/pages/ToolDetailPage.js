import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {tools} from '../data/tools';
import styles from './ToolDetailPage.module.css';
import GradientGenerator from '../components/GradientGenerator';
import LoaderGenerator from '../components/LoaderGenerator';
import ClipPathGenerator from '../components/ClipPathGenerator';
import GenericToolDetail from '../components/GenericToolDetail';
import previewConfig from '../configs/previewConfig.json';
import images from '../data/images';

export default function ToolDetailPage() {
  const {slug} = useParams();
  const tool = tools.find(item => item.slug === slug);

  if (!tool) {
    return (
      <div className={styles.emptyState}>
        <h1>Tool not found</h1>
        <Link to="/tools" className={styles.backLink}>
          Back to tools
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Link to="/tools" className={styles.backLink}>
        Back to tools
      </Link>

      <div className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{tool.category}</span>
          <h1>{tool.name}</h1>
          <p>{tool.description}</p>

          <div className={styles.metaRow}>
            <span className={styles.badge}>{tool.difficulty}</span>
            <span>{tool.usage}</span>
          </div>

          <div className={styles.tagList}>
            {tool.tags.map(tag => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.previewPanel}>
          {tool.slug === 'loader-generator' ? (
            <LoaderGenerator />
          ) : tool.slug === 'gradient-generator' ? (
            <GradientGenerator />
          ) : tool.slug === 'clip-path-generator' ? (
            <ClipPathGenerator />
          ) : (
            <GenericToolDetail tool={tool} />
          )}
        </div>
      </div>

      <div className={styles.detailsGrid}>
        <div className={styles.mainCard}>
          <h2>What this tool gives you</h2>
          <ul className={styles.featureList}>
            {tool.features.map(feature => (
              <li key={feature}>
                <span className={styles.check}>✅</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sideCard}>
          <h3>Why use it</h3>
          <ul className={styles.summaryList}>
            <li>Fast output</li>
            <li>Production-ready styling</li>
            <li>Easy front-end experimentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
