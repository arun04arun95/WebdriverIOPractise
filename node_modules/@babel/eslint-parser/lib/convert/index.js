"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _convertTokens = require("./convertTokens");

var _convertComments = require("./convertComments");

var _convertAST = require("./convertAST");

function _default(ast, code) {
  ast.tokens = (0, _convertTokens.default)(ast.tokens, code);
  (0, _convertComments.default)(ast.comments);
  (0, _convertAST.default)(ast, code);
}