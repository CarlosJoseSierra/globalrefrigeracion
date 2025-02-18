"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEquipoInventory = exports.getVentasActivosPorBrandeo = exports.getVentasActivos = exports.getVentaById = exports.getInventarioTotal = exports.getInventarioByIdEquipo = exports.getImagenEquipoByVenta = exports.getDetalleVentasEquipos = exports.getDetalleVentasBrandeos = exports.getBrandeosPorPegar = exports.getAllVentas = exports.getAllBrandeosVenta = exports.editVentas = exports.editVentaPorRevisionBodega = exports.editVentaPorPegadoBrandeo = exports.editVentaPorNumEnsamble = exports.editVentaPorNoAprobacion = exports.editVentaPorLaminadoBrandeo = exports.editVentaPorImpresionBrandeo = exports.editVentaPorEntregadoBrandeo = exports.editVentaPorDiseno = exports.editVentaPorCorteBrandeo = exports.editVentaPorConfirmadoBrandeo = exports.editVentaPorCierreCaso = exports.editVentaPorCerrarBrandeo = exports.editVentaPorAprobacion = exports.createventas = exports.createImageEquipoPegado = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cloudinary = require("../libs/cloudinary");
var getAllVentas = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getAllVentas);
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
  return function getAllVentas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllVentas = getAllVentas;
var getAllBrandeosVenta = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getAllBrandeosVenta);
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
  return function getAllBrandeosVenta(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllBrandeosVenta = getAllBrandeosVenta;
var getVentasActivos = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getVentasActivos);
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
  return function getVentasActivos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getVentasActivos = getVentasActivos;
var getVentasActivosPorBrandeo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().query(_database.querys.getVentasActivosPorBrandeo);
        case 6:
          result = _context4.sent;
          res.json(result.recordset);
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send(_context4.t0.message);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function getVentasActivosPorBrandeo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getVentasActivosPorBrandeo = getVentasActivosPorBrandeo;
var getBrandeosPorPegar = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getBrandeosPorPegar);
        case 6:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 14;
          break;
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
  return function getBrandeosPorPegar(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getBrandeosPorPegar = getBrandeosPorPegar;
var getDetalleVentasEquipos = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getDetalleVentasEquiposById);
        case 6:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.send(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getDetalleVentasEquipos(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getDetalleVentasEquipos = getDetalleVentasEquipos;
var getDetalleVentasBrandeos = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getDetalleBrandeoByIdVenta);
        case 6:
          result = _context7.sent;
          res.json(result.recordset);
          _context7.next = 14;
          break;
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
  return function getDetalleVentasBrandeos(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getDetalleVentasBrandeos = getDetalleVentasBrandeos;
var createventas = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var pool, codigo, idR, brandeo, i, secuencial, pool2, result, idVenta, _i, pool3, _result, laminado, _i2, _pool, _result2, _laminado, _i3, _pool2, _result3;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context8.sent;
          _context8.next = 6;
          return pool.request().query(_database.querys.getLastIdVenta);
        case 6:
          codigo = _context8.sent;
          idR = 0;
          brandeo = 0;
          if (codigo.recordset[0].VENT_id == 0) {
            idR = 1;
          } else {
            idR = codigo.recordset[0].VENT_id;
          }
          if (req.body.detailsModelo.length > 0) {
            for (i = 0; i < req.body.detailsModelo.length; i++) {
              if (req.body.detailsModelo[i].productName != 34) {
                //es 34 prque es el ID del no brandeo
                brandeo = 1;
              }
            }
          }
          secuencial = '';
          secuencial = "VENTA" + idR;
          _context8.next = 15;
          return (0, _database.getConnection)();
        case 15:
          pool2 = _context8.sent;
          _context8.next = 18;
          return pool2.request().input("VENT_codigo", _database.sql.VarChar, secuencial).input("VENT_fecha", _database.sql.DateTime, req.body.FechaVenta).input("VENT_CLI_id", _database.sql.Decimal, req.body.Cliente).input("VENT_observacion", _database.sql.VarChar, req.body.Observacion).input("VENT_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("VENT_contacto", _database.sql.VarChar, req.body.Subcliente).input("VENT_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("VENT_direccion", _database.sql.VarChar, req.body.Direccion).input("VENT_telefono", _database.sql.VarChar, req.body.Telefono).input("VENT_brandeoEquipo", _database.sql.Decimal, brandeo).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_SubTotal", _database.sql.Decimal(18, 2), req.body.SubtotalCopia).input("VENT_IVA", _database.sql.Decimal(18, 2), req.body.IVACopia).input("VENT_total", _database.sql.Decimal(18, 2), req.body.TotalCopia).input("VENT_MovEntrega", _database.sql.Decimal, req.body.entrega).input("VENT_tipoVenta", _database.sql.Decimal, req.body.tipoVenta).query(_database.querys.addVenta);
        case 18:
          result = _context8.sent;
          if (!(result.rowsAffected[0] == 1)) {
            _context8.next = 64;
            break;
          }
          idVenta = result.recordset[0].VENT_id;
          if (!(req.body.details.length > 0)) {
            _context8.next = 33;
            break;
          }
          _i = 0;
        case 23:
          if (!(_i < req.body.details.length)) {
            _context8.next = 33;
            break;
          }
          _context8.next = 26;
          return (0, _database.getConnection)();
        case 26:
          pool3 = _context8.sent;
          _context8.next = 29;
          return pool3.request().input("VENTDET_VENT_id", _database.sql.Decimal, idVenta).input("VENTDET_PROD_id", _database.sql.Decimal, req.body.details[_i].productName).input("VENTDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i].qty).input("VENTDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i].salesPrice).input("VENTDET_total", _database.sql.Decimal(18, 2), req.body.details[_i].totalCopia).input("VENTDET_EQC_id", _database.sql.Decimal, req.body.details[_i].idCopia).input("VENTDET_EQC_serie", _database.sql.VarChar, req.body.details[_i].serieCopia).query(_database.querys.addNewVentaDetalle);
        case 29:
          _result = _context8.sent;
        case 30:
          _i++;
          _context8.next = 23;
          break;
        case 33:
          if (!(req.body.detailsModelo.length > 0)) {
            _context8.next = 47;
            break;
          }
          laminado = 0;
          _i2 = 0;
        case 36:
          if (!(_i2 < req.body.detailsModelo.length)) {
            _context8.next = 47;
            break;
          }
          if (req.body.detailsModelo[_i2].matSlideB == 1) {
            laminado = 1;
          } else {
            laminado = 0;
          }
          _context8.next = 40;
          return (0, _database.getConnection)();
        case 40:
          _pool = _context8.sent;
          _context8.next = 43;
          return _pool.request().input("EQVENT_VENT_id", _database.sql.Decimal, idVenta).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i2].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i2].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i2].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i2].productName).input("EQVENT_laminado", _database.sql.Decimal, laminado) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i2].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).query(_database.querys.addNewVentaEquipo);
        case 43:
          _result2 = _context8.sent;
        case 44:
          _i2++;
          _context8.next = 36;
          break;
        case 47:
          if (!(req.body.detailsBrandeo.length > 0)) {
            _context8.next = 61;
            break;
          }
          _laminado = 0;
          _i3 = 0;
        case 50:
          if (!(_i3 < req.body.detailsBrandeo.length)) {
            _context8.next = 61;
            break;
          }
          if (req.body.detailsBrandeo[_i3].matSlideB == 1) {
            _laminado = 1;
          } else {
            _laminado = 0;
          }
          _context8.next = 54;
          return (0, _database.getConnection)();
        case 54:
          _pool2 = _context8.sent;
          _context8.next = 57;
          return _pool2.request().input("EQBRAND_VENT_id", _database.sql.Decimal, idVenta).input("EQBRAND_EQUIP_id", _database.sql.Decimal, req.body.detailsBrandeo[_i3].modelname).input("EQBRAND_BRAND_id", _database.sql.Decimal, req.body.detailsBrandeo[_i3].productName).input("EQBRAND_laminado", _database.sql.Decimal, _laminado) //verificar si llega 0 o 1
          .input("EQBRAND_cantidad", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i3].qtyB).input("EQBRAND_precio", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i3].salesPriceB).input("EQBRAND_total", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i3].qtyB * req.body.detailsBrandeo[_i3].salesPriceB).query(_database.querys.addNewVentaBrandeo);
        case 57:
          _result3 = _context8.sent;
        case 58:
          _i3++;
          _context8.next = 50;
          break;
        case 61:
          return _context8.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 64:
          return _context8.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 65:
          _context8.next = 71;
          break;
        case 67:
          _context8.prev = 67;
          _context8.t0 = _context8["catch"](0);
          res.status(500);
          res.send(_context8.t0.message);
        case 71:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 67]]);
  }));
  return function createventas(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.createventas = createventas;
var editVentas = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var totalDetalle, totalDetalleModelo, totalDetalleBrandeo, totalFinal, ivaDetalle, totalFinalDetalle, brandeo, pool, result, pool2, result2, i, pool3, result3, laminado, _i4, _pool3, _result4, _pool4, _result5, _laminado2, _i5, _pool5, _result6, _i6, _pool6, _result7, _laminado3, _i7, _pool7, _result8, _pool8, _result9, _laminado4, _i8, _pool9, _result10;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          totalDetalle = 0;
          totalDetalleModelo = 0;
          totalDetalleBrandeo = 0;
          totalFinal = 0;
          ivaDetalle = 0;
          totalFinalDetalle = 0;
          brandeo = 0;
          _context9.next = 10;
          return (0, _database.getConnection)();
        case 10:
          pool = _context9.sent;
          _context9.next = 13;
          return pool.request().input("id", req.params.id).input("VENT_fecha", _database.sql.DateTime, req.body.FechaVenta).input("VENT_CLI_id", _database.sql.Decimal, req.body.Cliente).input("VENT_observacion", _database.sql.VarChar, req.body.Observacion).input("VENT_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("VENT_contacto", _database.sql.VarChar, req.body.Subcliente).input("VENT_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("VENT_direccion", _database.sql.VarChar, req.body.Direccion).input("VENT_telefono", _database.sql.VarChar, req.body.Telefono).input("VENT_brandeoEquipo", _database.sql.Decimal, brandeo).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_SubTotal", _database.sql.Decimal(18, 2), req.body.SubtotalCopia).input("VENT_IVA", _database.sql.Decimal(18, 2), req.body.IVACopia).input("VENT_total", _database.sql.Decimal(18, 2), req.body.TotalCopia).input("VENT_MovEntrega", _database.sql.Decimal, req.body.entrega).query(_database.querys.editVentas);
        case 13:
          result = _context9.sent;
          if (!(result.rowsAffected == 1)) {
            _context9.next = 127;
            break;
          }
          _context9.next = 17;
          return (0, _database.getConnection)();
        case 17:
          pool2 = _context9.sent;
          _context9.next = 20;
          return pool2.request().input("VENTDET_VENT_id", req.params.id).query(_database.querys.cambiarEstadoVentasDetalle);
        case 20:
          result2 = _context9.sent;
          if (!(result2.rowsAffected > 0)) {
            _context9.next = 74;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context9.next = 34;
            break;
          }
          i = 0;
        case 24:
          if (!(i < req.body.details.length)) {
            _context9.next = 34;
            break;
          }
          _context9.next = 27;
          return (0, _database.getConnection)();
        case 27:
          pool3 = _context9.sent;
          _context9.next = 30;
          return pool3.request().input("VENTDET_VENT_id", _database.sql.Decimal, req.params.id).input("VENTDET_PROD_id", _database.sql.Decimal, req.body.details[i].productName).input("VENTDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[i].qty).input("VENTDET_pvp", _database.sql.Decimal(18, 2), req.body.details[i].salesPrice).input("VENTDET_total", _database.sql.Decimal(18, 2), req.body.details[i].totalCopia).input("VENTDET_EQC_id", _database.sql.Decimal, req.body.details[i].idCopia).input("VENTDET_EQC_serie", _database.sql.VarChar, req.body.details[i].serieCopia).query(_database.querys.addNewVentaDetalle);
        case 30:
          result3 = _context9.sent;
        case 31:
          i++;
          _context9.next = 24;
          break;
        case 34:
          if (!(req.body.detailsModelo.length > 0)) {
            _context9.next = 58;
            break;
          }
          console.log(req.body.detailsModelo);
          laminado = 0;
          _i4 = 0;
        case 38:
          if (!(_i4 < req.body.detailsModelo.length)) {
            _context9.next = 58;
            break;
          }
          if (req.body.detailsModelo[_i4].matSlideB == 1) {
            laminado = 1;
          } else {
            laminado = 0;
          }
          if (!(req.body.detailsModelo[_i4].estado == 6)) {
            _context9.next = 49;
            break;
          }
          _context9.next = 43;
          return (0, _database.getConnection)();
        case 43:
          _pool3 = _context9.sent;
          _context9.next = 46;
          return _pool3.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i4].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i4].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i4].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i4].productName).input("EQVENT_laminado", _database.sql.Decimal, laminado) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i4].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).query(_database.querys.addNewVentaEquipo2);
        case 46:
          _result4 = _context9.sent;
          _context9.next = 55;
          break;
        case 49:
          _context9.next = 51;
          return (0, _database.getConnection)();
        case 51:
          _pool4 = _context9.sent;
          _context9.next = 54;
          return _pool4.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i4].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i4].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i4].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i4].productName).input("EQVENT_laminado", _database.sql.Decimal, laminado) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i4].salesPriceB).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i4].salesPriceB).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).query(_database.querys.addNewVentaEquipo);
        case 54:
          _result5 = _context9.sent;
        case 55:
          _i4++;
          _context9.next = 38;
          break;
        case 58:
          if (!(req.body.detailsBrandeo.length > 0)) {
            _context9.next = 72;
            break;
          }
          _laminado2 = 0;
          _i5 = 0;
        case 61:
          if (!(_i5 < req.body.detailsBrandeo.length)) {
            _context9.next = 72;
            break;
          }
          if (req.body.detailsBrandeo[_i5].matSlideB == 1) {
            _laminado2 = 1;
          } else {
            _laminado2 = 0;
          }
          _context9.next = 65;
          return (0, _database.getConnection)();
        case 65:
          _pool5 = _context9.sent;
          _context9.next = 68;
          return _pool5.request().input("EQBRAND_VENT_id", _database.sql.Decimal, req.params.id).input("EQBRAND_EQUIP_id", _database.sql.Decimal, req.body.detailsBrandeo[_i5].modelname).input("EQBRAND_BRAND_id", _database.sql.Decimal, req.body.detailsBrandeo[_i5].productName).input("EQBRAND_laminado", _database.sql.Decimal, _laminado2) //verificar si llega 0 o 1
          .input("EQBRAND_cantidad", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i5].qtyB).input("EQBRAND_precio", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i5].salesPriceB).input("EQBRAND_total", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i5].qtyB * req.body.detailsBrandeo[_i5].salesPriceB).query(_database.querys.addNewVentaBrandeo);
        case 68:
          _result6 = _context9.sent;
        case 69:
          _i5++;
          _context9.next = 61;
          break;
        case 72:
          _context9.next = 124;
          break;
        case 74:
          if (!(req.body.details.length > 0)) {
            _context9.next = 86;
            break;
          }
          _i6 = 0;
        case 76:
          if (!(_i6 < req.body.details.length)) {
            _context9.next = 86;
            break;
          }
          _context9.next = 79;
          return (0, _database.getConnection)();
        case 79:
          _pool6 = _context9.sent;
          _context9.next = 82;
          return _pool6.request().input("VENTDET_VENT_id", _database.sql.Decimal, req.params.id).input("VENTDET_PROD_id", _database.sql.Decimal, req.body.details[_i6].productName).input("VENTDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i6].qty).input("VENTDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i6].salesPrice).input("VENTDET_total", _database.sql.Decimal(18, 2), req.body.details[_i6].qty * req.body.details[_i6].salesPrice).query(_database.querys.addNewVentaDetalle);
        case 82:
          _result7 = _context9.sent;
        case 83:
          _i6++;
          _context9.next = 76;
          break;
        case 86:
          if (!(req.body.detailsModelo.length > 0)) {
            _context9.next = 110;
            break;
          }
          console.log(req.body.detailsModelo);
          _laminado3 = 0;
          _i7 = 0;
        case 90:
          if (!(_i7 < req.body.detailsModelo.length)) {
            _context9.next = 110;
            break;
          }
          if (req.body.detailsModelo[_i7].matSlideB == 1) {
            _laminado3 = 1;
          } else {
            _laminado3 = 0;
          }
          if (!(req.body.detailsModelo[_i7].estado == 6)) {
            _context9.next = 101;
            break;
          }
          _context9.next = 95;
          return (0, _database.getConnection)();
        case 95:
          _pool7 = _context9.sent;
          _context9.next = 98;
          return _pool7.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i7].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i7].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i7].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i7].productName).input("EQVENT_laminado", _database.sql.Decimal, _laminado3) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i7].salesPriceB).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i7].salesPriceB).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).query(_database.querys.addNewVentaEquipo2);
        case 98:
          _result8 = _context9.sent;
          _context9.next = 107;
          break;
        case 101:
          _context9.next = 103;
          return (0, _database.getConnection)();
        case 103:
          _pool8 = _context9.sent;
          _context9.next = 106;
          return _pool8.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i7].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i7].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i7].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i7].productName).input("EQVENT_laminado", _database.sql.Decimal, _laminado3) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i7].salesPriceB).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i7].salesPriceB).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).query(_database.querys.addNewVentaEquipo);
        case 106:
          _result9 = _context9.sent;
        case 107:
          _i7++;
          _context9.next = 90;
          break;
        case 110:
          if (!(req.body.detailsBrandeo.length > 0)) {
            _context9.next = 124;
            break;
          }
          _laminado4 = 0;
          _i8 = 0;
        case 113:
          if (!(_i8 < req.body.detailsBrandeo.length)) {
            _context9.next = 124;
            break;
          }
          if (req.body.detailsBrandeo[_i8].matSlideB == 1) {
            _laminado4 = 1;
          } else {
            _laminado4 = 0;
          }
          _context9.next = 117;
          return (0, _database.getConnection)();
        case 117:
          _pool9 = _context9.sent;
          _context9.next = 120;
          return _pool9.request().input("EQBRAND_VENT_id", _database.sql.Decimal, req.params.id).input("EQBRAND_EQUIP_id", _database.sql.Decimal, req.body.detailsBrandeo[_i8].modelname).input("EQBRAND_BRAND_id", _database.sql.Decimal, req.body.detailsBrandeo[_i8].productName).input("EQBRAND_laminado", _database.sql.Decimal, _laminado4) //verificar si llega 0 o 1
          .input("EQBRAND_cantidad", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i8].qtyB).input("EQBRAND_precio", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i8].salesPriceB).input("EQBRAND_total", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i8].qtyB * req.body.detailsBrandeo[_i8].salesPriceB).query(_database.querys.addNewVentaBrandeo);
        case 120:
          _result10 = _context9.sent;
        case 121:
          _i8++;
          _context9.next = 113;
          break;
        case 124:
          return _context9.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 127:
          return _context9.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 128:
          _context9.next = 134;
          break;
        case 130:
          _context9.prev = 130;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
          res.send(_context9.t0.message);
        case 134:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 130]]);
  }));
  return function editVentas(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.editVentas = editVentas;
var editVentaPorDiseno = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorDiseno);
        case 6:
          result = _context10.sent;
          if (!(result.rowsAffected == 1)) {
            _context10.next = 11;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context10.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context10.next = 18;
          break;
        case 14:
          _context10.prev = 14;
          _context10.t0 = _context10["catch"](0);
          res.status(500);
          res.send(_context10.t0.message);
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 14]]);
  }));
  return function editVentaPorDiseno(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.editVentaPorDiseno = editVentaPorDiseno;
var editVentaPorNumEnsamble = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_factura", _database.sql.VarChar, req.body.Factura).query(_database.querys.editVentaPorNumFactura);
        case 6:
          result = _context11.sent;
          if (!(result.rowsAffected == 1)) {
            _context11.next = 11;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context11.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context11.next = 18;
          break;
        case 14:
          _context11.prev = 14;
          _context11.t0 = _context11["catch"](0);
          res.status(500);
          res.send(_context11.t0.message);
        case 18:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 14]]);
  }));
  return function editVentaPorNumEnsamble(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.editVentaPorNumEnsamble = editVentaPorNumEnsamble;
var getVentaById = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getVentaById);
        case 6:
          result = _context12.sent;
          res.json(result.recordset);
          _context12.next = 14;
          break;
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
  return function getVentaById(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getVentaById = getVentaById;
var editVentaPorCierreCaso = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var pool, result, i, pool2, result2, pool3, codigo, idR, secuencial, pool4, result4, idReq, _i9, _pool10, _result11, _i10, _pool11, _result12;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context13.sent;
          _context13.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaCorte);
        case 6:
          result = _context13.sent;
          if (!(result.rowsAffected > 0)) {
            _context13.next = 70;
            break;
          }
          if (!(req.body.VENT_tipoVenta == 1)) {
            _context13.next = 21;
            break;
          }
          if (!(req.body.VENT_list_brandeos.length > 0)) {
            _context13.next = 21;
            break;
          }
          i = 0;
        case 11:
          if (!(i < req.body.VENT_list_brandeos.length)) {
            _context13.next = 21;
            break;
          }
          _context13.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context13.sent;
          _context13.next = 17;
          return pool2.request().input("EQC_id", _database.sql.Decimal, req.body.VENT_list_brandeos[i].EQVENT_EQC_id).input("EQC_CLI_id", _database.sql.Decimal, req.body.VENT_CLI_id).input("idUser", _database.sql.Decimal, req.body.idUser).input("EQC_serie", _database.sql.Decimal, req.body.VENT_list_brandeos[i].EQVENT_EQC_serie).query(_database.querys.updateEquipoCompleto);
        case 17:
          result2 = _context13.sent;
        case 18:
          i++;
          _context13.next = 11;
          break;
        case 21:
          if (!(req.body.VENT_MovEntrega == 1)) {
            _context13.next = 67;
            break;
          }
          _context13.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context13.sent;
          _context13.next = 27;
          return pool3.request().query(_database.querys.getLastIdRequerimiento);
        case 27:
          codigo = _context13.sent;
          idR = 0;
          if (codigo.recordset[0].REQ_id == 0) {
            idR = 1;
          } else {
            idR = codigo.recordset[0].REQ_id;
          }
          secuencial = '';
          secuencial = "REQ" + idR;
          _context13.next = 34;
          return (0, _database.getConnection)();
        case 34:
          pool4 = _context13.sent;
          _context13.next = 37;
          return pool4.request().input("REQ_codigo", _database.sql.VarChar, secuencial).input("REQ_CLI_id", _database.sql.Decimal, req.body.VENT_CLI_id).input("REQ_contacto", _database.sql.VarChar, req.body.VENT_contacto).input("REQ_establecimiento", _database.sql.VarChar, req.body.VENT_establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.VENT_telefono).input("REQ_direccion", _database.sql.VarChar, req.body.VENT_direccion).input("REQ_UBIC_id", _database.sql.Decimal, req.body.VENT_UBIC_id).input("REQ_observacion", _database.sql.VarChar, req.body.VENT_observacion).input("REQ_USU_id", _database.sql.Decimal, req.body.idUser).input("REQ_USU_ing", _database.sql.Decimal, req.body.idUser).input("REQ_VENT_id", _database.sql.Decimal, req.body.VENT_id).query(_database.querys.addRequerimiento2);
        case 37:
          result4 = _context13.sent;
          if (!(result4.rowsAffected[0] == 1)) {
            _context13.next = 67;
            break;
          }
          idReq = result4.recordset[0].REQ_id;
          if (!(req.body.VENT_tipoVenta == 1)) {
            _context13.next = 55;
            break;
          }
          if (!(req.body.VENT_list_brandeos.length > 0)) {
            _context13.next = 53;
            break;
          }
          _i9 = 0;
        case 43:
          if (!(_i9 < req.body.VENT_list_brandeos.length)) {
            _context13.next = 53;
            break;
          }
          _context13.next = 46;
          return (0, _database.getConnection)();
        case 46:
          _pool10 = _context13.sent;
          _context13.next = 49;
          return _pool10.request().input("REQMOV_REQ_id", _database.sql.Decimal, idReq).input("REQMOV_EQC_id", _database.sql.Decimal, req.body.VENT_list_brandeos[_i9].EQVENT_EQC_id).input("REQMOV_BRAND_id", _database.sql.Decimal, req.body.VENT_list_brandeos[_i9].EQVENT_BRAND_id).input("REQMOV_EQUIPO_id", _database.sql.Decimal, req.body.VENT_list_brandeos[_i9].EQC_EQUIP_id).input("REQMOV_cantidad", _database.sql.Decimal(18, 2), req.body.VENT_list_brandeos[_i9].EQVENT_cantidad).input("REQMOV_tipo", _database.sql.Decimal, 1).query(_database.querys.addNewRequerimientoMovimiento);
        case 49:
          _result11 = _context13.sent;
        case 50:
          _i9++;
          _context13.next = 43;
          break;
        case 53:
          _context13.next = 67;
          break;
        case 55:
          if (!(req.body.VENT_ventabrandeos.length > 0)) {
            _context13.next = 67;
            break;
          }
          _i10 = 0;
        case 57:
          if (!(_i10 < req.body.VENT_ventabrandeos.length)) {
            _context13.next = 67;
            break;
          }
          _context13.next = 60;
          return (0, _database.getConnection)();
        case 60:
          _pool11 = _context13.sent;
          _context13.next = 63;
          return _pool11.request().input("REQMOV_REQ_id", _database.sql.Decimal, idReq).input("REQMOV_EQC_id", _database.sql.Decimal, 0).input("REQMOV_BRAND_id", _database.sql.Decimal, req.body.VENT_ventabrandeos[_i10].EQBRAND_BRAND_id).input("REQMOV_EQUIPO_id", _database.sql.Decimal, req.body.VENT_ventabrandeos[_i10].EQBRAND_EQUIP_id).input("REQMOV_cantidad", _database.sql.Decimal(18, 2), req.body.VENT_ventabrandeos[_i10].EQBRAND_cantidad).input("REQMOV_tipo", _database.sql.Decimal, 2).query(_database.querys.addNewRequerimientoMovimiento);
        case 63:
          _result12 = _context13.sent;
        case 64:
          _i10++;
          _context13.next = 57;
          break;
        case 67:
          return _context13.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 70:
          return _context13.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 71:
          _context13.next = 77;
          break;
        case 73:
          _context13.prev = 73;
          _context13.t0 = _context13["catch"](0);
          res.status(500);
          res.send(_context13.t0.message);
        case 77:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 73]]);
  }));
  return function editVentaPorCierreCaso(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.editVentaPorCierreCaso = editVentaPorCierreCaso;
var editVentaPorConfirmadoBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorConfirmadoBrandeo);
        case 6:
          result = _context14.sent;
          if (!(result.rowsAffected == 1)) {
            _context14.next = 11;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context14.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
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
  return function editVentaPorConfirmadoBrandeo(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.editVentaPorConfirmadoBrandeo = editVentaPorConfirmadoBrandeo;
var editVentaPorImpresionBrandeo = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context15.sent;
          _context15.next = 6;
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorImpresionBrandeo);
        case 6:
          result = _context15.sent;
          if (!(result.rowsAffected == 1)) {
            _context15.next = 11;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context15.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context15.next = 18;
          break;
        case 14:
          _context15.prev = 14;
          _context15.t0 = _context15["catch"](0);
          res.status(500);
          res.send(_context15.t0.message);
        case 18:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 14]]);
  }));
  return function editVentaPorImpresionBrandeo(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.editVentaPorImpresionBrandeo = editVentaPorImpresionBrandeo;
var editVentaPorLaminadoBrandeo = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context16.sent;
          _context16.next = 6;
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorLaminadoBrandeo);
        case 6:
          result = _context16.sent;
          if (!(result.rowsAffected == 1)) {
            _context16.next = 11;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context16.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context16.next = 18;
          break;
        case 14:
          _context16.prev = 14;
          _context16.t0 = _context16["catch"](0);
          res.status(500);
          res.send(_context16.t0.message);
        case 18:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 14]]);
  }));
  return function editVentaPorLaminadoBrandeo(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
exports.editVentaPorLaminadoBrandeo = editVentaPorLaminadoBrandeo;
var editVentaPorCorteBrandeo = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context17.sent;
          _context17.next = 6;
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorCorteBrandeo);
        case 6:
          result = _context17.sent;
          if (!(result.rowsAffected == 1)) {
            _context17.next = 11;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context17.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context17.next = 18;
          break;
        case 14:
          _context17.prev = 14;
          _context17.t0 = _context17["catch"](0);
          res.status(500);
          res.send(_context17.t0.message);
        case 18:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 14]]);
  }));
  return function editVentaPorCorteBrandeo(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
exports.editVentaPorCorteBrandeo = editVentaPorCorteBrandeo;
var editVentaPorEntregadoBrandeo = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context18.sent;
          _context18.next = 6;
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorEntregadoBrandeo);
        case 6:
          result = _context18.sent;
          if (!(result.rowsAffected == 1)) {
            _context18.next = 11;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context18.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context18.next = 18;
          break;
        case 14:
          _context18.prev = 14;
          _context18.t0 = _context18["catch"](0);
          res.status(500);
          res.send(_context18.t0.message);
        case 18:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 14]]);
  }));
  return function editVentaPorEntregadoBrandeo(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
exports.editVentaPorEntregadoBrandeo = editVentaPorEntregadoBrandeo;
var editVentaPorPegadoBrandeo = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context19.sent;
          _context19.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorBrandeoPegado);
        case 6:
          result = _context19.sent;
          if (!(result.rowsAffected == 1)) {
            _context19.next = 11;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context19.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context19.next = 18;
          break;
        case 14:
          _context19.prev = 14;
          _context19.t0 = _context19["catch"](0);
          res.status(500);
          res.send(_context19.t0.message);
        case 18:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 14]]);
  }));
  return function editVentaPorPegadoBrandeo(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
exports.editVentaPorPegadoBrandeo = editVentaPorPegadoBrandeo;
var editVentaPorCerrarBrandeo = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context20.sent;
          _context20.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorCerrarBrandeo);
        case 6:
          result = _context20.sent;
          if (!(result.rowsAffected == 1)) {
            _context20.next = 11;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context20.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context20.next = 18;
          break;
        case 14:
          _context20.prev = 14;
          _context20.t0 = _context20["catch"](0);
          res.status(500);
          res.send(_context20.t0.message);
        case 18:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 14]]);
  }));
  return function editVentaPorCerrarBrandeo(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
exports.editVentaPorCerrarBrandeo = editVentaPorCerrarBrandeo;
var getInventarioTotal = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context21.sent;
          _context21.next = 6;
          return pool.request().query(_database.querys.getInventarioTotal);
        case 6:
          result = _context21.sent;
          res.json(result.recordset);
          _context21.next = 14;
          break;
        case 10:
          _context21.prev = 10;
          _context21.t0 = _context21["catch"](0);
          res.status(500);
          res.send(_context21.t0.message);
        case 14:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 10]]);
  }));
  return function getInventarioTotal(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
exports.getInventarioTotal = getInventarioTotal;
var getInventarioByIdEquipo = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context22.sent;
          _context22.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getInventarioByIdEquipo);
        case 6:
          result = _context22.sent;
          res.json(result.recordset);
          _context22.next = 14;
          break;
        case 10:
          _context22.prev = 10;
          _context22.t0 = _context22["catch"](0);
          res.status(500);
          res.send(_context22.t0.message);
        case 14:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 10]]);
  }));
  return function getInventarioByIdEquipo(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
exports.getInventarioByIdEquipo = getInventarioByIdEquipo;
var getImagenEquipoByVenta = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context23.sent;
          _context23.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getImagenEquipoByVenta);
        case 6:
          result = _context23.sent;
          res.json(result.recordset);
          _context23.next = 14;
          break;
        case 10:
          _context23.prev = 10;
          _context23.t0 = _context23["catch"](0);
          res.status(500);
          res.send(_context23.t0.message);
        case 14:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 10]]);
  }));
  return function getImagenEquipoByVenta(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
exports.getImagenEquipoByVenta = getImagenEquipoByVenta;
var createImageEquipoPegado = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var imageruta, i, img, pool, result;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          imageruta = '';
          if (!(req.files.length > 0)) {
            _context24.next = 19;
            break;
          }
          i = 0;
        case 4:
          if (!(i < req.files.length)) {
            _context24.next = 18;
            break;
          }
          _context24.next = 7;
          return cloudinary.uploader.upload(req.files[i].path);
        case 7:
          img = _context24.sent;
          imageruta = img.secure_url;
          _context24.next = 11;
          return (0, _database.getConnection)();
        case 11:
          pool = _context24.sent;
          _context24.next = 14;
          return pool.request().input("IMGEQUIP_VENT_id", req.params.id).input("IMGEQUIP_ruta", _database.sql.VarChar, imageruta).query(_database.querys.createImageEquipoPegado);
        case 14:
          result = _context24.sent;
        case 15:
          i++;
          _context24.next = 4;
          break;
        case 18:
          return _context24.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 19:
          _context24.next = 25;
          break;
        case 21:
          _context24.prev = 21;
          _context24.t0 = _context24["catch"](0);
          res.status(500);
          res.send(_context24.t0.message);
        case 25:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 21]]);
  }));
  return function createImageEquipoPegado(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
exports.createImageEquipoPegado = createImageEquipoPegado;
var updateEquipoInventory = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context25.sent;
          _context25.next = 6;
          return pool.request().input("id", req.params.id).input("serie", _database.sql.Decimal, req.body.serie).input("idUser", _database.sql.Decimal, req.body.idUser).query(_database.querys.updateEquipoInventory);
        case 6:
          result = _context25.sent;
          if (!(result.rowsAffected[0] == 1)) {
            _context25.next = 11;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context25.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte con el administrador",
            token: 0
          }));
        case 12:
          _context25.next = 18;
          break;
        case 14:
          _context25.prev = 14;
          _context25.t0 = _context25["catch"](0);
          res.status(500);
          res.send(_context25.t0.message);
        case 18:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 14]]);
  }));
  return function updateEquipoInventory(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
exports.updateEquipoInventory = updateEquipoInventory;
var editVentaPorRevisionBodega = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context26.sent;
          _context26.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorRevisionBodega);
        case 6:
          result = _context26.sent;
          if (!(result.rowsAffected == 1)) {
            _context26.next = 11;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context26.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context26.next = 18;
          break;
        case 14:
          _context26.prev = 14;
          _context26.t0 = _context26["catch"](0);
          res.status(500);
          res.send(_context26.t0.message);
        case 18:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 14]]);
  }));
  return function editVentaPorRevisionBodega(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
exports.editVentaPorRevisionBodega = editVentaPorRevisionBodega;
var editVentaPorAprobacion = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context27.sent;
          _context27.next = 6;
          return pool.request().input("id", req.params.id).input("VENT_aprobado", _database.sql.Decimal, req.body.estado).query(_database.querys.editVentaPorAprobacion);
        case 6:
          result = _context27.sent;
          if (!(result.rowsAffected == 1)) {
            _context27.next = 11;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context27.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context27.next = 18;
          break;
        case 14:
          _context27.prev = 14;
          _context27.t0 = _context27["catch"](0);
          res.status(500);
          res.send(_context27.t0.message);
        case 18:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 14]]);
  }));
  return function editVentaPorAprobacion(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
exports.editVentaPorAprobacion = editVentaPorAprobacion;
var editVentaPorNoAprobacion = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _context28.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context28.sent;
          _context28.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorNoAprobacion);
        case 6:
          result = _context28.sent;
          if (!(result.rowsAffected == 1)) {
            _context28.next = 11;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context28.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context28.next = 18;
          break;
        case 14:
          _context28.prev = 14;
          _context28.t0 = _context28["catch"](0);
          res.status(500);
          res.send(_context28.t0.message);
        case 18:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 14]]);
  }));
  return function editVentaPorNoAprobacion(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
exports.editVentaPorNoAprobacion = editVentaPorNoAprobacion;