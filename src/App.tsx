import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HelloWorld from './HelloWorld';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <HelloWorld testProp="Hello" />
  </>
);

export default App;
