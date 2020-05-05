// This is required by typescript-plugin-styled-components.
// For details, see: https://github.com/Igorbek/typescript-plugin-styled-components#forked-process-configuration

// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer()

// 3. create getCustomTransformer function
export const getCustomTransformers = () => ({ before: [styledComponentsTransformer] })
