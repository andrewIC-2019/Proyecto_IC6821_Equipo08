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
exports.estacionamiento = void 0;
var express = require("express");
var common_1 = require("../common");
var controller_1 = require("../controller");
//a traves de un controller, y que ya cuenta con un logger
var app = express();
exports.estacionamiento = app;
var log = new common_1.Logger();
app.get("/inicio", inicio);
app.post("/registrarEstacionamientoTotal", registrarEstacionamientoTotal);
app.get("/estacionamientoInfo", estacionamientoInfo);
app.post("/deshabilitarEstacionamiento", deshabilitarEstacionamiento);
app.get("/pintarEditarEstacionamiento", pintarEditarEstacionamiento);
app.post("/guardarEditarEstacionamiento", guardarEditarEstacionamiento);
app.get("/estacionamientosTipoSubcontratados", estacionamientosTipoSubcontratados);
app.post("/crearEspacios", crearEspacios);
app.get("/calcularEspaciosDisponibles", calcularEspaciosDisponibles);
function calcularEspaciosDisponibles(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var estacionamientoId, tipoEspacioId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    estacionamientoId = req.query.estacionamientoId;
                    tipoEspacioId = req.query.tipoEspacioId;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.calcularEspaciosDisponibles(estacionamientoId, tipoEspacioId)
                            .then(function (data) {
                            if (!data) {
                                data = "-1";
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
function crearEspacios(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var estacionamiento, tipo, cantidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    estacionamiento = req.body.estacionamiento;
                    tipo = req.body.tipo;
                    cantidad = req.body.cantidad;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.crearEspacios(estacionamiento, tipo, cantidad)
                            .then(function (data) {
                            if (!data) {
                                data = '-1';
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
function estacionamientosTipoSubcontratados(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var subcontratados;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    subcontratados = req.query.subcontratados;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.estacionamientosTipoSubcontratados(subcontratados)
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
function guardarEditarEstacionamiento(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    estacionamientoId = req.body.estacionamientoId;
                    identificacion = req.body.identificacion;
                    nombre = req.body.nombre;
                    correo = req.body.correo;
                    telefono = req.body.telefono;
                    direccionExacta = req.body.direccionExacta;
                    formaAcceso = req.body.formaAcceso;
                    descripcion = req.body.descripcion;
                    cantEspaciosEspeciales = req.body.cantEspaciosEspeciales;
                    cantEspaciosJefaturas = req.body.cantEspaciosJefaturas;
                    cantEspaciosVisitantes = req.body.cantEspaciosVisitantes;
                    cantEspaciosOficiales = req.body.cantEspaciosOficiales;
                    cantEspacios = req.body.cantEspacios;
                    imageUrl = req.body.imageUrl;
                    lunesA = req.body.lunesA;
                    lunesB = req.body.lunesB;
                    martesA = req.body.martesA;
                    martesB = req.body.martesB;
                    miercolesA = req.body.miercolesA;
                    miercolesB = req.body.miercolesB;
                    juevesA = req.body.juevesA;
                    juevesB = req.body.juevesB;
                    viernesA = req.body.viernesA;
                    viernesB = req.body.viernesB;
                    sabadoA = req.body.sabadoA;
                    sabadoB = req.body.sabadoB;
                    domingoA = req.body.domingoA;
                    domingoB = req.body.domingoB;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.guardarEditarEstacionamiento(estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB)
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
function pintarEditarEstacionamiento(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var estacionamientoId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    estacionamientoId = req.query.estacionamientoId;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.pintarEditarEstacionamiento(estacionamientoId)
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
function registrarEstacionamientoTotal(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nombre = req.body.nombre;
                    correo = req.body.correo;
                    telefono = req.body.telefono;
                    identificacion = req.body.identificacion;
                    direccionExacta = req.body.direccionExacta;
                    formaAcceso = req.body.formaAcceso;
                    descripcion = req.body.descripcion;
                    cantEspaciosEspeciales = req.body.cantEspaciosEspeciales;
                    cantEspaciosJefaturas = req.body.cantEspaciosJefaturas;
                    cantEspaciosVisitantes = req.body.cantEspaciosVisitantes;
                    cantEspaciosOficiales = req.body.cantEspaciosOficiales;
                    cantEspacios = req.body.cantEspacios;
                    imageUrl = req.body.imageUrl;
                    lunesA = req.body.lunesA;
                    lunesB = req.body.lunesB;
                    martesA = req.body.martesA;
                    martesB = req.body.martesB;
                    miercolesA = req.body.miercolesA;
                    miercolesB = req.body.miercolesB;
                    juevesA = req.body.juevesA;
                    juevesB = req.body.juevesB;
                    viernesA = req.body.viernesA;
                    viernesB = req.body.viernesB;
                    sabadoA = req.body.sabadoA;
                    sabadoB = req.body.sabadoB;
                    domingoA = req.body.domingoA;
                    domingoB = req.body.domingoB;
                    esInstitucional = req.body.esInstitucional;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.registrarEstacionamientoTotal(nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional)
                            .then(function (data) {
                            if (!data) {
                                data = '-1';
                            }
                            res.json({ estacionamientoId: data });
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
function deshabilitarEstacionamiento(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var estacionamientoId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    estacionamientoId = req.body.estacionamientoId;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.eliminarEstacionamiento(estacionamientoId)
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
function estacionamientoInfo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var estacionamientoId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    estacionamientoId = req.query.estacionamientoId;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.estacionamientoInfo(estacionamientoId)
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
function inicio(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, controller_1.Control.getInstance()
                        .$gestorEstacionamiento.inicio()
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
