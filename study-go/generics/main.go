package main

import "fmt"

// 1. Generic function with type parameter T, T can be any type value
func PrintValue[T any](value T) {
	fmt.Println(value)
}

// 2. Generic slice filter
func Filter[T any](items []T, predicate func(T) bool) []T {
	var result []T
	for _, item := range items {
		if predicate(item) {
			result = append(result, item)
		}
	}
	return result
}

// 3. Generic Constraints
// Constraint: Only numeric types
type Number interface {
	int | float64
}

// Generic function with constraint
func Add[T Number](a, b T) T {
	return a + b
}

// 4. Generic struct
type Pair[T, U any] struct {
	First  T
	Second U
}

func main() {
	PrintValue(42)      // Works with int
	PrintValue("Hello") // Works with string
	PrintValue(3.14)    // Works with float

	// filter even numbers
	numbers := []int{1, 2, 3, 4, 5}
	evens := Filter(numbers, func(n int) bool { return n%2 == 0 })
	fmt.Println(evens) // Output: [2 4]

	fmt.Println(Add[int](5, 10)) // Works with int
	fmt.Println(Add(3.2, 4.9))   // Works with float64

	p1 := Pair[int, string]{First: 1, Second: "One"}
	p2 := Pair[string, float64]{First: "Pi", Second: 3.14}

	fmt.Println(p1) // {1 One}
	fmt.Println(p2) // {Pi 3.14}
}
