package main

import (
	"syscall/js"
)

// go fucntions are defined here
func sayHi() string {
	return "Hi!"
}

// Wrap the go functions to be called from JavaScript
func wrappedSayHi() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		msg := sayHi()
		return msg
	})
}

func main() {
	ch := make(chan struct{})
	// -----------------------------------------------
	// Register the functions to be called from JavaScript
	js.Global().Set("sayHi", wrappedSayHi())
	//
	// -----------------------------------------------
	<-ch
}
