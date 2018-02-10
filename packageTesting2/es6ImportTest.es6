import * as secondPackage from 'secondpackage';
import { helloWorld } from "../secondPackage";
let x = require('secondpackage');

secondPackage.helloWorld();
helloWorld();
x.helloWorld2();