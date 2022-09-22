module.exports = {
  hooks: {
    readPackage(pkg) {
      for (const key of Object.keys(pkg.peerDependencies || {})) {
        if (!['typescript'].includes(key)) {
          delete pkg.peerDependencies[key]
        }
      }
      // for (const key of Object.keys(pkg.dependencies || {})) {
        // if (!['@storybook/core-common', 'fork-ts-checker-webpack-plugin'].includes(key)) {
          // delete pkg.dependencies[key]
        // }
      // }
      // if (!pkg.dependencies['@storybook/core-common'] && !pkg.dependencies['fork-ts-checker-webpack-plugin']) {
        // pkg.dependencies = {}
        // pkg.optionalDependencies = {}
      // }
      return pkg;
    }
  }
}
