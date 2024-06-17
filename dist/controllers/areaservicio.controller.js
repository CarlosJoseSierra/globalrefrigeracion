"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateActivoByTecnico = exports.getReporteGeneral = exports.getCotizaciones = exports.getCTByTecnico = exports.getAreaServicioMovimiento = exports.getAreaServicioMantenimiento = exports.getAreaGeneral = exports.getAreaByTecnico = exports.getAreaBySerie = exports.getAreaByPlaca = exports.createNewAreaServicioByRequerimiento = exports.createNewAreaServicio = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getAreaBySerie = /*#__PURE__*/function () {
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
          return pool.request().input("serie", req.params.serie).input("idCliente1", req.params.idCliente1).input("idCliente2", req.params.idCliente2).query(_database.querys.getAreaBySerie);
        case 6:
          result = _context.sent;
          return _context.abrupt("return", res.json(result.recordset[0]));
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
  return function getAreaBySerie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAreaBySerie = getAreaBySerie;
var getAreaByPlaca = /*#__PURE__*/function () {
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
          return pool.request().input("placa", req.params.placa).input("idCliente1", req.params.idCliente1).input("idCliente2", req.params.idCliente2).query(_database.querys.getAreaByPlaca);
        case 6:
          result = _context2.sent;
          return _context2.abrupt("return", res.json(result.recordset[0]));
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
  return function getAreaByPlaca(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAreaByPlaca = getAreaByPlaca;
var getAreaGeneral = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getCotizaciones);
        case 6:
          result = _context3.sent;
          return _context3.abrupt("return", res.json(result.recordset));
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
  return function getAreaGeneral(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getAreaGeneral = getAreaGeneral;
var updateActivoByTecnico = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, AS_USU_id, AS_USU_ing, pool, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, AS_USU_id = _req$body.AS_USU_id, AS_USU_ing = _req$body.AS_USU_ing; // validating
          if (!(AS_USU_id == null || AS_USU_ing == null)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: "Favor ingresar Datos Requeridos"
          }));
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context4.sent;
          _context4.next = 9;
          return pool.request().input("id", req.params.id).input("AS_USU_id", _database.sql.VarChar, AS_USU_id).input("AS_USU_ing", _database.sql.VarChar, AS_USU_ing).query(_database.querys.updateActivoByTecnico);
        case 9:
          result = _context4.sent;
          if (!(result.rowsAffected == 1)) {
            _context4.next = 14;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 14:
          return _context4.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 15:
          _context4.next = 21;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](3);
          res.status(500);
          res.send(_context4.t0.message);
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 17]]);
  }));
  return function updateActivoByTecnico(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateActivoByTecnico = updateActivoByTecnico;
var getAreaByTecnico = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getAreaByTecnico);
        case 6:
          result = _context5.sent;
          return _context5.abrupt("return", res.json(result.recordset));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getAreaByTecnico(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getAreaByTecnico = getAreaByTecnico;
var createNewAreaServicio = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body2, AS_SS_id, AS_USU_id, AS_fecha, AS_CLI_id, AS_AT_id, AS_OT_id, AS_OT_codigo, AS_TPS_id, AS_EC_id, AS_UBIC_id, AS_serie, AS_placa, AS_EQUIP_id, AS_LOGO_id, AS_observacionTecnica, AS_USU_ing, AS_Subtotal, AS_impuesto, AS_iva, AS_total, AS_descCliente, AS_descuento, AS_descuentoR, AS_descuentoS, AS_descuentoP, AS_EstadoFactura, AS_Reporte, AS_SC_id, AS_ES_id, AS_IE_id, AS_SEDE_id, AS_fechaReq, AS_semana, AS_numReq, AS_PR_id, AS_UBIC_id2, AS_TPSP_id, AS_VEND_id, AS_serie2, AS_placa2, AS_EQUIP_id2, AS_LOGO_id2, AS_observacion2, AS_EM_id, AS_CT_idOrigen, AS_serieCompresor, pool, codigo, idCT, secuencial, pool2, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, AS_SS_id = _req$body2.AS_SS_id, AS_USU_id = _req$body2.AS_USU_id, AS_fecha = _req$body2.AS_fecha, AS_CLI_id = _req$body2.AS_CLI_id, AS_AT_id = _req$body2.AS_AT_id, AS_OT_id = _req$body2.AS_OT_id, AS_OT_codigo = _req$body2.AS_OT_codigo, AS_TPS_id = _req$body2.AS_TPS_id, AS_EC_id = _req$body2.AS_EC_id, AS_UBIC_id = _req$body2.AS_UBIC_id, AS_serie = _req$body2.AS_serie, AS_placa = _req$body2.AS_placa, AS_EQUIP_id = _req$body2.AS_EQUIP_id, AS_LOGO_id = _req$body2.AS_LOGO_id, AS_observacionTecnica = _req$body2.AS_observacionTecnica, AS_USU_ing = _req$body2.AS_USU_ing, AS_Subtotal = _req$body2.AS_Subtotal, AS_impuesto = _req$body2.AS_impuesto, AS_iva = _req$body2.AS_iva, AS_total = _req$body2.AS_total, AS_descCliente = _req$body2.AS_descCliente, AS_descuento = _req$body2.AS_descuento, AS_descuentoR = _req$body2.AS_descuentoR, AS_descuentoS = _req$body2.AS_descuentoS, AS_descuentoP = _req$body2.AS_descuentoP, AS_EstadoFactura = _req$body2.AS_EstadoFactura, AS_Reporte = _req$body2.AS_Reporte, AS_SC_id = _req$body2.AS_SC_id, AS_ES_id = _req$body2.AS_ES_id, AS_IE_id = _req$body2.AS_IE_id, AS_SEDE_id = _req$body2.AS_SEDE_id, AS_fechaReq = _req$body2.AS_fechaReq, AS_semana = _req$body2.AS_semana, AS_numReq = _req$body2.AS_numReq, AS_PR_id = _req$body2.AS_PR_id, AS_UBIC_id2 = _req$body2.AS_UBIC_id2, AS_TPSP_id = _req$body2.AS_TPSP_id, AS_VEND_id = _req$body2.AS_VEND_id, AS_serie2 = _req$body2.AS_serie2, AS_placa2 = _req$body2.AS_placa2, AS_EQUIP_id2 = _req$body2.AS_EQUIP_id2, AS_LOGO_id2 = _req$body2.AS_LOGO_id2, AS_observacion2 = _req$body2.AS_observacion2, AS_EM_id = _req$body2.AS_EM_id, AS_CT_idOrigen = _req$body2.AS_CT_idOrigen, AS_serieCompresor = _req$body2.AS_serieCompresor;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().query(_database.querys.getLastIdAreaServivio);
        case 7:
          codigo = _context6.sent;
          idCT = 0;
          if (codigo.recordset[0].REQ_id == 0) {
            idCT = 1;
          } else {
            idCT = codigo.recordset[0].REQ_id;
          }
          secuencial = '';
          secuencial = "CT" + idCT;
          _context6.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context6.sent;
          _context6.next = 17;
          return pool2.request().input("AS_secuencial", _database.sql.VarChar, secuencial).input("AS_SS_id", _database.sql.Decimal, AS_SS_id).input("AS_USU_id", _database.sql.Decimal, AS_USU_id).input("AS_fecha", _database.sql.DateTime, AS_fecha).input("AS_CLI_id", _database.sql.Decimal, AS_CLI_id).input("AS_AT_id", _database.sql.Decimal, AS_AT_id).input("AS_OT_id", _database.sql.Decimal, AS_OT_id).input("AS_OT_codigo", _database.sql.VarChar, AS_OT_codigo).input("AS_TPS_id", _database.sql.Decimal, AS_TPS_id).input("AS_EC_id", _database.sql.Decimal, AS_EC_id).input("AS_UBIC_id", _database.sql.Decimal, AS_UBIC_id).input("AS_serie", _database.sql.VarChar, AS_serie).input("AS_placa", _database.sql.VarChar, AS_placa).input("AS_EQUIP_id", _database.sql.Decimal, AS_EQUIP_id).input("AS_LOGO_id", _database.sql.Decimal, AS_LOGO_id).input("AS_observacionTecnica", _database.sql.VarChar, AS_observacionTecnica).input("AS_USU_ing", _database.sql.Decimal, AS_USU_ing).input("AS_Subtotal", _database.sql.Decimal, AS_Subtotal).input("AS_impuesto", _database.sql.Decimal, AS_impuesto).input("AS_iva", _database.sql.Decimal, AS_iva).input("AS_total", _database.sql.Decimal, AS_total).input("AS_descCliente", _database.sql.Decimal, AS_descCliente).input("AS_descuento", _database.sql.Decimal, AS_descuento).input("AS_descuentoR", _database.sql.Decimal, AS_descuentoR).input("AS_descuentoS", _database.sql.Decimal, AS_descuentoS).input("AS_descuentoP", _database.sql.Decimal, AS_descuentoP).input("AS_EstadoFactura", _database.sql.Decimal, AS_EstadoFactura).input("AS_Reporte", _database.sql.VarChar, AS_Reporte).input("AS_SC_id", _database.sql.Decimal, AS_SC_id).input("AS_ES_id", _database.sql.Decimal, AS_ES_id).input("AS_IE_id", _database.sql.Decimal, AS_IE_id).input("AS_SEDE_id", _database.sql.Decimal, AS_SEDE_id).input("AS_fechaReq", _database.sql.DateTime, AS_fechaReq).input("AS_semana", _database.sql.VarChar, AS_semana).input("AS_numReq", _database.sql.VarChar, AS_numReq).input("AS_PR_id", _database.sql.Decimal, AS_PR_id).input("AS_UBIC_id2", _database.sql.Decimal, AS_UBIC_id2).input("AS_TPSP_id", _database.sql.Decimal, AS_TPSP_id).input("AS_VEND_id", _database.sql.Decimal, AS_VEND_id).input("AS_serie2", _database.sql.VarChar, AS_serie2).input("AS_placa2", _database.sql.VarChar, AS_placa2).input("AS_EQUIP_id2", _database.sql.Decimal, AS_EQUIP_id2).input("AS_LOGO_id2", _database.sql.Decimal, AS_LOGO_id2).input("AS_observacion2", _database.sql.VarChar, AS_observacion2).input("AS_EM_id", _database.sql.Decimal, AS_EM_id).input("AS_CT_idOrigen", _database.sql.Decimal, AS_CT_idOrigen).input("AS_serieCompresor", _database.sql.VarChar, AS_serieCompresor).query(_database.querys.addNewAreaServicio);
        case 17:
          result = _context6.sent;
          if (!(result.rowsAffected == 1)) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 22:
          return _context6.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 23:
          _context6.next = 29;
          break;
        case 25:
          _context6.prev = 25;
          _context6.t0 = _context6["catch"](1);
          res.status(500);
          res.send(_context6.t0.message);
        case 29:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 25]]);
  }));
  return function createNewAreaServicio(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.createNewAreaServicio = createNewAreaServicio;
var getAreaServicioMovimiento = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context7.sent;
          _context7.next = 6;
          return pool.request().query(_database.querys.getAreaByMovimiento);
        case 6:
          result = _context7.sent;
          return _context7.abrupt("return", res.json(result.recordset[0]));
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          res.status(500);
          res.send(_context7.t0.message);
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getAreaServicioMovimiento(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getAreaServicioMovimiento = getAreaServicioMovimiento;
var getAreaServicioMantenimiento = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getAreaByMantenimiento);
        case 6:
          result = _context8.sent;
          return _context8.abrupt("return", res.json(result.recordset[0]));
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          res.status(500);
          res.send(_context8.t0.message);
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function getAreaServicioMantenimiento(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getAreaServicioMantenimiento = getAreaServicioMantenimiento;
var getReporteGeneral = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getReporteGeneralSabana);
        case 6:
          result = _context9.sent;
          return _context9.abrupt("return", res.json(result.recordset));
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getReporteGeneral(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getReporteGeneral = getReporteGeneral;
var createNewAreaServicioByRequerimiento = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var pool, codigo, idC, secuencial, AS_ES_id, AS_EM_id, pool2, result2, idAS, i, pool3, result3;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context10.sent;
          _context10.next = 6;
          return pool.request().query(_database.querys.getLastIdAreaServivio);
        case 6:
          codigo = _context10.sent;
          idC = 0;
          if (codigo.recordset[0].AS_id == 0) {
            idC = 1;
          } else {
            idC = codigo.recordset[0].AS_id;
          }
          secuencial = '';
          secuencial = "CT" + idC;
          console.log(secuencial);
          AS_ES_id = 0;
          AS_EM_id = 0;
          if (req.body.REQ_SS_id == 2) {
            AS_ES_id = 1;
            AS_EM_id = 10;
          } else {
            AS_ES_id = 4;
            AS_EM_id = 10;
          }
          console.log(req.body);
          _context10.next = 18;
          return (0, _database.getConnection)();
        case 18:
          pool2 = _context10.sent;
          _context10.next = 21;
          return pool2.request().input("AS_secuencial", _database.sql.VarChar, secuencial).input("AS_SS_id", _database.sql.Decimal, req.body.REQ_SS_id).input("AS_USU_id", _database.sql.Decimal, req.body.REQ_USU_id).input("AS_CLI_id", _database.sql.Decimal, req.body.REQ_CLI_id).input("AS_TPS_id", _database.sql.Decimal, req.body.REQ_TPS_id).input("AS_UBIC_id", _database.sql.Decimal, req.body.REQ_UBIC_id).input("AS_serie", _database.sql.VarChar, req.body.REQ_serie).input("AS_placa", _database.sql.VarChar, req.body.REQ_placa).input("AS_EQUIP_id", _database.sql.Decimal, req.body.REQ_EQUIP_id).input("AS_observacionTecnica", _database.sql.VarChar, req.body.REQ_observacionTecnica).input("AS_USU_ing", _database.sql.Decimal, req.body.id).input("AS_Subtotal", _database.sql.Decimal(18, 2), req.body.REQ_SubTotal).input("AS_iva", _database.sql.Decimal(18, 2), req.body.REQ_IVA).input("AS_total", _database.sql.Decimal(18, 2), req.body.REQ_total).input("AS_fechaIngreso", _database.sql.DateTime, req.body.REQ_fechaVisita).input("AS_Reporte", _database.sql.VarChar, req.body.REQ_codigo).input("AS_ES_id", _database.sql.Decimal, AS_ES_id).input("AS_fechaReq", _database.sql.DateTime, req.body.REQ_fecha).input("AS_EM_id", _database.sql.Decimal, AS_EM_id).input("AS_USU_edit", _database.sql.Decimal, req.body.id).input("AS_REQ_id", _database.sql.Decimal, req.body.REQ_id).query(_database.querys.addNewAreaServicioByReq);
        case 21:
          result2 = _context10.sent;
          console.log(result2);
          if (!(result2.rowsAffected[0] == 1)) {
            _context10.next = 40;
            break;
          }
          idAS = result2.recordset[0].AS_id;
          if (!(req.body.REQ_detalles.length > 0)) {
            _context10.next = 37;
            break;
          }
          i = 0;
        case 27:
          if (!(i < req.body.REQ_detalles.length)) {
            _context10.next = 37;
            break;
          }
          _context10.next = 30;
          return (0, _database.getConnection)();
        case 30:
          pool3 = _context10.sent;
          _context10.next = 33;
          return pool3.request().input("AS_DET_AS_id", _database.sql.Decimal, idAS).input("AS_DET_PROD_id", _database.sql.Decimal, req.body.REQ_detalles[i].REQDET_PROD_id).input("AS_DET_PROD_codigo", _database.sql.VarChar, req.body.REQ_detalles[i].PROD_item).input("AS_DET_PROD_descripcion", _database.sql.VarChar, req.body.REQ_detalles[i].PROD_nombre).input("AS_DET_cantidad", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_cantidad).input("AS_DET_costoU", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_pvp).input("AS_DET_pvp", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_pvp).input("AS_DET_pminimo", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_pvp).input("AS_DET_USU_ing", _database.sql.Decimal, req.body.id).input("AS_DET_pvp2", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_pvp).input("AS_DET_total", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_total).input("AS_DET_cantidadIngreso", _database.sql.Decimal(18, 2), req.body.REQ_detalles[i].REQDET_cantidad).query(_database.querys.addNewAreaServicioDetalle);
        case 33:
          result3 = _context10.sent;
        case 34:
          i++;
          _context10.next = 27;
          break;
        case 37:
          return _context10.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0,
            codigo: secuencial
          }));
        case 40:
          return _context10.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0,
            codigo: ''
          }));
        case 41:
          _context10.next = 47;
          break;
        case 43:
          _context10.prev = 43;
          _context10.t0 = _context10["catch"](0);
          res.status(500);
          res.send(_context10.t0.message);
        case 47:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 43]]);
  }));
  return function createNewAreaServicioByRequerimiento(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.createNewAreaServicioByRequerimiento = createNewAreaServicioByRequerimiento;
var getCotizaciones = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context11.sent;
          _context11.next = 6;
          return pool.request().query(_database.querys.getCotizaciones);
        case 6:
          result = _context11.sent;
          return _context11.abrupt("return", res.json(result.recordset));
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          res.status(500);
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return function getCotizaciones(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getCotizaciones = getCotizaciones;
var getCTByTecnico = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getCotizacionByTecnico);
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
  return function getCTByTecnico(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getCTByTecnico = getCTByTecnico;