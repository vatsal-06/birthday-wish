package main

import (
    "fmt"
    "net/http"
    "strings"
)

func main() {
    http.Handle("/", http.FileServer(http.Dir("./static"))) // Serve static files
    http.HandleFunc("/check", passwordHandler)              // Password API

    fmt.Println("Server running at http://localhost:8080/")
    http.ListenAndServe(":8080", nil)
}

func passwordHandler(w http.ResponseWriter, r *http.Request) {
    r.ParseForm()
    userPassword := r.FormValue("password")
    correctPassword := "butterfly" // ← your chosen password

    if strings.EqualFold(userPassword, correctPassword) {
        w.Write([]byte("correct"))
    } else {
        w.Write([]byte("incorrect"))
    }
}
