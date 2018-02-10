#NpmLearning

The purpose of this repository is to learn the basic and advanced mechanism to
import and export npm modules. From importing vanilla javascript modules to
typescript.

Folders:
* firstPackage: Contain a simple vanilla javascript module
* packageTesting: Consumes the firstPackage module using vanilla javascript and
    bundling an es6 script.
* secondPackage: Contain a es6 script using the es6 module as export mechanism,
    which is compiled with webpack and babel with commonjs as library target.
* packageTesting2: Consumes the secondPackage module using vanilla javascript 
    and bundling an es6 script.
* typescriptPackage: Contain a typescript script using the es6 module to export,
    which is compiled with webpack and ts-loader with commonjs as library target.
* typescriptPackageTesting: Consumes the typescriptPackage as a vanilla
    javascript script, as a es6 bundled with webpack, and as a typescript script
    bundled with webpack.
    
This repository also shows:
* The use of nested .gitignore
* Using local packages