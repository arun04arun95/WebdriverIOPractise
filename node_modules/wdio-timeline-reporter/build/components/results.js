"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const no_results_1 = __importDefault(require("./no-results"));
const specs_results_1 = __importDefault(require("./specs-results"));
const search_1 = __importDefault(require("./search"));
const Results = props => {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement(search_1.default, null),
        react_1.default.createElement(no_results_1.default, null),
        react_1.default.createElement("div", { id: "results", className: "tests all" },
            react_1.default.createElement(specs_results_1.default, { specs: props.specs }))));
};
exports.default = Results;
