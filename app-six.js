var userInput = parseInt(prompt("Enter the number you want to see the multiplication table:"));
for (var i = 1; i <= 10; i++) {

    document.write("<p>" + userInput + "*" + i + "=" + (userInput * i) + "</p>");
}