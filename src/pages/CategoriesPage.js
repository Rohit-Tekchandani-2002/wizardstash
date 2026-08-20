import React from 'react';
import {Link} from 'react-router-dom';
import {categories, tools} from '../data/tools';
import styles from './CategoriesPage.module.css';

export default function CategoriesPage() {
  return (
    <div className={styles.pageShell}>
      <section className={styles.pageHero}>
        <span className={styles.eyebrow}>Browse by type</span>
        <h1>Explore categories</h1>
        <p>
          Find the best generator for your next interface element, from form inputs to visual
          patterns and button treatments.
        </p>
      </section>

      <section className={styles.grid}>
        {categories.map(category => {
          const categoryTools = tools.filter(tool => tool.category === category.name);

          return (
            <article key={category.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.count}>{category.count}</span>
                <span className={styles.label}>tools</span>
              </div>
              <h3>{category.name}</h3>
              <p>
                {categoryTools.length > 0
                  ? `${categoryTools[0].name} and related utilities for ${category.name.toLowerCase()}.`
                  : 'Explore new variations and UI styling options.'}
              </p>
              <Link to="/tools">Browse collection →</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
