# pdbhandler-wasm

This is a simple example of how to use the pdbhandler library in a webassembly project.

The structure of the project is based on the `typescript-golang` template.

---

- `main.go` contains the go functions and their wrappers
- wrapped functions are declared in `src/LoadWasm/wasmTypes.d.ts`
- the functions should be callable with `window.nameOfMyGoFunction(arguments)`

check `package.json` for the start/build commands

_work-in-progress_
