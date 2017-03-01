# Test lodash typeings against docs examples 

Extracts all example code from [lodash](https://github.com/lodash/lodash) documentation 
and runs them agains the [typescript](https://github.com/Microsoft/TypeScript) compiler.

## Running

```
git submodule update --init --recursive
npm install
npm test
```

Current compilation errors are in [RESULTS.txt](./RESULTS.txt)

## See also

https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11170
