"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEquipoInventory = exports.getVentasActivosPorBrandeo = exports.getVentasActivos = exports.getVentaById = exports.getRevisionesActivas = exports.getInventarioTotal = exports.getInventarioIndividual = exports.getInventarioByIdEquipo = exports.getInventarioAgrupado = exports.getImagenEquipoRevisionByVenta = exports.getImagenEquipoByVenta = exports.getHistPorSerie = exports.getHistPorCodTag = exports.getDetalleVentasEquipos = exports.getDetalleVentasBrandeos = exports.getCountRevisionEquipo = exports.getBrandeosPorPegar = exports.getAllVentas = exports.getAllBrandeosVenta = exports.editVentas = exports.editVentaPorRevisionBodega = exports.editVentaPorPegadoBrandeo = exports.editVentaPorNumEnsamble = exports.editVentaPorNoAprobacion = exports.editVentaPorLaminadoBrandeo = exports.editVentaPorImpresionBrandeo = exports.editVentaPorEntregadoBrandeo = exports.editVentaPorDiseno = exports.editVentaPorCorteBrandeo = exports.editVentaPorConfirmadoBrandeo = exports.editVentaPorCierreCaso = exports.editVentaPorCerrarBrandeo = exports.editVentaPorAprobacion = exports.editVentaEquipoRevisado = exports.editFechaEntregaVinil = exports.createventas = exports.createImageEquipoRevisado = exports.createImageEquipoPegado = exports.addNumEnsambleVinilEquipo = exports.addNumEnsambleVinil = exports.addNumEnsambleEquipo = void 0;
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
var getRevisionesActivas = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getRevisionesActivas);
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
  return function getRevisionesActivas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getRevisionesActivas = getRevisionesActivas;
var getVentasActivosPorBrandeo = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getVentasActivosPorBrandeo);
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
  return function getVentasActivosPorBrandeo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getVentasActivosPorBrandeo = getVentasActivosPorBrandeo;
var getBrandeosPorPegar = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getBrandeosPorPegar);
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
  return function getBrandeosPorPegar(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getBrandeosPorPegar = getBrandeosPorPegar;
var getDetalleVentasEquipos = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getDetalleVentasEquiposById);
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
  return function getDetalleVentasEquipos(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getDetalleVentasEquipos = getDetalleVentasEquipos;
var getDetalleVentasBrandeos = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getDetalleBrandeoByIdVenta);
        case 6:
          result = _context8.sent;
          res.json(result.recordset);
          _context8.next = 14;
          break;
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
  return function getDetalleVentasBrandeos(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getDetalleVentasBrandeos = getDetalleVentasBrandeos;
var createventas = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var pool, codigo, idR, brandeo, i, _i, secuencial, pool2, result, idVenta, _i2, pool3, _result, laminado, _i3, _pool, _result2, _laminado, _i4, _pool2, _result3;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context9.sent;
          _context9.next = 6;
          return pool.request().query(_database.querys.getLastIdVenta);
        case 6:
          codigo = _context9.sent;
          idR = 0;
          brandeo = 0;
          if (codigo.recordset[0].VENT_id == 0) {
            idR = 1;
          } else {
            idR = codigo.recordset[0].VENT_id;
          }
          if (req.body.detailsModelo.length > 0) {
            for (i = 0; i < req.body.detailsModelo.length; i++) {
              if (req.body.detailsModelo[i].productName != 34 || req.body.detailsModelo[i].productName != 0) {
                //es 34 prque es el ID del no brandeo
                brandeo = 1;
              }
            }
          }
          if (req.body.detailsBrandeo.length > 0) {
            for (_i = 0; _i < req.body.detailsBrandeo.length; _i++) {
              if (req.body.detailsBrandeo[_i].productName != 34 || req.body.detailsBrandeo[_i].productName != 0) {
                //es 34 prque es el ID del no brandeo
                brandeo = 1;
              }
            }
          }
          if (req.body.tipoVenta == 1 || req.body.tipoVenta == 3) {
            req.body.OT = '';
          }
          secuencial = '';
          secuencial = "VENTA" + idR;
          _context9.next = 17;
          return (0, _database.getConnection)();
        case 17:
          pool2 = _context9.sent;
          _context9.next = 20;
          return pool2.request().input("VENT_codigo", _database.sql.VarChar, secuencial).input("VENT_fecha", _database.sql.DateTime, req.body.FechaVenta).input("VENT_CLI_id", _database.sql.Decimal, req.body.Cliente).input("VENT_observacion", _database.sql.VarChar, req.body.Observacion).input("VENT_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("VENT_contacto", _database.sql.VarChar, req.body.Subcliente).input("VENT_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("VENT_direccion", _database.sql.VarChar, req.body.Direccion).input("VENT_telefono", _database.sql.VarChar, req.body.Telefono).input("VENT_brandeoEquipo", _database.sql.Decimal, brandeo).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_SubTotal", _database.sql.Decimal(18, 2), req.body.SubtotalCopia).input("VENT_IVA", _database.sql.Decimal(18, 2), req.body.IVACopia).input("VENT_total", _database.sql.Decimal(18, 2), req.body.TotalCopia).input("VENT_MovEntrega", _database.sql.Decimal, req.body.entrega).input("VENT_tipoVenta", _database.sql.Decimal, req.body.tipoVenta).input("VENT_ubicacionMaps", _database.sql.VarChar, req.body.Maps).input("VENT_MovBrandeo", _database.sql.Decimal, req.body.requiereBrandeo).input("VENT_OT", _database.sql.VarChar, req.body.OT).input("VENT_urgencia", _database.sql.Decimal, req.body.urgencia).query(_database.querys.addVenta);
        case 20:
          result = _context9.sent;
          if (!(result.rowsAffected[0] == 1)) {
            _context9.next = 66;
            break;
          }
          idVenta = result.recordset[0].VENT_id;
          if (!(req.body.details.length > 0)) {
            _context9.next = 35;
            break;
          }
          _i2 = 0;
        case 25:
          if (!(_i2 < req.body.details.length)) {
            _context9.next = 35;
            break;
          }
          _context9.next = 28;
          return (0, _database.getConnection)();
        case 28:
          pool3 = _context9.sent;
          _context9.next = 31;
          return pool3.request().input("VENTDET_VENT_id", _database.sql.Decimal, idVenta).input("VENTDET_PROD_id", _database.sql.Decimal, req.body.details[_i2].productName).input("VENTDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i2].qty).input("VENTDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i2].salesPrice).input("VENTDET_total", _database.sql.Decimal(18, 2), req.body.details[_i2].totalCopia).input("VENTDET_EQC_id", _database.sql.Decimal, req.body.details[_i2].idCopia).input("VENTDET_EQC_serie", _database.sql.VarChar, req.body.details[_i2].serieCopia).query(_database.querys.addNewVentaDetalle);
        case 31:
          _result = _context9.sent;
        case 32:
          _i2++;
          _context9.next = 25;
          break;
        case 35:
          if (!(req.body.detailsModelo.length > 0)) {
            _context9.next = 49;
            break;
          }
          laminado = 0;
          _i3 = 0;
        case 38:
          if (!(_i3 < req.body.detailsModelo.length)) {
            _context9.next = 49;
            break;
          }
          if (req.body.detailsModelo[_i3].matSlideB == 1) {
            laminado = 1;
          } else {
            laminado = 1;
          }
          _context9.next = 42;
          return (0, _database.getConnection)();
        case 42:
          _pool = _context9.sent;
          _context9.next = 45;
          return _pool.request().input("EQVENT_VENT_id", _database.sql.Decimal, idVenta).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i3].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i3].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i3].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i3].productName).input("EQVENT_laminado", _database.sql.Decimal, laminado) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i3].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_codigo", _database.sql.VarChar, secuencial).input("EQVENT_codEnsambleB", _database.sql.VarChar, '').input("EQVENT_codEnsambleE", _database.sql.VarChar, '').query(_database.querys.addNewVentaEquipo);
        case 45:
          _result2 = _context9.sent;
        case 46:
          _i3++;
          _context9.next = 38;
          break;
        case 49:
          if (!(req.body.detailsBrandeo.length > 0)) {
            _context9.next = 63;
            break;
          }
          _laminado = 0;
          _i4 = 0;
        case 52:
          if (!(_i4 < req.body.detailsBrandeo.length)) {
            _context9.next = 63;
            break;
          }
          if (req.body.detailsBrandeo[_i4].matSlideB == 1) {
            _laminado = 1;
          } else {
            _laminado = 1;
          }
          _context9.next = 56;
          return (0, _database.getConnection)();
        case 56:
          _pool2 = _context9.sent;
          _context9.next = 59;
          return _pool2.request().input("EQBRAND_VENT_id", _database.sql.Decimal, idVenta).input("EQBRAND_EQUIP_id", _database.sql.Decimal, req.body.detailsBrandeo[_i4].modelname).input("EQBRAND_BRAND_id", _database.sql.Decimal, req.body.detailsBrandeo[_i4].productName).input("EQBRAND_laminado", _database.sql.Decimal, _laminado) //verificar si llega 0 o 1
          .input("EQBRAND_cantidad", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i4].qtyB).input("EQBRAND_precio", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i4].salesPriceB).input("EQBRAND_total", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i4].totalBCopia).input("EQBRAND_codEnsamble", _database.sql.VarChar, '').query(_database.querys.addNewVentaBrandeo);
        case 59:
          _result3 = _context9.sent;
        case 60:
          _i4++;
          _context9.next = 52;
          break;
        case 63:
          return _context9.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 66:
          return _context9.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 67:
          _context9.next = 73;
          break;
        case 69:
          _context9.prev = 69;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
          res.send(_context9.t0.message);
        case 73:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 69]]);
  }));
  return function createventas(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.createventas = createventas;
var editVentas = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var brandeo, i, _i5, pool, result, pool2, result2, _i6, pool3, result3, laminado, _i7, _pool3, _result4, _pool4, _result5, _laminado2, _i8, _pool5, _result6, _i9, _pool6, _result7, _laminado3, _i10, _pool7, _result8, _pool8, _result9, _laminado4, _i11, _pool9, _result10;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          brandeo = 0;
          if (req.body.detailsModelo.length > 0) {
            for (i = 0; i < req.body.detailsModelo.length; i++) {
              if (req.body.detailsModelo[i].productName != 34 || req.body.detailsModelo[i].productName != 0) {
                //es 34 prque es el ID del no brandeo
                brandeo = 1;
              }
            }
          }
          if (req.body.detailsBrandeo.length > 0) {
            for (_i5 = 0; _i5 < req.body.detailsBrandeo.length; _i5++) {
              if (req.body.detailsBrandeo[_i5].productName != 34 || req.body.detailsBrandeo[_i5].productName != 0) {
                //es 34 prque es el ID del no brandeo
                brandeo = 1;
              }
            }
          }
          if (req.body.tipoVenta == 1 || req.body.tipoVenta == 3) {
            req.body.OT = '';
          }
          _context10.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context10.sent;
          _context10.next = 10;
          return pool.request().input("id", req.params.id).input("VENT_codigo", _database.sql.VarChar, 'VENT' + req.params.id).input("VENT_fecha", _database.sql.DateTime, req.body.FechaVenta).input("VENT_CLI_id", _database.sql.Decimal, req.body.Cliente).input("VENT_observacion", _database.sql.VarChar, req.body.Observacion).input("VENT_UBIC_id", _database.sql.Decimal, req.body.Ciudad).input("VENT_contacto", _database.sql.VarChar, req.body.Subcliente).input("VENT_establecimiento", _database.sql.VarChar, req.body.Establecimiento).input("VENT_direccion", _database.sql.VarChar, req.body.Direccion).input("VENT_telefono", _database.sql.VarChar, req.body.Telefono).input("VENT_brandeoEquipo", _database.sql.Decimal, brandeo).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_SubTotal", _database.sql.Decimal(18, 2), req.body.SubtotalCopia).input("VENT_IVA", _database.sql.Decimal(18, 2), req.body.IVACopia).input("VENT_total", _database.sql.Decimal(18, 2), req.body.TotalCopia).input("VENT_MovEntrega", _database.sql.Decimal, req.body.entrega).input("VENT_ubicacionMaps", _database.sql.VarChar, req.body.Maps).input("VENT_MovBrandeo", _database.sql.Decimal, req.body.requiereBrandeo).input("VENT_OT", _database.sql.VarChar, req.body.OT).input("VENT_urgencia", _database.sql.Decimal, req.body.urgencia).query(_database.querys.editVentas);
        case 10:
          result = _context10.sent;
          if (!(result.rowsAffected == 1)) {
            _context10.next = 123;
            break;
          }
          _context10.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context10.sent;
          _context10.next = 17;
          return pool2.request().input("VENTDET_VENT_id", req.params.id).query(_database.querys.cambiarEstadoVentasDetalle);
        case 17:
          result2 = _context10.sent;
          if (!(result2.rowsAffected > 0)) {
            _context10.next = 71;
            break;
          }
          if (!(req.body.details.length > 0)) {
            _context10.next = 31;
            break;
          }
          _i6 = 0;
        case 21:
          if (!(_i6 < req.body.details.length)) {
            _context10.next = 31;
            break;
          }
          _context10.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context10.sent;
          _context10.next = 27;
          return pool3.request().input("VENTDET_VENT_id", _database.sql.Decimal, req.params.id).input("VENTDET_PROD_id", _database.sql.Decimal, req.body.details[_i6].productName).input("VENTDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i6].qty).input("VENTDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i6].salesPrice).input("VENTDET_total", _database.sql.Decimal(18, 2), req.body.details[_i6].totalCopia).input("VENTDET_EQC_id", _database.sql.Decimal, req.body.details[_i6].idCopia).input("VENTDET_EQC_serie", _database.sql.VarChar, req.body.details[_i6].serieCopia).query(_database.querys.addNewVentaDetalle);
        case 27:
          result3 = _context10.sent;
        case 28:
          _i6++;
          _context10.next = 21;
          break;
        case 31:
          if (!(req.body.detailsModelo.length > 0)) {
            _context10.next = 55;
            break;
          }
          console.log(req.body.detailsModelo);
          laminado = 0;
          _i7 = 0;
        case 35:
          if (!(_i7 < req.body.detailsModelo.length)) {
            _context10.next = 55;
            break;
          }
          if (req.body.detailsModelo[_i7].matSlideB == 1) {
            laminado = 1;
          } else {
            laminado = 1;
          }
          if (!(req.body.detailsModelo[_i7].estado == 6)) {
            _context10.next = 46;
            break;
          }
          _context10.next = 40;
          return (0, _database.getConnection)();
        case 40:
          _pool3 = _context10.sent;
          _context10.next = 43;
          return _pool3.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i7].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i7].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i7].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i7].productName).input("EQVENT_laminado", _database.sql.Decimal, laminado) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i7].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("EQVENT_codEnsambleB", _database.sql.VarChar, '').input("EQVENT_codEnsambleE", _database.sql.VarChar, '').query(_database.querys.addNewVentaEquipo2);
        case 43:
          _result4 = _context10.sent;
          _context10.next = 52;
          break;
        case 46:
          _context10.next = 48;
          return (0, _database.getConnection)();
        case 48:
          _pool4 = _context10.sent;
          _context10.next = 51;
          return _pool4.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i7].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i7].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i7].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i7].productName).input("EQVENT_laminado", _database.sql.Decimal, laminado) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i7].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_codigo", _database.sql.VarChar, 'VENTA' + req.params.id).input("EQVENT_codEnsambleB", _database.sql.VarChar, '').input("EQVENT_codEnsambleE", _database.sql.VarChar, '').query(_database.querys.addNewVentaEquipo);
        case 51:
          _result5 = _context10.sent;
        case 52:
          _i7++;
          _context10.next = 35;
          break;
        case 55:
          if (!(req.body.detailsBrandeo.length > 0)) {
            _context10.next = 69;
            break;
          }
          _laminado2 = 0;
          _i8 = 0;
        case 58:
          if (!(_i8 < req.body.detailsBrandeo.length)) {
            _context10.next = 69;
            break;
          }
          if (req.body.detailsBrandeo[_i8].matSlideB == 1) {
            _laminado2 = 1;
          } else {
            _laminado2 = 1;
          }
          _context10.next = 62;
          return (0, _database.getConnection)();
        case 62:
          _pool5 = _context10.sent;
          _context10.next = 65;
          return _pool5.request().input("EQBRAND_VENT_id", _database.sql.Decimal, req.params.id).input("EQBRAND_EQUIP_id", _database.sql.Decimal, req.body.detailsBrandeo[_i8].modelname).input("EQBRAND_BRAND_id", _database.sql.Decimal, req.body.detailsBrandeo[_i8].productName).input("EQBRAND_laminado", _database.sql.Decimal, _laminado2) //verificar si llega 0 o 1
          .input("EQBRAND_cantidad", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i8].qtyB).input("EQBRAND_precio", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i8].salesPriceB).input("EQBRAND_total", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i8].totalBCopia).input("EQBRAND_codEnsamble", _database.sql.VarChar, '').query(_database.querys.addNewVentaBrandeo);
        case 65:
          _result6 = _context10.sent;
        case 66:
          _i8++;
          _context10.next = 58;
          break;
        case 69:
          _context10.next = 120;
          break;
        case 71:
          if (!(req.body.details.length > 0)) {
            _context10.next = 83;
            break;
          }
          _i9 = 0;
        case 73:
          if (!(_i9 < req.body.details.length)) {
            _context10.next = 83;
            break;
          }
          _context10.next = 76;
          return (0, _database.getConnection)();
        case 76:
          _pool6 = _context10.sent;
          _context10.next = 79;
          return _pool6.request().input("VENTDET_VENT_id", _database.sql.Decimal, req.params.id).input("VENTDET_PROD_id", _database.sql.Decimal, req.body.details[_i9].productName).input("VENTDET_cantidad", _database.sql.Decimal(18, 2), req.body.details[_i9].qty).input("VENTDET_pvp", _database.sql.Decimal(18, 2), req.body.details[_i9].salesPrice).input("VENTDET_total", _database.sql.Decimal(18, 2), req.body.details[_i9].totalCopia).input("VENTDET_EQC_id", _database.sql.Decimal, req.body.details[_i9].idCopia).input("VENTDET_EQC_serie", _database.sql.VarChar, req.body.details[_i9].serieCopia).query(_database.querys.addNewVentaDetalle);
        case 79:
          _result7 = _context10.sent;
        case 80:
          _i9++;
          _context10.next = 73;
          break;
        case 83:
          if (!(req.body.detailsModelo.length > 0)) {
            _context10.next = 106;
            break;
          }
          _laminado3 = 0;
          _i10 = 0;
        case 86:
          if (!(_i10 < req.body.detailsModelo.length)) {
            _context10.next = 106;
            break;
          }
          if (req.body.detailsModelo[_i10].matSlideB == 1) {
            _laminado3 = 1;
          } else {
            _laminado3 = 1;
          }
          if (!(req.body.detailsModelo[_i10].estado == 6)) {
            _context10.next = 97;
            break;
          }
          _context10.next = 91;
          return (0, _database.getConnection)();
        case 91:
          _pool7 = _context10.sent;
          _context10.next = 94;
          return _pool7.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i10].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i10].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i10].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i10].productName).input("EQVENT_laminado", _database.sql.Decimal, _laminado3) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i10].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("EQVENT_codEnsambleB", _database.sql.VarChar, '').input("EQVENT_codEnsambleE", _database.sql.VarChar, '').query(_database.querys.addNewVentaEquipo2);
        case 94:
          _result8 = _context10.sent;
          _context10.next = 103;
          break;
        case 97:
          _context10.next = 99;
          return (0, _database.getConnection)();
        case 99:
          _pool8 = _context10.sent;
          _context10.next = 102;
          return _pool8.request().input("EQVENT_VENT_id", _database.sql.Decimal, req.params.id).input("EQVENT_EQC_id", _database.sql.Decimal, req.body.detailsModelo[_i10].id).input("EQVENT_EQC_serie", _database.sql.VarChar, req.body.detailsModelo[_i10].serie).input("EQVENT_temperatura", _database.sql.VarChar, req.body.detailsModelo[_i10].temperatura).input("EQVENT_BRAND_id", _database.sql.Decimal, req.body.detailsModelo[_i10].productName).input("EQVENT_laminado", _database.sql.Decimal, _laminado3) //verificar si llega 0 o 1
          .input("EQVENT_cantidad", _database.sql.Decimal(18, 2), 1).input("EQVENT_precio", _database.sql.Decimal(18, 2), 0).input("EQVENT_total", _database.sql.Decimal(18, 2), req.body.detailsModelo[_i10].totalBCopia).input("VENT_USU_ing", _database.sql.Decimal, req.body.id).input("VENT_codigo", _database.sql.VarChar, 'VENTA' + req.params.id).input("EQVENT_codEnsambleB", _database.sql.VarChar, '').input("EQVENT_codEnsambleE", _database.sql.VarChar, '').query(_database.querys.addNewVentaEquipo);
        case 102:
          _result9 = _context10.sent;
        case 103:
          _i10++;
          _context10.next = 86;
          break;
        case 106:
          if (!(req.body.detailsBrandeo.length > 0)) {
            _context10.next = 120;
            break;
          }
          _laminado4 = 0;
          _i11 = 0;
        case 109:
          if (!(_i11 < req.body.detailsBrandeo.length)) {
            _context10.next = 120;
            break;
          }
          if (req.body.detailsBrandeo[_i11].matSlideB == 1) {
            _laminado4 = 1;
          } else {
            _laminado4 = 1;
          }
          _context10.next = 113;
          return (0, _database.getConnection)();
        case 113:
          _pool9 = _context10.sent;
          _context10.next = 116;
          return _pool9.request().input("EQBRAND_VENT_id", _database.sql.Decimal, req.params.id).input("EQBRAND_EQUIP_id", _database.sql.Decimal, req.body.detailsBrandeo[_i11].modelname).input("EQBRAND_BRAND_id", _database.sql.Decimal, req.body.detailsBrandeo[_i11].productName).input("EQBRAND_laminado", _database.sql.Decimal, _laminado4) //verificar si llega 0 o 1
          .input("EQBRAND_cantidad", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i11].qtyB).input("EQBRAND_precio", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i11].salesPriceB).input("EQBRAND_total", _database.sql.Decimal(18, 2), req.body.detailsBrandeo[_i11].totalBCopia).input("EQBRAND_codEnsamble", _database.sql.VarChar, '').query(_database.querys.addNewVentaBrandeo);
        case 116:
          _result10 = _context10.sent;
        case 117:
          _i11++;
          _context10.next = 109;
          break;
        case 120:
          return _context10.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 123:
          return _context10.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 124:
          _context10.next = 130;
          break;
        case 126:
          _context10.prev = 126;
          _context10.t0 = _context10["catch"](0);
          res.status(500);
          res.send(_context10.t0.message);
        case 130:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 126]]);
  }));
  return function editVentas(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.editVentas = editVentas;
var editVentaPorDiseno = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorDiseno);
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
  return function editVentaPorDiseno(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.editVentaPorDiseno = editVentaPorDiseno;
var editVentaPorNumEnsamble = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_factura", _database.sql.VarChar, req.body.Factura).query(_database.querys.editVentaPorNumFactura);
        case 6:
          result = _context12.sent;
          if (!(result.rowsAffected == 1)) {
            _context12.next = 11;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context12.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context12.next = 18;
          break;
        case 14:
          _context12.prev = 14;
          _context12.t0 = _context12["catch"](0);
          res.status(500);
          res.send(_context12.t0.message);
        case 18:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 14]]);
  }));
  return function editVentaPorNumEnsamble(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.editVentaPorNumEnsamble = editVentaPorNumEnsamble;
var getVentaById = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getVentaById);
        case 6:
          result = _context13.sent;
          res.json(result.recordset);
          _context13.next = 14;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          res.status(500);
          res.send(_context13.t0.message);
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return function getVentaById(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.getVentaById = getVentaById;
var editVentaPorCierreCaso = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var pool, result, i, pool2, result2, pool3, codigo, idR, secuencial, pool4, result4, idReq, _i12, _pool10, _result11, _i13, _pool11, _result12;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context14.sent;
          _context14.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaCorte);
        case 6:
          result = _context14.sent;
          if (!(result.rowsAffected > 0)) {
            _context14.next = 69;
            break;
          }
          if (!(req.body.VENT_tipoVenta == 1)) {
            _context14.next = 21;
            break;
          }
          if (!(req.body.VENT_list_brandeos.length > 0)) {
            _context14.next = 21;
            break;
          }
          i = 0;
        case 11:
          if (!(i < req.body.VENT_list_brandeos.length)) {
            _context14.next = 21;
            break;
          }
          _context14.next = 14;
          return (0, _database.getConnection)();
        case 14:
          pool2 = _context14.sent;
          _context14.next = 17;
          return pool2.request().input("EQC_id", _database.sql.Decimal, req.body.VENT_list_brandeos[i].EQVENT_EQC_id).input("EQC_CLI_id", _database.sql.Decimal, req.body.VENT_CLI_id).input("idUser", _database.sql.Decimal, req.body.idUser).input("EQC_serie", _database.sql.Decimal, req.body.VENT_list_brandeos[i].EQVENT_EQC_serie).query(_database.querys.updateEquipoCompleto);
        case 17:
          result2 = _context14.sent;
        case 18:
          i++;
          _context14.next = 11;
          break;
        case 21:
          if (!(req.body.VENT_MovEntrega == 1)) {
            _context14.next = 66;
            break;
          }
          _context14.next = 24;
          return (0, _database.getConnection)();
        case 24:
          pool3 = _context14.sent;
          _context14.next = 27;
          return pool3.request().query(_database.querys.getLastIdRequerimiento);
        case 27:
          codigo = _context14.sent;
          idR = 0;
          if (codigo.recordset[0].REQ_id == 0) {
            idR = 1;
          } else {
            idR = codigo.recordset[0].REQ_id;
          }
          secuencial = '';
          secuencial = "REQ" + idR;
          _context14.next = 34;
          return (0, _database.getConnection)();
        case 34:
          pool4 = _context14.sent;
          _context14.next = 37;
          return pool4.request().input("REQ_codigo", _database.sql.VarChar, secuencial).input("REQ_personaReporta", _database.sql.VarChar, req.body.USU_nombre).input("REQ_CLI_id", _database.sql.Decimal, req.body.VENT_CLI_id).input("REQ_contacto", _database.sql.VarChar, req.body.VENT_contacto).input("REQ_establecimiento", _database.sql.VarChar, req.body.VENT_establecimiento).input("REQ_telefono", _database.sql.VarChar, req.body.VENT_telefono).input("REQ_direccion", _database.sql.VarChar, req.body.VENT_direccion).input("REQ_UBIC_id", _database.sql.Decimal, req.body.VENT_UBIC_id).input("REQ_observacion", _database.sql.VarChar, req.body.VENT_observacion).input("REQ_observacionTecnica", _database.sql.VarChar, 'ENTREGA DE EQUIPOS PERTENECIENTE A LA VENTA' + req.body.VENT_codigo).input("REQ_USU_ing", _database.sql.Decimal, req.body.idUser).input("REQ_VENT_id", _database.sql.Decimal, req.body.VENT_id).query(_database.querys.addRequerimiento2);
        case 37:
          result4 = _context14.sent;
          if (!(result4.rowsAffected[0] == 1)) {
            _context14.next = 66;
            break;
          }
          idReq = result4.recordset[0].REQ_id;
          if (!(req.body.VENT_tipoVenta == 1)) {
            _context14.next = 53;
            break;
          }
          if (!(req.body.VENT_list_brandeos.length > 0)) {
            _context14.next = 53;
            break;
          }
          _i12 = 0;
        case 43:
          if (!(_i12 < req.body.VENT_list_brandeos.length)) {
            _context14.next = 53;
            break;
          }
          _context14.next = 46;
          return (0, _database.getConnection)();
        case 46:
          _pool10 = _context14.sent;
          _context14.next = 49;
          return _pool10.request().input("REQMOV_REQ_id", _database.sql.Decimal, idReq).input("REQMOV_EQC_serie", _database.sql.VarChar, req.body.VENT_list_brandeos[_i12].EQVENT_EQC_serie).input("REQMOV_EQC_marca", _database.sql.VarChar, req.body.VENT_list_brandeos[_i12].EQUIP_marca).input("REQMOV_EQC_modelo", _database.sql.VarChar, req.body.VENT_list_brandeos[_i12].EQUIP_modelo).input("REQMOV_BRAND_desc", _database.sql.VarChar, '').input("REQMOV_cantidad", _database.sql.Decimal(18, 2), 1).input("REQMOV_PROD_desc", _database.sql.VarChar, '').input("REQMOV_tipo", _database.sql.Decimal, 1) //ES 1, ENTREGA DE EQUIPOS DESDE VENTAS
          .input("REQMOV_estado", _database.sql.Decimal, 1).query(_database.querys.addNewRequerimientoMovimiento);
        case 49:
          _result11 = _context14.sent;
        case 50:
          _i12++;
          _context14.next = 43;
          break;
        case 53:
          if (!(req.body.VENT_tipoVenta == 2)) {
            _context14.next = 66;
            break;
          }
          if (!(req.body.VENT_ventabrandeos.length > 0)) {
            _context14.next = 66;
            break;
          }
          _i13 = 0;
        case 56:
          if (!(_i13 < req.body.VENT_ventabrandeos.length)) {
            _context14.next = 66;
            break;
          }
          _context14.next = 59;
          return (0, _database.getConnection)();
        case 59:
          _pool11 = _context14.sent;
          _context14.next = 62;
          return _pool11.request().input("REQMOV_REQ_id", _database.sql.Decimal, idReq).input("REQMOV_EQC_serie", _database.sql.VarChar, '').input("REQMOV_EQC_marca", _database.sql.VarChar, '').input("REQMOV_EQC_modelo", _database.sql.VarChar, req.body.VENT_ventabrandeos[_i13].EQUIP_modelo).input("REQMOV_BRAND_desc", _database.sql.VarChar, req.body.VENT_ventabrandeos[_i13].BRAND_descripcion).input("REQMOV_cantidad", _database.sql.Decimal(18, 2), req.body.VENT_ventabrandeos[_i13].EQBRAND_cantidad).input("REQMOV_PROD_desc", _database.sql.VarChar, '').input("REQMOV_tipo", _database.sql.Decimal, 2) //ES 2, ENTREGA DE VIILES DESDE VENTAS
          .input("REQMOV_estado", _database.sql.Decimal, 1).query(_database.querys.addNewRequerimientoMovimiento);
        case 62:
          _result12 = _context14.sent;
        case 63:
          _i13++;
          _context14.next = 56;
          break;
        case 66:
          return _context14.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 69:
          return _context14.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 70:
          _context14.next = 76;
          break;
        case 72:
          _context14.prev = 72;
          _context14.t0 = _context14["catch"](0);
          res.status(500);
          res.send(_context14.t0.message);
        case 76:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 72]]);
  }));
  return function editVentaPorCierreCaso(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.editVentaPorCierreCaso = editVentaPorCierreCaso;
var editVentaPorConfirmadoBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorConfirmadoBrandeo);
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
  return function editVentaPorConfirmadoBrandeo(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.editVentaPorConfirmadoBrandeo = editVentaPorConfirmadoBrandeo;
var editVentaPorImpresionBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorImpresionBrandeo);
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
  return function editVentaPorImpresionBrandeo(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
exports.editVentaPorImpresionBrandeo = editVentaPorImpresionBrandeo;
var editVentaPorLaminadoBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorLaminadoBrandeo);
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
  return function editVentaPorLaminadoBrandeo(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
exports.editVentaPorLaminadoBrandeo = editVentaPorLaminadoBrandeo;
var editVentaPorCorteBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorCorteBrandeo);
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
  return function editVentaPorCorteBrandeo(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
exports.editVentaPorCorteBrandeo = editVentaPorCorteBrandeo;
var editVentaPorEntregadoBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("VENT_brandeoEquipo", req.body.brandeo).query(_database.querys.editVentaPorEntregadoBrandeo);
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
  return function editVentaPorEntregadoBrandeo(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
exports.editVentaPorEntregadoBrandeo = editVentaPorEntregadoBrandeo;
var editVentaPorPegadoBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorBrandeoPegado);
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
  return function editVentaPorPegadoBrandeo(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
exports.editVentaPorPegadoBrandeo = editVentaPorPegadoBrandeo;
var editVentaPorCerrarBrandeo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorCerrarBrandeo);
        case 6:
          result = _context21.sent;
          if (!(result.rowsAffected == 1)) {
            _context21.next = 11;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context21.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context21.next = 18;
          break;
        case 14:
          _context21.prev = 14;
          _context21.t0 = _context21["catch"](0);
          res.status(500);
          res.send(_context21.t0.message);
        case 18:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 14]]);
  }));
  return function editVentaPorCerrarBrandeo(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
exports.editVentaPorCerrarBrandeo = editVentaPorCerrarBrandeo;
var getInventarioTotal = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getInventarioTotal);
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
  return function getInventarioTotal(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
exports.getInventarioTotal = getInventarioTotal;
var getInventarioByIdEquipo = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getInventarioByIdEquipo);
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
  return function getInventarioByIdEquipo(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
exports.getInventarioByIdEquipo = getInventarioByIdEquipo;
var getImagenEquipoByVenta = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context24.sent;
          _context24.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getImagenEquipoByVenta);
        case 6:
          result = _context24.sent;
          res.json(result.recordset);
          _context24.next = 14;
          break;
        case 10:
          _context24.prev = 10;
          _context24.t0 = _context24["catch"](0);
          res.status(500);
          res.send(_context24.t0.message);
        case 14:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 10]]);
  }));
  return function getImagenEquipoByVenta(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
exports.getImagenEquipoByVenta = getImagenEquipoByVenta;
var getImagenEquipoRevisionByVenta = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getImagenEquipoRevisionByVenta);
        case 6:
          result = _context25.sent;
          res.json(result.recordset);
          _context25.next = 14;
          break;
        case 10:
          _context25.prev = 10;
          _context25.t0 = _context25["catch"](0);
          res.status(500);
          res.send(_context25.t0.message);
        case 14:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 10]]);
  }));
  return function getImagenEquipoRevisionByVenta(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
exports.getImagenEquipoRevisionByVenta = getImagenEquipoRevisionByVenta;
var createImageEquipoPegado = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var imageruta, i, img, pool, result;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          imageruta = '';
          if (!(req.files.length > 0)) {
            _context26.next = 19;
            break;
          }
          i = 0;
        case 4:
          if (!(i < req.files.length)) {
            _context26.next = 18;
            break;
          }
          _context26.next = 7;
          return cloudinary.uploader.upload(req.files[i].path);
        case 7:
          img = _context26.sent;
          imageruta = img.secure_url;
          _context26.next = 11;
          return (0, _database.getConnection)();
        case 11:
          pool = _context26.sent;
          _context26.next = 14;
          return pool.request().input("IMGEQUIP_VENT_id", req.params.id).input("IMGEQUIP_ruta", _database.sql.VarChar, imageruta).input("IMGEQUIP_USU_id", _database.sql.Decimal, req.body.idUser).query(_database.querys.createImageEquipoPegado);
        case 14:
          result = _context26.sent;
        case 15:
          i++;
          _context26.next = 4;
          break;
        case 18:
          return _context26.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 19:
          _context26.next = 25;
          break;
        case 21:
          _context26.prev = 21;
          _context26.t0 = _context26["catch"](0);
          res.status(500);
          res.send(_context26.t0.message);
        case 25:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 21]]);
  }));
  return function createImageEquipoPegado(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
exports.createImageEquipoPegado = createImageEquipoPegado;
var createImageEquipoRevisado = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var imageruta, i, img, pool, result;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          imageruta = '';
          if (!(req.files.length > 0)) {
            _context27.next = 19;
            break;
          }
          i = 0;
        case 4:
          if (!(i < req.files.length)) {
            _context27.next = 18;
            break;
          }
          _context27.next = 7;
          return cloudinary.uploader.upload(req.files[i].path);
        case 7:
          img = _context27.sent;
          imageruta = img.secure_url;
          _context27.next = 11;
          return (0, _database.getConnection)();
        case 11:
          pool = _context27.sent;
          _context27.next = 14;
          return pool.request().input("IMGEQUIP_VENT_id", req.params.id).input("IMGEQUIP_ruta", _database.sql.VarChar, imageruta).input("IMGEQUIP_USU_id", _database.sql.Decimal, req.body.idUser).query(_database.querys.createImageEquipoRevisado);
        case 14:
          result = _context27.sent;
        case 15:
          i++;
          _context27.next = 4;
          break;
        case 18:
          return _context27.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 19:
          _context27.next = 25;
          break;
        case 21:
          _context27.prev = 21;
          _context27.t0 = _context27["catch"](0);
          res.status(500);
          res.send(_context27.t0.message);
        case 25:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 21]]);
  }));
  return function createImageEquipoRevisado(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
exports.createImageEquipoRevisado = createImageEquipoRevisado;
var updateEquipoInventory = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).input("serie", _database.sql.Decimal, req.body.serie).input("idUser", _database.sql.Decimal, req.body.idUser).query(_database.querys.updateEquipoInventory);
        case 6:
          result = _context28.sent;
          if (!(result.rowsAffected[0] == 1)) {
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
            msg: "No se pudo actualizar, consulte con el administrador",
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
  return function updateEquipoInventory(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
exports.updateEquipoInventory = updateEquipoInventory;
var editVentaPorRevisionBodega = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          _context29.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context29.sent;
          _context29.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorRevisionBodega);
        case 6:
          result = _context29.sent;
          if (!(result.rowsAffected == 1)) {
            _context29.next = 11;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context29.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context29.next = 18;
          break;
        case 14:
          _context29.prev = 14;
          _context29.t0 = _context29["catch"](0);
          res.status(500);
          res.send(_context29.t0.message);
        case 18:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 14]]);
  }));
  return function editVentaPorRevisionBodega(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
exports.editVentaPorRevisionBodega = editVentaPorRevisionBodega;
var editVentaPorAprobacion = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          _context30.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context30.sent;
          _context30.next = 6;
          return pool.request().input("id", req.params.id).input("VENT_aprobado", _database.sql.Decimal, req.body.estado).query(_database.querys.editVentaPorAprobacion);
        case 6:
          result = _context30.sent;
          if (!(result.rowsAffected == 1)) {
            _context30.next = 11;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context30.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context30.next = 18;
          break;
        case 14:
          _context30.prev = 14;
          _context30.t0 = _context30["catch"](0);
          res.status(500);
          res.send(_context30.t0.message);
        case 18:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 14]]);
  }));
  return function editVentaPorAprobacion(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
exports.editVentaPorAprobacion = editVentaPorAprobacion;
var editVentaPorNoAprobacion = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          _context31.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context31.sent;
          _context31.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaPorNoAprobacion);
        case 6:
          result = _context31.sent;
          if (!(result.rowsAffected == 1)) {
            _context31.next = 11;
            break;
          }
          return _context31.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context31.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context31.next = 18;
          break;
        case 14:
          _context31.prev = 14;
          _context31.t0 = _context31["catch"](0);
          res.status(500);
          res.send(_context31.t0.message);
        case 18:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 14]]);
  }));
  return function editVentaPorNoAprobacion(_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}();
exports.editVentaPorNoAprobacion = editVentaPorNoAprobacion;
var editVentaEquipoRevisado = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          _context32.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context32.sent;
          _context32.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.editVentaEquipoRevisado);
        case 6:
          result = _context32.sent;
          if (!(result.rowsAffected == 1)) {
            _context32.next = 11;
            break;
          }
          return _context32.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context32.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context32.next = 18;
          break;
        case 14:
          _context32.prev = 14;
          _context32.t0 = _context32["catch"](0);
          res.status(500);
          res.send(_context32.t0.message);
        case 18:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 14]]);
  }));
  return function editVentaEquipoRevisado(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();
exports.editVentaEquipoRevisado = editVentaEquipoRevisado;
var getCountRevisionEquipo = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          _context33.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context33.sent;
          _context33.next = 6;
          return pool.request().query(_database.querys.getCountRevisionEquipo);
        case 6:
          result = _context33.sent;
          res.json(result.recordset);
          _context33.next = 14;
          break;
        case 10:
          _context33.prev = 10;
          _context33.t0 = _context33["catch"](0);
          res.status(500);
          res.send(_context33.t0.message);
        case 14:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 10]]);
  }));
  return function getCountRevisionEquipo(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}();
exports.getCountRevisionEquipo = getCountRevisionEquipo;
var getInventarioIndividual = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.prev = 0;
          _context34.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context34.sent;
          _context34.next = 6;
          return pool.request().query(_database.querys.getInventarioIndividual);
        case 6:
          result = _context34.sent;
          res.json(result.recordset);
          _context34.next = 14;
          break;
        case 10:
          _context34.prev = 10;
          _context34.t0 = _context34["catch"](0);
          res.status(500);
          res.send(_context34.t0.message);
        case 14:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[0, 10]]);
  }));
  return function getInventarioIndividual(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
exports.getInventarioIndividual = getInventarioIndividual;
var getInventarioAgrupado = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _context35.prev = 0;
          _context35.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context35.sent;
          _context35.next = 6;
          return pool.request().query(_database.querys.getInventarioAgrupado);
        case 6:
          result = _context35.sent;
          res.json(result.recordset);
          _context35.next = 14;
          break;
        case 10:
          _context35.prev = 10;
          _context35.t0 = _context35["catch"](0);
          res.status(500);
          res.send(_context35.t0.message);
        case 14:
        case "end":
          return _context35.stop();
      }
    }, _callee35, null, [[0, 10]]);
  }));
  return function getInventarioAgrupado(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}();
exports.getInventarioAgrupado = getInventarioAgrupado;
var getHistPorSerie = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          _context36.prev = 0;
          _context36.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context36.sent;
          _context36.next = 6;
          return pool.request().input("serie", req.params.serie).query(_database.querys.getHistorialPorSerie);
        case 6:
          result = _context36.sent;
          res.json(result.recordset);
          _context36.next = 14;
          break;
        case 10:
          _context36.prev = 10;
          _context36.t0 = _context36["catch"](0);
          res.status(500);
          res.send(_context36.t0.message);
        case 14:
        case "end":
          return _context36.stop();
      }
    }, _callee36, null, [[0, 10]]);
  }));
  return function getHistPorSerie(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}();
exports.getHistPorSerie = getHistPorSerie;
var getHistPorCodTag = /*#__PURE__*/function () {
  var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          _context37.prev = 0;
          _context37.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context37.sent;
          _context37.next = 6;
          return pool.request().input("codTag", req.params.codTag).query(_database.querys.getHistorialPorCodTag);
        case 6:
          result = _context37.sent;
          res.json(result.recordset);
          _context37.next = 14;
          break;
        case 10:
          _context37.prev = 10;
          _context37.t0 = _context37["catch"](0);
          res.status(500);
          res.send(_context37.t0.message);
        case 14:
        case "end":
          return _context37.stop();
      }
    }, _callee37, null, [[0, 10]]);
  }));
  return function getHistPorCodTag(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}();
exports.getHistPorCodTag = getHistPorCodTag;
var editFechaEntregaVinil = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          _context38.prev = 0;
          _context38.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context38.sent;
          _context38.next = 6;
          return pool.request().input("ENTVINIL_VENT_id", req.params.id).input("ENTVINIL_fecha", _database.sql.DateTime, req.body.FechaEntrega).input("ENTVINIL_USU_ing", _database.sql.Decimal, req.body.idUser).query(_database.querys.addFechaEntregaVinil);
        case 6:
          result = _context38.sent;
          if (!(result.rowsAffected[0] == 1)) {
            _context38.next = 11;
            break;
          }
          return _context38.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 11:
          return _context38.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context38.next = 18;
          break;
        case 14:
          _context38.prev = 14;
          _context38.t0 = _context38["catch"](0);
          res.status(500);
          res.send(_context38.t0.message);
        case 18:
        case "end":
          return _context38.stop();
      }
    }, _callee38, null, [[0, 14]]);
  }));
  return function editFechaEntregaVinil(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}();
exports.editFechaEntregaVinil = editFechaEntregaVinil;
var addNumEnsambleVinil = /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          _context39.prev = 0;
          _context39.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context39.sent;
          _context39.next = 6;
          return pool.request().input("id", req.params.id).input("EQBRAND_codEnsamble", req.body.Factura).query(_database.querys.addNumEnsambleVinil);
        case 6:
          result = _context39.sent;
          if (!(result.rowsAffected == 1)) {
            _context39.next = 11;
            break;
          }
          return _context39.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context39.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context39.next = 18;
          break;
        case 14:
          _context39.prev = 14;
          _context39.t0 = _context39["catch"](0);
          res.status(500);
          res.send(_context39.t0.message);
        case 18:
        case "end":
          return _context39.stop();
      }
    }, _callee39, null, [[0, 14]]);
  }));
  return function addNumEnsambleVinil(_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}();
exports.addNumEnsambleVinil = addNumEnsambleVinil;
var addNumEnsambleVinilEquipo = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          _context40.prev = 0;
          _context40.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context40.sent;
          _context40.next = 6;
          return pool.request().input("id", req.params.id).input("EQVENT_codEnsambleB", req.body.Factura).query(_database.querys.addNumEnsambleVinilEquipo);
        case 6:
          result = _context40.sent;
          if (!(result.rowsAffected == 1)) {
            _context40.next = 11;
            break;
          }
          return _context40.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context40.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context40.next = 18;
          break;
        case 14:
          _context40.prev = 14;
          _context40.t0 = _context40["catch"](0);
          res.status(500);
          res.send(_context40.t0.message);
        case 18:
        case "end":
          return _context40.stop();
      }
    }, _callee40, null, [[0, 14]]);
  }));
  return function addNumEnsambleVinilEquipo(_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}();
exports.addNumEnsambleVinilEquipo = addNumEnsambleVinilEquipo;
var addNumEnsambleEquipo = /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          _context41.prev = 0;
          _context41.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context41.sent;
          _context41.next = 6;
          return pool.request().input("id", req.params.id).input("EQVENT_codEnsambleE", req.body.Factura).query(_database.querys.addNumEnsambleEquipo);
        case 6:
          result = _context41.sent;
          if (!(result.rowsAffected == 1)) {
            _context41.next = 11;
            break;
          }
          return _context41.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 11:
          return _context41.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 12:
          _context41.next = 18;
          break;
        case 14:
          _context41.prev = 14;
          _context41.t0 = _context41["catch"](0);
          res.status(500);
          res.send(_context41.t0.message);
        case 18:
        case "end":
          return _context41.stop();
      }
    }, _callee41, null, [[0, 14]]);
  }));
  return function addNumEnsambleEquipo(_x81, _x82) {
    return _ref41.apply(this, arguments);
  };
}();
exports.addNumEnsambleEquipo = addNumEnsambleEquipo;