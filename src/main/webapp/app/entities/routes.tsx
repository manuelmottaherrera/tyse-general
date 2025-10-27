import React from 'react';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Author from './author';
import { Route } from 'react-router';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="author/*" element={<Author />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
