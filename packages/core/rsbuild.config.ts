export default {
  html: {
    template: './src/client/index.html',
  },
  source: {
    entry: {
      index: './src/client/main.ts',
    },
  },
  dev: {
    writeToDisk: true,
    hmr: false,
    liveReload: false,
  },
  output: {
    distPath: {
      root: './dist-client'
    },
  },
};
