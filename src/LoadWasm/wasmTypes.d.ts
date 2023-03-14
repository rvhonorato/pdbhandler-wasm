declare global {
  export interface Window {
    Go: any;
    // Declare your wasm functions here
    sayHi: () => string;
  }
}

export {};
