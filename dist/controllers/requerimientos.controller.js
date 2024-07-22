"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRquerimientosPadre = exports.getRequerimientosMapa = exports.getRequerimientosActivosXtecnico = exports.getRequerimientosActivos = exports.getReparacionesActivosXtecnico = exports.getAllRequerimientos = exports.editRequerimientosVisitaTecnica = exports.editRequerimientosReparacion = exports.editRequerimientosHabilitar = exports.editRequerimientosCierraCaso = exports.editRequerimientosAprobacion = exports.editRequerimientos = exports.createRequerimientos2 = exports.createRequerimientos = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var jwt = require('jsonwebtoken');
var path = require('path');
var getAllRequerimientos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.querys.getAllRequerimientos);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAllRequerimientos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllRequerimientos = getAllRequerimientos;
var getRequerimientosMapa = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_database.querys.getRequerimientosMapa);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getRequerimientosMapa(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getRequerimientosMapa = getRequerimientosMapa;
var getRequerimientosActivos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().query(_database.querys.getRequerimientosActivos);
        case 6:
          result = _context3.sent;
          res.json(result.recordset);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getRequerimientosActivos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getRequerimientosActivos = getRequerimientosActivos;
var createRequerimientos2 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          console.log(req.files);
          console.log(req.body);
          // console.log(req.body.image);
          // console.log(req.files[0]);//Sino esta subida la foto, te muestra unidefined como resultado
          return _context4.abrupt("return", res.json({
            message: 'Foto subida con exito'
          }));
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function createRequerimientos2(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.createRequerimientos2 = createRequerimientos2;
var createRequerimientos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pool, codigo, idR, secuencial, totalDetalle, ivaDetalle, totalFinalDetalle, i, pool2, result, idReq, _i, pool3, _result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().query(_database.querys.getLastIdRequerimiento);
        case 6:
          codigo = _context5.sent;
          idR = 0;
          if (codigo.recordset[0].REQ_id == 0) {
            idR = 1;
          } else {
            idR = codigo.recordset[0].REQ_id;
          }
          secuencial = '';
          secuencial = "REQ" + idR;
          totalDetalle = 0;
          ivaDetalle = 0;
          totalFinalDetalle = 0;
          if (req.body.details.length > 0) {
            for (i = 0; i < req.body.details.length; i++) {
              totalDetalle = totalDetalle + req.body.details[i].qty * req.body.details[i].salesPrice;
            }
            ivaDetalle = totalDetalle * (15 / 100);
            totalFinalDetalle = totalDetalle + ivaDetalle;
          }
          _context5.next = 17;
          return (0, _database.getConnection)();
        case 17:
          pool2 = _context5.sent;
          _context5.next = 20;
          return pool2.request().input("REQ_codigo", _database.sql.VarChar, secuencial).input("REQ_personaReporta", _database.sql.VarChar, req.body.PersonaR).input("REQ_fecha", _database.sql.DateTime, req.body.FechaReq).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_CLI_id", _database.sql.Decimal, req.body.Cliente).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("REQ_observacion", _database.sql.VarChar, req.body.Observacion).input("REQ_ubicacionMaps", _database.sql.VarChar, req.body.Maps).input("REQ_SS_id", _database.sql.Decimal, req.body.Servicio).input("REQ_USU_id", _database.sql.Decimal, req.body.TecnicoChofer).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_ing", _database.sql.Decimal, req.body.id).input("REQ_REQ_Padre", _database.sql.Decimal, req.body.idPadre).input("REQ_estado", _database.sql.Decimal, req.body.aprobado).query(_database.querys.addRequerimiento);
        case 20:
          result = _context5.sent;
          if (!(result.rowsAffected[0] == 1)) {
            _context5.next = 38;
            break;
          }
          idReq = result.recordset[0].REQ_id;
          if (!(req.body.details.length > 0)) {
            _context5.next = 35;
            break;
          }
          _i = 0;
        case 25:
          if (!(_i < req.body.details.length)) {
            _context5.next = 35;
            break;
          }
          _context5.next = 28;
          return (0, _database.getConnection)();
        case 28:
          pool3 = _context5.sent;
          _context5.next = 31;
          return pool3.request().input("REQDET_REQ_id", _database.sql.Decimal, idReq).input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i].qty * req.body.details[_i].salesPrice).query(_database.querys.addNewRequerimientoDetalle);
        case 31:
          _result = _context5.sent;
        case 32:
          _i++;
          _context5.next = 25;
          break;
        case 35:
          return _context5.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 38:
          return _context5.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 39:
          _context5.next = 45;
          break;
        case 41:
          _context5.prev = 41;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 45:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 41]]);
  }));
  return function createRequerimientos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.createRequerimientos = createRequerimientos;
var editRequerimientos = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var totalDetalle, ivaDetalle, totalFinalDetalle, i, pool, result, pool2, result2, _i2, pool3, result3, _i3, _pool, _result2;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          totalDetalle = 0;
          ivaDetalle = 0;
          totalFinalDetalle = 0;
          if (req.body.details.length > 0) {
            for (i = 0; i < req.body.details.length; i++) {
              totalDetalle = totalDetalle + req.body.details[i].qty * req.body.details[i].salesPrice;
            }
            ivaDetalle = totalDetalle * (15 / 100);
            totalFinalDetalle = totalDetalle + ivaDetalle;
          }
          _context6.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context6.sent;
          _context6.next = 10;
          return pool.request().input("id", req.params.id).input("REQ_fecha", _database.sql.DateTime, req.body.FechaReq).input("REQ_SS_id", _database.sql.VarChar, req.body.Servicio).input("REQ_personaReporta", _database.sql.VarChar, req.body.PersonaR).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_CLI_id", _database.sql.Decimal, req.body.Cliente).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("REQ_observacion", _database.sql.VarChar, req.body.Observacion).input("REQ_ubicacionMaps", _database.sql.VarChar, req.body.Maps).input("REQ_USU_id", _database.sql.Decimal, req.body.TecnicoChofer).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).query(_database.querys.editRequerimiento);
        case 10:
          result = _context6.sent;
          if (!(result.rowsAffected == 1)) {
            _context6.next = 48;
            break;
          }
          _context6.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context6.sent;
          _context6.next = 17;
          return pool2.request().input("REQDET_REQ_id", req.params.id).query(_database.querys.cambiarEstadoRequerimientoDetalle);
        case 17:
          result2 = _context6.sent;
          if (!(result2.rowsAffected > 0)) {
            _context6.next = 33;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context6.next = 31;
            break;
          }
          _i2 = 0;
        case 21:
          if (!(_i2 < req.body.details.length)) {
            _context6.next = 31;
            break;
          }
          _context6.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context6.sent;
          _context6.next = 27;
          return pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i2].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i2].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i2].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i2].qty * req.body.details[_i2].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 27:
          result3 = _context6.sent;
        case 28:
          _i2++;
          _context6.next = 21;
          break;
        case 31:
          _context6.next = 45;
          break;
        case 33:
          if (!(req.body.details.length > 0)) {
            _context6.next = 45;
            break;
          }
          _i3 = 0;
        case 35:
          if (!(_i3 < req.body.details.length)) {
            _context6.next = 45;
            break;
          }
          _context6.next = 38;
          return (0, _database.getConnection)();
        case 38:
          _pool = _context6.sent;
          _context6.next = 41;
          return _pool.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i3].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i3].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i3].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i3].qty * req.body.details[_i3].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 41:
          _result2 = _context6.sent;
        case 42:
          _i3++;
          _context6.next = 35;
          break;
        case 45:
          return _context6.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 48:
          return _context6.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 49:
          _context6.next = 55;
          break;
        case 51:
          _context6.prev = 51;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.send(_context6.t0.message);
        case 55:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 51]]);
  }));
  return function editRequerimientos(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.editRequerimientos = editRequerimientos;
var editRequerimientosVisitaTecnica = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var pool, totalDetalle, ivaDetalle, totalFinalDetalle, i, result, pool2, result2, _i4, pool3, result3, _i5, _pool2, _result3;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context7.sent;
          totalDetalle = 0;
          ivaDetalle = 0;
          totalFinalDetalle = 0;
          if (req.body.details.length > 0) {
            for (i = 0; i < req.body.details.length; i++) {
              totalDetalle = totalDetalle + req.body.details[i].qty * req.body.details[i].salesPrice;
            }
            ivaDetalle = totalDetalle * (15 / 100);
            totalFinalDetalle = totalDetalle + ivaDetalle;
          }
          _context7.next = 10;
          return pool.request().input("id", req.params.id).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_observacionTecnica", _database.sql.VarChar, req.body.Observacion).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).query(_database.querys.editRequerimientoVisitaTecnica);
        case 10:
          result = _context7.sent;
          if (!(result.rowsAffected == 1)) {
            _context7.next = 48;
            break;
          }
          _context7.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context7.sent;
          _context7.next = 17;
          return pool2.request().input("REQDET_REQ_id", req.params.id).query(_database.querys.cambiarEstadoRequerimientoDetalle);
        case 17:
          result2 = _context7.sent;
          if (!(result2.rowsAffected > 0)) {
            _context7.next = 33;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context7.next = 31;
            break;
          }
          _i4 = 0;
        case 21:
          if (!(_i4 < req.body.details.length)) {
            _context7.next = 31;
            break;
          }
          _context7.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context7.sent;
          _context7.next = 27;
          return pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i4].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i4].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i4].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i4].qty * req.body.details[_i4].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 27:
          result3 = _context7.sent;
        case 28:
          _i4++;
          _context7.next = 21;
          break;
        case 31:
          _context7.next = 45;
          break;
        case 33:
          if (!(req.body.details.length > 0)) {
            _context7.next = 45;
            break;
          }
          _i5 = 0;
        case 35:
          if (!(_i5 < req.body.details.length)) {
            _context7.next = 45;
            break;
          }
          _context7.next = 38;
          return (0, _database.getConnection)();
        case 38:
          _pool2 = _context7.sent;
          _context7.next = 41;
          return _pool2.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i5].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i5].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i5].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i5].qty * req.body.details[_i5].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 41:
          _result3 = _context7.sent;
        case 42:
          _i5++;
          _context7.next = 35;
          break;
        case 45:
          return _context7.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 48:
          return _context7.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 49:
          _context7.next = 55;
          break;
        case 51:
          _context7.prev = 51;
          _context7.t0 = _context7["catch"](0);
          res.status(500);
          res.send(_context7.t0.message);
        case 55:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 51]]);
  }));
  return function editRequerimientosVisitaTecnica(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.editRequerimientosVisitaTecnica = editRequerimientosVisitaTecnica;
var editRequerimientosAprobacion = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context8.sent;
          _context8.next = 6;
          return pool.request().input("id", req.params.id).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).input("REQ_estado", _database.sql.Decimal, req.body.estado).query(_database.querys.editRequerimientoAprobacion);
        case 6:
          result = _context8.sent;
          if (!(result.rowsAffected == 1)) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 11:
          return _context8.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context8.next = 18;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          res.status(500);
          res.send(_context8.t0.message);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return function editRequerimientosAprobacion(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.editRequerimientosAprobacion = editRequerimientosAprobacion;
var getRequerimientosActivosXtecnico = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context9.sent;
          _context9.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getRequerimientosActivosXtec);
        case 6:
          result = _context9.sent;
          return _context9.abrupt("return", res.json(result.recordset));
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
          res.send(_context9.t0.message);
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getRequerimientosActivosXtecnico(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getRequerimientosActivosXtecnico = getRequerimientosActivosXtecnico;
var getReparacionesActivosXtecnico = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context10.sent;
          _context10.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getReparacionesActivosXtec);
        case 6:
          result = _context10.sent;
          return _context10.abrupt("return", res.json(result.recordset));
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          res.status(500);
          res.send(_context10.t0.message);
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function getReparacionesActivosXtecnico(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getReparacionesActivosXtecnico = getReparacionesActivosXtecnico;
var editRequerimientosReparacion = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var image, image1, image2, image3, image4, firma, imageruta, imageruta1, imageruta2, imageruta3, imageruta4, pool, totalDetalle, ivaDetalle, totalFinalDetalle, i, json, result, pool2, result2, _i6, _json, _i7, _json2, pool3, result3, _i8, _json3, _pool3, _result4;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          image = '', image1 = '', image2 = '', image3 = '', image4 = '', firma = '';
          imageruta = '', imageruta1 = '', imageruta2 = '', imageruta3 = '', imageruta4 = '';
          _context11.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context11.sent;
          totalDetalle = 0;
          ivaDetalle = 0;
          totalFinalDetalle = 0;
          if (req.files.length > 0) {
            if (req.files[0] != undefined) {
              if (req.files[0].originalname.includes('Firma')) {
                firma = req.files[0].filename;
              } else {
                image = req.files[0].filename;
                imageruta = req.files[0].path;
              }
            }
            if (req.files[1] != undefined) {
              if (req.files[1].originalname.includes('Firma')) {
                firma = req.files[1].filename;
              } else {
                image1 = req.files[1].filename;
                imageruta1 = req.files[1].path;
              }
            }
            if (req.files[2] != undefined) {
              if (req.files[2].originalname.includes('Firma')) {
                firma = req.files[2].filename;
              } else {
                image2 = req.files[2].filename;
                imageruta2 = req.files[2].path;
              }
            }
            if (req.files[3] != undefined) {
              if (req.files[3].originalname.includes('Firma')) {
                firma = req.files[3].filename;
              } else {
                image3 = req.files[3].filename;
                imageruta3 = req.files[3].path;
              }
            }
            if (req.files[4] != undefined) {
              if (req.files[4].originalname.includes('Firma')) {
                firma = req.files[4].filename;
              } else {
                image4 = req.files[4].filename;
                imageruta4 = req.files[4].path;
              }
            }
            if (req.files[5] != undefined) {
              if (req.files[5].originalname.includes('Firma')) {
                firma = req.files[5].filename;
              }
            }
          }
          if (req.body.details.length > 0) {
            for (i = 0; i < req.body.details.length; i++) {
              json = JSON.parse(req.body.details[i]);
              totalDetalle = totalDetalle + json.qty * json.salesPrice;
            }
            ivaDetalle = totalDetalle * (15 / 100);
            totalFinalDetalle = totalDetalle + ivaDetalle;
          }
          _context11.next = 13;
          return pool.request().input("id", req.params.id).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_observacionTecnica", _database.sql.VarChar, req.body.Observacion).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).input("REQ_imagen1", _database.sql.VarChar, image).input("REQ_rutaimagen1", _database.sql.VarChar, imageruta).input("REQ_imagen2", _database.sql.VarChar, image1).input("REQ_rutaimagen2", _database.sql.VarChar, imageruta1).input("REQ_imagen3", _database.sql.VarChar, image2).input("REQ_rutaimagen3", _database.sql.VarChar, imageruta2).input("REQ_imagen4", _database.sql.VarChar, image3).input("REQ_rutaimagen4", _database.sql.VarChar, imageruta3).input("REQ_imagen5", _database.sql.VarChar, image4).input("REQ_rutaimagen5", _database.sql.VarChar, imageruta4).input("REQ_firmaCliente", _database.sql.VarChar, firma).query(_database.querys.editRequerimientoReparacion);
        case 13:
          result = _context11.sent;
          if (!(result.rowsAffected == 1)) {
            _context11.next = 54;
            break;
          }
          _context11.next = 17;
          return (0, _database.getConnection)();
        case 17:
          pool2 = _context11.sent;
          _context11.next = 20;
          return pool2.request().input("REQDET_REQ_id", req.params.id).query(_database.querys.cambiarEstadoRequerimientoDetalle);
        case 20:
          result2 = _context11.sent;
          if (!(result2.rowsAffected > 0)) {
            _context11.next = 38;
            break;
          }
          if (req.body.details.length > 0) {
            for (_i6 = 0; _i6 < req.body.details.length; _i6++) {
              _json = JSON.parse(req.body.details[_i6]);
              totalDetalle = totalDetalle + _json.qty * _json.salesPrice;
            }
            ivaDetalle = totalDetalle * (15 / 100);
            totalFinalDetalle = totalDetalle + ivaDetalle;
          }
          if (!(req.body.details.length > 0)) {
            _context11.next = 36;
            break;
          }
          _i7 = 0;
        case 25:
          if (!(_i7 < req.body.details.length)) {
            _context11.next = 36;
            break;
          }
          _json2 = JSON.parse(req.body.details[_i7]);
          _context11.next = 29;
          return (0, _database.getConnection)();
        case 29:
          pool3 = _context11.sent;
          _context11.next = 32;
          return pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, _json2.productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), _json2.qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), _json2.salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), _json2.qty * _json2.salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 32:
          result3 = _context11.sent;
        case 33:
          _i7++;
          _context11.next = 25;
          break;
        case 36:
          _context11.next = 51;
          break;
        case 38:
          if (!(req.body.details.length > 0)) {
            _context11.next = 51;
            break;
          }
          _i8 = 0;
        case 40:
          if (!(_i8 < req.body.details.length)) {
            _context11.next = 51;
            break;
          }
          _json3 = JSON.parse(req.body.details[_i8]);
          _context11.next = 44;
          return (0, _database.getConnection)();
        case 44:
          _pool3 = _context11.sent;
          _context11.next = 47;
          return _pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, _json3.productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), _json3.qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), _json3.salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), _json3.qty * _json3.salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 47:
          _result4 = _context11.sent;
        case 48:
          _i8++;
          _context11.next = 40;
          break;
        case 51:
          return _context11.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 54:
          return _context11.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 55:
          _context11.next = 61;
          break;
        case 57:
          _context11.prev = 57;
          _context11.t0 = _context11["catch"](0);
          res.status(500);
          res.send(_context11.t0.message);
        case 61:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 57]]);
  }));
  return function editRequerimientosReparacion(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.editRequerimientosReparacion = editRequerimientosReparacion;
var getRquerimientosPadre = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context12.sent;
          _context12.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getRequerimientosHijos);
        case 6:
          result = _context12.sent;
          return _context12.abrupt("return", res.json(result.recordset));
        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](0);
          res.status(500);
          res.send(_context12.t0.message);
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 10]]);
  }));
  return function getRquerimientosPadre(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getRquerimientosPadre = getRquerimientosPadre;
var editRequerimientosCierraCaso = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context13.sent;
          _context13.next = 6;
          return pool.request().input("id", req.params.id).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).query(_database.querys.editRequerimientoCorte);
        case 6:
          result = _context13.sent;
          if (!(result.rowsAffected > 0)) {
            _context13.next = 11;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 11:
          return _context13.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context13.next = 18;
          break;
        case 14:
          _context13.prev = 14;
          _context13.t0 = _context13["catch"](0);
          res.status(500);
          res.send(_context13.t0.message);
        case 18:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 14]]);
  }));
  return function editRequerimientosCierraCaso(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.editRequerimientosCierraCaso = editRequerimientosCierraCaso;
var editRequerimientosHabilitar = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context14.sent;
          _context14.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editRequerimientoHabilitar);
        case 6:
          result = _context14.sent;
          if (!(result.rowsAffected == 1)) {
            _context14.next = 11;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 11:
          return _context14.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context14.next = 18;
          break;
        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](0);
          res.status(500);
          res.send(_context14.t0.message);
        case 18:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 14]]);
  }));
  return function editRequerimientosHabilitar(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.editRequerimientosHabilitar = editRequerimientosHabilitar;