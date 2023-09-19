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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const pagination_1 = require("../../../helpers/pagination");
const porduct_model_1 = require("./porduct.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.Product.create(payload);
    return result;
});
const getProducts = (filter, pagination_options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = (0, pagination_1.calculatePagination)(pagination_options);
    const and_conditions = [];
    if (Object.keys(filter).length) {
        and_conditions.push({
            $and: Object.entries(filter).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sort_conditions = {};
    if (sortBy && sortOrder)
        sort_conditions[sortBy] = sortOrder;
    let where_condition;
    if ((filter === null || filter === void 0 ? void 0 : filter.category) === "all") {
        where_condition = {};
    }
    else if (and_conditions.length > 0) {
        where_condition = { $and: and_conditions };
    }
    else {
        where_condition = {};
    }
    const total = yield porduct_model_1.Product.countDocuments(where_condition);
    const result = yield porduct_model_1.Product.find(where_condition)
        .sort(sort_conditions)
        .skip(skip)
        .limit(limit);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.Product.findById(id);
    return result;
});
exports.ProductService = { createProduct, getProducts, getProduct };
