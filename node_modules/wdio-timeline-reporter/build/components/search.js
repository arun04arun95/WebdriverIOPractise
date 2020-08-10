"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Search = () => {
    return (react_1.default.createElement("div", { className: "columns" },
        react_1.default.createElement("div", { className: "column\n            is-half" },
            react_1.default.createElement("div", { className: "control has-icons-left has-icons-right" },
                react_1.default.createElement("input", { id: "search", className: "input", type: "text", placeholder: "Search for specs containing specific text e.g browser version" }),
                react_1.default.createElement("span", { className: "icon is-small is-left" },
                    react_1.default.createElement("i", { className: "fas fa-search" }))))));
};
exports.default = Search;
