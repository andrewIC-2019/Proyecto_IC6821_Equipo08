"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLConnection = void 0;
var Connection = require("tedious").Connection;
var config = {
    server: "localhost",
    authentication: {
        type: "default",
        options: {
            userName: "sa",
            password: "cer5a37Te9",
        },
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: "parqueos",
        enableArithAbort: true,
        trustServerCertificate: false,
    },
};
var connection = new Connection(config);
connection.on("connect", function (err) {
    // If no error, then good to proceed.
    console.log("Connected");
});
connection.connect();
var SQLConnection = /** @class */ (function () {
    function SQLConnection() {
    }
    SQLConnection.getInstance = function () {
        if (!SQLConnection.instance) {
            SQLConnection.instance = new SQLConnection();
        }
        return this.instance;
    };
    SQLConnection.prototype.getUser = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, test()];
            });
        });
    };
    return SQLConnection;
}());
exports.SQLConnection = SQLConnection;
var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;
function executeLogin_test(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var request, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = new Request("EXEC login_test @correoInstitucional;", function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                    request.addParameter("correoInstitucional", TYPES.NVarChar, username);
                    result = "";
                    connection.execSql(request);
                    console.log("salio");
                    return [4 /*yield*/, request.on("row", function (columns) {
                            columns.forEach(function (column) {
                                if (column.value === null) {
                                    console.log("NULL");
                                }
                                else {
                                    result += column.value + " ";
                                }
                            });
                            console.log("acá");
                            console.log(result);
                            console.log("acá");
                        })];
                case 1:
                    _a.sent();
                    request.on("done", function (rowCount, more) {
                        console.log(rowCount + " rows returned");
                    });
                    // Close the connection after the final event emitted by the request, after the callback passes
                    request.on("requestCompleted", function (rowCount, more) {
                        connection.close();
                    });
                    return [2 /*return*/, result];
            }
        });
    });
}
var sql = require('mssql');
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    // make sure that any items are correctly URL encoded in the connection string
                    return [4 /*yield*/, sql.connect('Server=localhost,1433;Database=parqueos;User Id=sa;Password=cer5a37Te9;Encrypt=false')];
                case 1:
                    // make sure that any items are correctly URL encoded in the connection string
                    _a.sent();
                    return [4 /*yield*/, sql.query("select * from Usuarios")];
                case 2:
                    result = _a.sent();
                    console.dir(result);
                    console.log("***********todo bien*****************");
                    return [2 /*return*/, result.recordset];
                case 3:
                    err_1 = _a.sent();
                    console.log("***********entra en error*****************");
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
