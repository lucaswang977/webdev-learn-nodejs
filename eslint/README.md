# Notes from the ESLint Document

## Core Concepts

- **Rules**: A rule validates if your code meets a certain expectation, and what to do if it does not meet that expectation.
- **Rule Fixes**: Rules may optionally provide fixes for violations that they find.
- **Rule Suggestions**: Rules may optionally provide suggestions in addition to or instead of providing fixes.
- **Configuration files**: An ESLint configuration file is a place where you put the configuration for ESLint in your project.
- **Shareable configurations**: Shareable configurations are ESLint configurations that are shared via npm.
- **Plugins**: An ESLint plugin is an npm module that can contain a set of ESLint rules, configurations, processors, and environments.
- **Parsers**: An ESLint parser converts code into an abstract syntax tree that ESLint can evaluate. (Espress parser by default)
- **Custom Processors**: An ESLint processor extracts JavaScript code from other kinds of files, then lets ESLint lint the JavaScript code.
- **Formatters**: An ESLint formatter controls the appearance of the linting results in the CLI.
- **Integrations**: The projects that have integrated ESLint.

## Configuration Objects

- **name**: A name for the configuration object. This is used in error messages and config inspector to help identify which configuration object is being used.
- **files**: An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
- **ignores**: An array of glob patterns indicating the files that the configuration object should not apply to.
- **languageOptions**: An object containing settings related to how JavaScript is configured for linting. (ecmaVersion, sourceType, globals, parser, parserOptions)
- **linterOptions**: An object containing settings related to the linting process. (noInlineConfig, reportUnusedDisableDirectives)
- **processor**: Either an object containing preprocess() and postprocess() methods or a string indicating the name of a processor inside of a plugin.
- **plugins**: An object containing a name-value mapping of plugin names to plugin objects.
- **rules**: An object containing the configured rules.
- **settings**: An object containing name-value pairs of information that should be available to all rules.

## Examples

Matches all JavaScript files in the src directory except those that end with .config.js:

```json
export default [
    {
        files: ["src/**/*.js"],
        ignores: ["**/*.config.js", "!**/eslint.config.js"],
        rules: {
            semi: ["error", "never"]
        }
    }
];
```

Shareable configurations exports an array:

```json
// eslint.config.js
import exampleConfigs from "eslint-config-example";

export default [
    ...exampleConfigs,

    // your modifications
    {
        rules: {
            "no-unused-vars": "warn"
        }
    }
];
```
