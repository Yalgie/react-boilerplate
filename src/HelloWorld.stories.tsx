import React from 'react';
import HelloWorld from './HelloWorld';

export default {
  component: HelloWorld,
  title: 'HelloWorld',
};

export const example: React.FC = () => <HelloWorld testProp="Test" />;
