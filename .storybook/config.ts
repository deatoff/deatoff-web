import { configure } from '@storybook/react';

configure(
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/6170
  // @ts-ignore: missing 'context' type annotation in 'Require'.
  require.context('../src/components/', true, /\.stories\.tsx?$/), module
);