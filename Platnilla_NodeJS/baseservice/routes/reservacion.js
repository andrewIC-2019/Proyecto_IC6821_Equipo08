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
exports.reservaciones = void 0;
var express = require("express");
var controller_1 = require("../controller");
var common_1 = require("../common");
var router = express.Router();
var app = express();
exports.reservaciones = app;
var log = new common_1.Logger();
app.get("/verificacionFranjas", verificacionFranjas);
app.get("/verificacionDiaLaboral", verificacionDiaLaboral);
app.get("/getDisponiblesTipo", getDisponiblesTipo);
app.post("/actualizarSalidaReservaciones", actualizarSalidaReservaciones);
app.post("/reservarFuncionario", reservarFuncionario);
app.post("/reservarJefatura", reservarJefatura);
function reservarJefatura(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId, estacionamientoId, tipoEspacioId, dia;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("llega");
                    usuarioId = req.body.usuarioId;
                    estacionamientoId = req.body.estacionamientoId;
                    tipoEspacioId = req.body.tipoEspacioId;
                    dia = req.body.dia;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorReservacion.reservarJefatura(usuarioId, estacionamientoId, tipoEspacioId, dia)
                            .then(function (data) {
                            if (!data) {
                                data = '-1';
                            }
                            res.json({ response: data });
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function reservarFuncionario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId, estacionamientoId, tipoEspacioId, entrada, salida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuarioId = req.body.usuarioId;
                    estacionamientoId = req.body.estacionamientoId;
                    tipoEspacioId = req.body.tipoEspacioId;
                    entrada = req.body.entrada;
                    salida = req.body.salida;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorReservacion.reservarFuncionario(usuarioId, estacionamientoId, tipoEspacioId, entrada, salida)
                            .then(function (data) {
                            if (!data) {
                                data = '-1';
                            }
                            res.json({ response: data });
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function actualizarSalidaReservaciones(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var horaPivot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    horaPivot = req.body.horaPivot;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorReservacion.actualizarSalidaReservaciones(horaPivot)
                            .then(function (data) {
                            if (!data) {
                                data = '0';
                            }
                            res.json({ done: data == '1' });
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getDisponiblesTipo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var tipo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tipo = req.query.tipo;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorReservacion.getDisponiblesTipo(tipo)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function verificacionDiaLaboral(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var jefe, dia;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jefe = req.query.jefe;
                    dia = req.query.dia;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorReservacion.verificacionDiaLaboral(jefe, dia)
                            .then(function (data) {
                            if (!data) {
                                data = '0';
                            }
                            res.json({ done: data == "1" });
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function verificacionFranjas(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuario, entrada, salida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuario = req.query.usuario;
                    entrada = req.query.entrada;
                    salida = req.query.salida;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorReservacion.verificacionFranjas(usuario, entrada, salida)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json({ done: data == "1" });
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
