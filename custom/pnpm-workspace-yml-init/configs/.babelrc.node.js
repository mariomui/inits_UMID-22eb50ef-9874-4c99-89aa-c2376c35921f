const esNodeConfig = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // modules: ,
                },
              ],
              ['@babel/preset-typescript', {}],
            ],
          },
        },
      },
    ],
  },
};
module.exports = esNodeConfig;
