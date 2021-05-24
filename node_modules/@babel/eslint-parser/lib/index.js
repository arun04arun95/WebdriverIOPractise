"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseForESLint = parseForESLint;

var _semver = require("semver");

var _core = require("@babel/core");

var _configuration = require("./configuration");

var _convert = require("./convert");

var _analyzeScope = require("./analyze-scope");

var _visitorKeys = require("./visitor-keys");

let isRunningMinSupportedCoreVersion = null;

function baseParse(code, options) {
  const minSupportedCoreVersion = ">=7.2.0";

  if (typeof isRunningMinSupportedCoreVersion !== "boolean") {
    isRunningMinSupportedCoreVersion = _semver.satisfies(_core.version, minSupportedCoreVersion);
  }

  if (!isRunningMinSupportedCoreVersion) {
    throw new Error(`@babel/eslint-parser@${"7.14.2"} does not support @babel/core@${_core.version}. Please upgrade to @babel/core@${minSupportedCoreVersion}.`);
  }

  let ast;

  try {
    ast = (0, _core.parseSync)(code, (0, _configuration.normalizeBabelParseConfig)(options));
  } catch (err) {
    if (err instanceof SyntaxError) {
      err.lineNumber = err.loc.line;
      err.column = err.loc.column;
    }

    throw err;
  }

  (0, _convert.default)(ast, code);
  return ast;
}

function parse(code, options = {}) {
  return baseParse(code, (0, _configuration.normalizeESLintConfig)(options));
}

function parseForESLint(code, options = {}) {
  const normalizedOptions = (0, _configuration.normalizeESLintConfig)(options);
  const ast = baseParse(code, normalizedOptions);
  const scopeManager = (0, _analyzeScope.default)(ast, normalizedOptions);
  return {
    ast,
    scopeManager,
    visitorKeys: _visitorKeys.default
  };
}