package main

import (
	"example.com/myproject/helpers" // Use the module path from go.mod
)

func main() {
	helpers.PrintMessage("Hello from Helpers!")
	helpers.Welcome()
}
