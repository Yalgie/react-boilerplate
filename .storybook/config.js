import React from "react";
import {addDecorator, addParameters, configure} from '@storybook/react';
import { themes } from '@storybook/theming';
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import CssBaseline from '@material-ui/core/CssBaseline';

addParameters({
  options: {
    theme: themes.dark,
  },
});

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    },
  },
});

addDecorator(story => (<>
    <CssBaseline/>
    {story()}
  </>
));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/', true, /\.stories\.tsx$/), module);
