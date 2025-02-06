package main

import "fmt"

// Define an interface
type Speaker interface {
	Speak() string
}

// Define a struct
type Dog struct{}

// Implement the Speak method for Dog
func (d Dog) Speak() string {
	return "Woof"
}

// Define another struct
type Cat struct{}

func (c Cat) Speak() string {
	return "Meow"
}

// A function that takes a Speaker interface
func MakeSound(s Speaker) {
	fmt.Println(s.Speak())
}

func main() {

	dog := Dog{}
	cat := Cat{}

	MakeSound(dog)
	MakeSound(cat)
}
