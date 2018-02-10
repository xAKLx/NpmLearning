import * as typescriptPackage from 'typescriptpackage';
import { helloWorld, helloWorld2 } from "typescriptpackage";
let x = require('typescriptpackage');

typescriptPackage.helloWorld('hey o');
helloWorld('hey hey');
helloWorld2(parseInt('3'));
x.helloWorld2(' this should fail, but it doesn\'t as because require is generic');
