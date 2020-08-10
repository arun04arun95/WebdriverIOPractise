"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const humanize_duration_1 = __importDefault(require("humanize-duration"));
const utils_1 = require("../utils");
exports.getBrowserFontIconClass = browser => {
    var supported = ['chrome', 'ie', 'edge', 'firefox'];
    var filtered = supported.filter(item => browser.includes(item));
    if (filtered.length > 0) {
        return 'fa-' + filtered[0];
    }
};
const TestTitle = props => {
    const stateClassnameAndMessage = {
        pending: { span: 'is-warning', status: 'PENDING' },
        skipped: { span: 'is-warning', status: 'SKIPPED' },
        passed: { span: 'is-success', status: 'PASSED' },
        failed: { span: 'is-danger', status: 'FAILED' },
        unknown: { span: 'is-warning', status: 'UNKNOWN' }
    };
    const { state } = props;
    const classNameAndFieldText = stateClassnameAndMessage[state || 'unknown'];
    return (react_1.default.createElement("span", { className: `tag is-normal ${classNameAndFieldText.span}` }, classNameAndFieldText.status));
};
const TestSummary = props => {
    const { test } = props;
    return test.state !== 'pending' ? (react_1.default.createElement("div", { className: "columns" },
        react_1.default.createElement("div", { className: "column is-half" },
            react_1.default.createElement("table", { className: "table is-hoverable" },
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, "Status:"),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(TestTitle, { state: test.state }))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, "Duration:"),
                    react_1.default.createElement("td", null, humanize_duration_1.default(test.duration, { round: true }))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, "Start:"),
                    react_1.default.createElement("td", null, utils_1.formatDateString(test.start))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, "End:"),
                    react_1.default.createElement("td", null, utils_1.formatDateString(test.end))))))) : null;
};
exports.default = TestSummary;
