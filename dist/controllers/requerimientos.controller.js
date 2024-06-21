"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRquerimientosPadre = exports.getRequerimientosActivosXtecnico = exports.getRequerimientosActivos = exports.getReparacionesActivosXtecnico = exports.getAllRequerimientos = exports.editRequerimientosVisitaTecnica = exports.editRequerimientosReparacion = exports.editRequerimientosAprobacion = exports.editRequerimientos = exports.createRequerimientos = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var jwt = require('jsonwebtoken');
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
var getRequerimientosActivos = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getRequerimientosActivos);
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
  return function getRequerimientosActivos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getRequerimientosActivos = getRequerimientosActivos;
var createRequerimientos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var pool, codigo, idR, secuencial, totalDetalle, ivaDetalle, totalFinalDetalle, i, pool2, result, idReq, _i, pool3, _result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().query(_database.querys.getLastIdRequerimiento);
        case 6:
          codigo = _context3.sent;
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
          _context3.next = 17;
          return (0, _database.getConnection)();
        case 17:
          pool2 = _context3.sent;
          _context3.next = 20;
          return pool2.request().input("REQ_codigo", _database.sql.VarChar, secuencial).input("REQ_personaReporta", _database.sql.VarChar, req.body.PersonaR).input("REQ_fecha", _database.sql.DateTime, req.body.FechaReq).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_CLI_id", _database.sql.Decimal, req.body.Cliente).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("REQ_observacion", _database.sql.VarChar, req.body.Observacion).input("REQ_ubicacionMaps", _database.sql.VarChar, req.body.Maps).input("REQ_SS_id", _database.sql.Decimal, req.body.Servicio).input("REQ_USU_id", _database.sql.Decimal, req.body.TecnicoChofer).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_ing", _database.sql.Decimal, req.body.id).input("REQ_REQ_Padre", _database.sql.Decimal, req.body.idPadre).input("REQ_estado", _database.sql.Decimal, req.body.aprobado).query(_database.querys.addRequerimiento);
        case 20:
          result = _context3.sent;
          if (!(result.rowsAffected[0] == 1)) {
            _context3.next = 38;
            break;
          }
          idReq = result.recordset[0].REQ_id;
          if (!(req.body.details.length > 0)) {
            _context3.next = 35;
            break;
          }
          _i = 0;
        case 25:
          if (!(_i < req.body.details.length)) {
            _context3.next = 35;
            break;
          }
          _context3.next = 28;
          return (0, _database.getConnection)();
        case 28:
          pool3 = _context3.sent;
          _context3.next = 31;
          return pool3.request().input("REQDET_REQ_id", _database.sql.Decimal, idReq).input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i].qty * req.body.details[_i].salesPrice).query(_database.querys.addNewRequerimientoDetalle);
        case 31:
          _result = _context3.sent;
        case 32:
          _i++;
          _context3.next = 25;
          break;
        case 35:
          return _context3.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 38:
          return _context3.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 39:
          _context3.next = 45;
          break;
        case 41:
          _context3.prev = 41;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 45:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 41]]);
  }));
  return function createRequerimientos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createRequerimientos = createRequerimientos;
var editRequerimientos = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var subtotal, iva, total, totalDetalle, ivaDetalle, totalFinalDetalle, i, pool, result, pool2, result2, _i2, pool3, result3, _i3, _pool, _result2;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          subtotal = 0, iva = 0, total = 0;
          _context4.prev = 1;
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
          _context4.next = 8;
          return (0, _database.getConnection)();
        case 8:
          pool = _context4.sent;
          _context4.next = 11;
          return pool.request().input("id", req.params.id).input("REQ_fecha", _database.sql.DateTime, req.body.FechaReq).input("REQ_SS_id", _database.sql.VarChar, req.body.Servicio).input("REQ_personaReporta", _database.sql.VarChar, req.body.PersonaR).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_CLI_id", _database.sql.Decimal, req.body.Cliente).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("REQ_observacion", _database.sql.VarChar, req.body.Observacion).input("REQ_ubicacionMaps", _database.sql.VarChar, req.body.Maps).input("REQ_USU_id", _database.sql.Decimal, req.body.TecnicoChofer).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).query(_database.querys.editRequerimiento);
        case 11:
          result = _context4.sent;
          if (!(result.rowsAffected == 1)) {
            _context4.next = 49;
            break;
          }
          _context4.next = 15;
          return (0, _database.getConnection)();
        case 15:
          pool2 = _context4.sent;
          _context4.next = 18;
          return pool2.request().input("REQDET_REQ_id", req.params.id).query(_database.querys.cambiarEstadoRequerimientoDetalle);
        case 18:
          result2 = _context4.sent;
          if (!(result2.rowsAffected > 0)) {
            _context4.next = 34;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context4.next = 32;
            break;
          }
          _i2 = 0;
        case 22:
          if (!(_i2 < req.body.details.length)) {
            _context4.next = 32;
            break;
          }
          _context4.next = 25;
          return (0, _database.getConnection)();
        case 25:
          pool3 = _context4.sent;
          _context4.next = 28;
          return pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i2].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i2].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i2].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i2].qty * req.body.details[_i2].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 28:
          result3 = _context4.sent;
        case 29:
          _i2++;
          _context4.next = 22;
          break;
        case 32:
          _context4.next = 46;
          break;
        case 34:
          if (!(req.body.details.length > 0)) {
            _context4.next = 46;
            break;
          }
          _i3 = 0;
        case 36:
          if (!(_i3 < req.body.details.length)) {
            _context4.next = 46;
            break;
          }
          _context4.next = 39;
          return (0, _database.getConnection)();
        case 39:
          _pool = _context4.sent;
          _context4.next = 42;
          return _pool.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i3].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i3].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i3].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i3].qty * req.body.details[_i3].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 42:
          _result2 = _context4.sent;
        case 43:
          _i3++;
          _context4.next = 36;
          break;
        case 46:
          return _context4.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 49:
          return _context4.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 50:
          _context4.next = 56;
          break;
        case 52:
          _context4.prev = 52;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send(_context4.t0.message);
        case 56:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 52]]);
  }));
  return function editRequerimientos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.editRequerimientos = editRequerimientos;
var editRequerimientosVisitaTecnica = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pool, totalDetalle, ivaDetalle, totalFinalDetalle, i, result, pool2, result2, _i4, pool3, result3, _i5, _pool2, _result3;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
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
          _context5.next = 10;
          return pool.request().input("id", req.params.id).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_observacionTecnica", _database.sql.VarChar, req.body.Observacion).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).query(_database.querys.editRequerimientoVisitaTecnica);
        case 10:
          result = _context5.sent;
          if (!(result.rowsAffected == 1)) {
            _context5.next = 48;
            break;
          }
          _context5.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context5.sent;
          _context5.next = 17;
          return pool2.request().input("REQDET_REQ_id", req.params.id).query(_database.querys.cambiarEstadoRequerimientoDetalle);
        case 17:
          result2 = _context5.sent;
          if (!(result2.rowsAffected > 0)) {
            _context5.next = 33;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context5.next = 31;
            break;
          }
          _i4 = 0;
        case 21:
          if (!(_i4 < req.body.details.length)) {
            _context5.next = 31;
            break;
          }
          _context5.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context5.sent;
          _context5.next = 27;
          return pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i4].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i4].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i4].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i4].qty * req.body.details[_i4].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 27:
          result3 = _context5.sent;
        case 28:
          _i4++;
          _context5.next = 21;
          break;
        case 31:
          _context5.next = 45;
          break;
        case 33:
          if (!(req.body.details.length > 0)) {
            _context5.next = 45;
            break;
          }
          _i5 = 0;
        case 35:
          if (!(_i5 < req.body.details.length)) {
            _context5.next = 45;
            break;
          }
          _context5.next = 38;
          return (0, _database.getConnection)();
        case 38:
          _pool2 = _context5.sent;
          _context5.next = 41;
          return _pool2.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i5].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i5].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i5].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i5].qty * req.body.details[_i5].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 41:
          _result3 = _context5.sent;
        case 42:
          _i5++;
          _context5.next = 35;
          break;
        case 45:
          return _context5.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 48:
          return _context5.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 49:
          _context5.next = 55;
          break;
        case 51:
          _context5.prev = 51;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 55:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 51]]);
  }));
  return function editRequerimientosVisitaTecnica(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.editRequerimientosVisitaTecnica = editRequerimientosVisitaTecnica;
var editRequerimientosAprobacion = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context6.sent;
          _context6.next = 6;
          return pool.request().input("id", req.params.id).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).input("REQ_estado", _database.sql.Decimal, req.body.estado).query(_database.querys.editRequerimientoAprobacion);
        case 6:
          result = _context6.sent;
          if (!(result.rowsAffected == 1)) {
            _context6.next = 11;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 11:
          return _context6.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context6.next = 18;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.send(_context6.t0.message);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return function editRequerimientosAprobacion(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.editRequerimientosAprobacion = editRequerimientosAprobacion;
var getRequerimientosActivosXtecnico = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getRequerimientosActivosXtec);
        case 6:
          result = _context7.sent;
          return _context7.abrupt("return", res.json(result.recordset));
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
  return function getRequerimientosActivosXtecnico(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getRequerimientosActivosXtecnico = getRequerimientosActivosXtecnico;
var getReparacionesActivosXtecnico = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getReparacionesActivosXtec);
        case 6:
          result = _context8.sent;
          return _context8.abrupt("return", res.json(result.recordset));
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
  return function getReparacionesActivosXtecnico(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getReparacionesActivosXtecnico = getReparacionesActivosXtecnico;
var editRequerimientosReparacion = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var pool, totalDetalle, ivaDetalle, totalFinalDetalle, i, result, pool2, result2, _i6, pool3, result3, _i7, _pool3, _result4;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context9.sent;
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
          _context9.next = 10;
          return pool.request().input("id", req.params.id).input("REQ_TPS_id", _database.sql.Decimal, req.body.TipoServicio).input("REQ_serie", _database.sql.VarChar, req.body.Serie).input("REQ_placa", _database.sql.VarChar, req.body.Placa).input("REQ_EQUIP_id", _database.sql.Decimal, req.body.Modelo).input("REQ_contacto", _database.sql.VarChar, req.body.Subcliente).input("REQ_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.Telefono).input("REQ_direccion", _database.sql.VarChar, req.body.Direccion).input("REQ_observacionTecnica", _database.sql.VarChar, req.body.Observacion).input("REQ_SubTotal", _database.sql.Decimal(18, 2), totalDetalle).input("REQ_IVA", _database.sql.Decimal(18, 2), ivaDetalle).input("REQ_total", _database.sql.Decimal(18, 2), totalFinalDetalle).input("REQ_USU_edit", _database.sql.Decimal, req.body.id).query(_database.querys.editRequerimientoReparacion);
        case 10:
          result = _context9.sent;
          if (!(result.rowsAffected == 1)) {
            _context9.next = 48;
            break;
          }
          _context9.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context9.sent;
          _context9.next = 17;
          return pool2.request().input("REQDET_REQ_id", req.params.id).query(_database.querys.cambiarEstadoRequerimientoDetalle);
        case 17:
          result2 = _context9.sent;
          if (!(result2.rowsAffected > 0)) {
            _context9.next = 33;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context9.next = 31;
            break;
          }
          _i6 = 0;
        case 21:
          if (!(_i6 < req.body.details.length)) {
            _context9.next = 31;
            break;
          }
          _context9.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context9.sent;
          _context9.next = 27;
          return pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i6].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i6].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i6].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i6].qty * req.body.details[_i6].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 27:
          result3 = _context9.sent;
        case 28:
          _i6++;
          _context9.next = 21;
          break;
        case 31:
          _context9.next = 45;
          break;
        case 33:
          if (!(req.body.details.length > 0)) {
            _context9.next = 45;
            break;
          }
          _i7 = 0;
        case 35:
          if (!(_i7 < req.body.details.length)) {
            _context9.next = 45;
            break;
          }
          _context9.next = 38;
          return (0, _database.getConnection)();
        case 38:
          _pool3 = _context9.sent;
          _context9.next = 41;
          return _pool3.request().input("REQDET_PROD_id", _database.sql.Decimal, req.body.details[_i7].productName).input("REQDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i7].qty).input("REQDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i7].salesPrice).input("REQDET_total", _database.sql.Decimal(18, 2), req.body.details[_i7].qty * req.body.details[_i7].salesPrice).input("REQDET_REQ_id", _database.sql.Decimal, req.params.id).query(_database.querys.addNewRequerimientoDetalle);
        case 41:
          _result4 = _context9.sent;
        case 42:
          _i7++;
          _context9.next = 35;
          break;
        case 45:
          return _context9.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 48:
          return _context9.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 49:
          _context9.next = 55;
          break;
        case 51:
          _context9.prev = 51;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
          res.send(_context9.t0.message);
        case 55:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 51]]);
  }));
  return function editRequerimientosReparacion(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.editRequerimientosReparacion = editRequerimientosReparacion;
var getRquerimientosPadre = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getRequerimientosHijos);
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
  return function getRquerimientosPadre(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getRquerimientosPadre = getRquerimientosPadre;