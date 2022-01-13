import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Pages in Storybook</h2>
      <p>
      Storybook helps you build any component, from small “atomic” components to composed pages. But as you move up the component hierarchy toward the level of pages, you end up dealing with more complexity.
      </p>
      <p>
      There are many ways to build pages in Storybook. Here are common patterns and solutions.
      </p>
      <ul>
        <li>
        Pure presentational pages.
        </li>
        <li>
        Connected components (e.g., network requests, context, browser environment).
        </li>
        <li>
        Easy to write stories once components are in this form.
        </li>
      </ul>
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
