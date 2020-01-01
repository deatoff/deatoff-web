import { configure } from '@storybook/react';

//@ts-ignore: missing 'context' type annotation in 'Require'.
configure(require.context('../src/components/', true, /\.stories\.tsx?$/), module);