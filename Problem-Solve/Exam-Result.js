let bangla = 50;
switch (true) {
    case (bangla >= 80):
        console.log("You got A+");
        break;
    case (bangla >= 70):
        console.log("You got A");
        break;
    case (bangla >= 60):
        console.log("You got A-");
        break;
    case (bangla >= 50):
        console.log("You got B");
        break;
    case (bangla >= 40):
        console.log("You got C");
        break;
    case (bangla >= 33):
        console.log("You got D");
        break;

    default:
        console.log("You failed");
        break;
}