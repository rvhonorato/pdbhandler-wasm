import "./App.css";

function App() {
  // Use the function exported from wasm
  let msg = window.sayHi();

  return (
    <div>
      <button
        onClick={() => {
          alert(msg);
        }}
      >
        sayHi
      </button>
    </div>
  );
}

export default App;
