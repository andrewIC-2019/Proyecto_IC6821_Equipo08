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
app.post("/registrarEstacionamiento", registrarEstacionamiento);
app.get("/estacionamientoInfo", estacionamientoInfo);
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
function registrarEstacionamiento(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tipoEstacionamiento = req.body.tipoEstacionamiento;
                    provincia = req.body.provincia;
                    canton = req.body.canton;
                    distrito = req.body.distrito;
                    direccion = req.body.direccion;
                    nombre = req.body.nombre;
                    formaAcceso = req.body.formaAcceso;
                    cantEspacios = req.body.cantEspacios;
                    cantEspaciosEspeciales = req.body.cantEspaciosEspeciales;
                    cantEspaciosJefaturas = req.body.cantEspaciosJefaturas;
                    cantEspaciosVisitantes = req.body.cantEspaciosVisitantes;
                    cantEspaciosOficiales = req.body.cantEspaciosOficiales;
                    correo = req.body.correo;
                    telefono = req.body.telefono;
                    identificacion = req.body.identificacion;
                    imageUrl = req.body.imageUrl;
                    descripcion = req.body.descripcion;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorEstacionamiento.registrarEstacionamiento(tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion)
                            .then(function (data) {
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
