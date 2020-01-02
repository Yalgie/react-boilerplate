import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  testProp: string;
}

export const HelloWorld: React.FC<Props> = ({ testProp }) => {
  return (
    <Typography variant="h1" component="h2">
      {testProp}
    </Typography>
  );
};

export default HelloWorld;
