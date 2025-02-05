package main

import (
	"fmt"
	"strings"
)

// package level variable, can be accessed inside any funcs
var remainingTickets uint = 50

func main() {

	greatUsers()
	for {
		var userTickets uint
		// asking for user input
		fmt.Println("Enter number of tickets: ")
		fmt.Scan(&userTickets)

		// array
		var bookings = [50]string{} // or bookings := [50]string{}
		bookings[0] = "Nana"

		// slices
		var bookings_slices = []string{} // nearly the same as array, but remove the size // or bookings := []string{}
		bookings_slices = append(bookings_slices, "FirstName LastName")

		// for loop
		for _, bookings_slice := range bookings_slices {
			var names = strings.Fields(bookings_slice)
			fmt.Printf("The first name is %v\n", names[0])
		}

		// if else
		if remainingTickets < userTickets {
			fmt.Printf("Not enough tickets! We only have %v tickets remaining.\n", remainingTickets)
			continue // skip the remainder code and go to the next iteration of for loop
		} else {
			fmt.Println("Enough tickets!")
		}

		remainingTickets = remainingTickets - userTickets
		if remainingTickets == 0 {
			fmt.Println("fully booked.\n")
			break // ends the program
		}

	}

}

// function
func greatUsers() {
	fmt.Println("Welcome!")
}

func validateUserInput(firstName string, lastName string, email string, userTickets uint) (bool, bool, bool) {
	isValidName := len(firstName) >= 2 && len(lastName) >= 2
	isValidEmail := strings.Contains(email, "@")
	isValidTicketNumber := userTickets > 0 && userTickets <= remainingTickets
	return isValidName, isValidEmail, isValidTicketNumber
}
