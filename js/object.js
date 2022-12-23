const student1 = {
    id: 1,
    name: "abir",
    rollNum : 22,
    age: 22,
    hisFriends: ["kabiala","arafat"],
    friedsHabit: {
        smoke: "yes",
        goodBehabiar: "no",
        haveMotoCycle: "yes"
    }
}
student1.hisFriends[1]="lovly";
student1.friedsHabit.smoke="no"
const {smoke}=student1.friedsHabit
console.log(smoke)