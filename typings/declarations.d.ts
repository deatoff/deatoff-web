/**
 * TypeScript not recognizing Sass modules
 * @see https://github.com/zeit/next-plugins/issues/91
 */
declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}