"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash")); // npm i --save-dev @types/lodash
const data = [
    {
        username: 'yovany',
        role: 'admin'
    },
    {
        username: 'rubi',
        role: 'seller'
    },
    {
        username: 'rodrigo',
        role: 'seller'
    },
    {
        username: 'santi',
        role: 'customer'
    }
];
const rta = lodash_1.default.groupBy(data, item => item.role);
console.log(rta);
