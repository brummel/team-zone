"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var App = function (_a) {
    var userService = _a.userService;
    var _b = react_1.useState([]), users = _b[0], setUsers = _b[1];
    var updateUsers = function () {
        var users = userService.getUsers().then(function (users) {
            console.log("Setting users:", users);
            setUsers(users);
        });
    };
    react_1.useEffect(function () {
        if (users.length === 0) {
            updateUsers();
        }
    }, [users]);
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("ul", { className: "list-group" }, users.map(function (user) { return (react_1["default"].createElement("li", { key: user._id, className: "list-group-item" }, user.name)); })),
        react_1["default"].createElement("button", { className: "btn btn-outline-primary float-right", onClick: updateUsers }, "Update")));
};
exports["default"] = App;
