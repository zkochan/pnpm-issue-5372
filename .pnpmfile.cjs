module.exports = {
  hooks: {
    readPackage(pkg) {
      for (const key of Object.keys(pkg.peerDependencies || {})) {
        if (!['typescript'].includes(key)) {
          delete pkg.peerDependencies[key]
        }
      }
      for (const key of Object.keys(pkg.dependencies || {})) {
        if (
          key.startsWith('@babel/') ||
          key.startsWith('babel-') ||
          [
            'chalk',
            'core-js',
            'express',
            'file-system-cache',
            'find-up',
            'fork-ts-checker-webpack-plugin',
            'fs-extra',
            'glob',
            'handlebars',
            'interpret',
            'json5',
            'lazy-universal-dotenv',
            'picomatch',
            'pkg-dir',
            'pretty-hrtime',
            'resolve-from',
            'slash',
            'telejson',
            'ts-dedent',
            'util-deprecate',
            // 'webpack', // this makes problems
            // '@webassemblyjs/ast',
            '@webassemblyjs/helper-module-context',
            // '@webassemblyjs/wasm-edit',
            '@webassemblyjs/wasm-parser',
            'acorn',
            'ajv',
            'ajv-keywords',
            'chrome-trace-event',
            'enhanced-resolve',
            'eslint-scope',
            'json-parse-better-errors',
            'loader-runner',
            'loader-utils',
            'memory-fs',
            'micromatch',
            'mkdirp',
            'neo-async',
            'node-libs-browser',
            'schema-utils',
            'tapable',
            'terser-webpack-plugin',
            'watchpack',
            'webpack-sources',
            '@webassemblyjs/helper-wasm-bytecode',
            // '@webassemblyjs/wast-parser',
            '@webassemblyjs/floating-point-hex-parser',
            '@webassemblyjs/helper-api-error',
            // '@webassemblyjs/helper-code-frame',
            '@webassemblyjs/helper-fsm',
            '@xtuc/long',
            '@webassemblyjs/helper-buffer',
            '@webassemblyjs/helper-wasm-section',
            '@webassemblyjs/wasm-gen',
            '@webassemblyjs/wasm-opt',
            // '@webassemblyjs/wast-printer',
            '@storybook/node-logger',
            '@storybook/semver',
            '@types/node',
            '@types/pretty-hrtime',
          ].includes(key)
        ) {
          delete pkg.dependencies[key]
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
