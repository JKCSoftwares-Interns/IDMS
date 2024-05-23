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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var express_1 = require("express");
var db_ts_1 = require("./db.ts");
var PORT = process.env.PORT || '3000';
var app = (0, express_1.default)();
app.get('/fetchProducts', function (req, res) {
    res.json(data);
});
app.get('/', function (req, res) {
    res.send("hello world");
});
/* WORKING ON THIS | DON'T TOUCH  */
app.get('/products/show', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conn, rows, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                conn = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, 5, 6]);
                return [4 /*yield*/, db_ts_1.default.getConnection()];
            case 2:
                conn = _a.sent();
                return [4 /*yield*/, conn.query("SELECT * FROM Products")];
            case 3:
                rows = _a.sent();
                res.json(rows);
                return [3 /*break*/, 6];
            case 4:
                err_1 = _a.sent();
                console.log(err_1);
                res.status(500).send(err_1);
                return [3 /*break*/, 6];
            case 5:
                if (conn)
                    conn.release();
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); });
var data = [
    {
        productId: 'P123',
        productName: 'Product 1',
        category: 'Category 1',
        measuringUnit: 'Unit 1',
        packSize: 10,
        noOfUnits: 100,
        unitMRP: 100.00,
        packMRP: 1000.00,
        manufacturer: 'Manufacturer 1',
        marketer: 'Marketer 1',
        supplier: 'Supplier 1',
        upc: 'UPC1',
        hsn: 'HSN1',
        cgst: 10.00,
        sgst: 10.00,
        igst: 10.00,
        cess: 10.00,
        loadPrice: 90.00,
        unloadingPrice: 110.00,
        dateAdded: new Date('2022-01-01'),
        addedBy: 'User 1',
        lastEditedDate: new Date('2022-01-02'),
        lastEditedBy: 'User 2'
    },
    {
        productId: 'P124',
        productName: 'Product 2',
        category: 'Category 2',
        measuringUnit: 'Unit 2',
        packSize: 20,
        noOfUnits: 200,
        unitMRP: 200.00,
        packMRP: 2000.00,
        manufacturer: 'Manufacturer 2',
        marketer: 'Marketer 2',
        supplier: 'Supplier 2',
        upc: 'UPC2',
        hsn: 'HSN2',
        cgst: 20.00,
        sgst: 20.00,
        igst: 20.00,
        cess: 20.00,
        loadPrice: 180.00,
        unloadingPrice: 220.00,
        dateAdded: new Date('2022-02-01'),
        addedBy: 'User 3',
        lastEditedDate: new Date('2022-02-02'),
        lastEditedBy: 'User 4'
    }
];
app.get('/add', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conn, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                conn = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, db_ts_1.default.getConnection()];
            case 2:
                conn = _a.sent();
                return [4 /*yield*/, conn.query("\n    INSERT INTO Products (\n      productId, productName, category, measuringUnit, packSize, noOfUnits, \n      unitMRP, packMRP, manufacturer, marketer, supplier, upc, hsn, cgst, \n      sgst, igst, cess, loadPrice, unloadingPrice, dateAdded, addedBy, \n      lastEditedDate, lastEditedBy\n    ) VALUES (\n      'P123', 'Product 1', 'Category 1', 'Unit 1', 10, 100, \n      100.00, 1000.00, 'Manufacturer 1', 'Marketer 1', 'Supplier 1', 'UPC1', 'HSN1', 10.00, \n      10.00, 10.00, 10.00, 90.00, 110.00, '2022-01-01 00:00:00', 'User 1', \n      '2022-01-02 00:00:00', 'User 2'\n    );\n    \n    INSERT INTO Products (\n      productId, productName, category, measuringUnit, packSize, noOfUnits, \n      unitMRP, packMRP, manufacturer, marketer, supplier, upc, hsn, cgst, \n      sgst, igst, cess, loadPrice, unloadingPrice, dateAdded, addedBy, \n      lastEditedDate, lastEditedBy\n    ) VALUES (\n      'P124', 'Product 2', 'Category 2', 'Unit 2', 20, 200, \n      200.00, 2000.00, 'Manufacturer 2', 'Marketer 2', 'Supplier 2', 'UPC2', 'HSN2', 20.00, \n      20.00, 20.00, 20.00, 180.00, 220.00, '2022-02-01 00:00:00', 'User 3', \n      '2022-02-02 00:00:00', 'User 4'\n    );\n    ")];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                console.log('couldn\'t add: ', err_2);
                res.status;
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { console.log("server running at 3000"); });
