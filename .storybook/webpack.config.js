const path = require("path");

/**
 * @TODO We take use storybook preset into consideration.
 * @see https://github.com/storybookjs/presets/blob/master/packages/preset-scss/index.js
 * 
 * @TODO How do I setup Storybook to share Webpack configuration with Next.js?
 * @see https://storybook.js.org/docs/basics/faq/
 */
module.exports = ({ config, _mode }) => {

  // for sass, scss
  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: "[local]___[hash:base64:5]"
          }
        }
      },
      { loader: "sass-loader" }
    ],
    include: path.resolve(__dirname, "../")
  });
  
  // for ts, tsx
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    include: [/components/],
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-typescript")
          ]
        }
      },
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
