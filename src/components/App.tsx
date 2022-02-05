import { h } from 'preact';
import { Route, Router } from 'preact-router';
import { CssBaseline } from '@mui/material';
import Home from '../routes/home';

const App: React.VFC = () => {
  return (
    <div id="preact_root">
      <CssBaseline />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
