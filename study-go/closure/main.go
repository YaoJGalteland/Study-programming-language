package main

import "fmt"

func counter() func() int {
	count := 0 // This variable is captured by the closure
	return func() int {
		count++ // Modifies the outer variable
		return count
	}
}

func main() {
	increment := counter() // Create a closure instance

	fmt.Println(increment()) // 1
	fmt.Println(increment()) // 2
	fmt.Println(increment()) // 3
}
