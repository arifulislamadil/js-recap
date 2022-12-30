const friends = ["arif", "abrar", "Talha", "takriya","talamirham "];

const bestFriend = (friends) => {
    let longestOne = friends[0];
    for (const friend of friends) {
        if(friend.length>longestOne.length){
            longestOne=friend 
        }
    }
    return longestOne
}

console.log(bestFriend(friends))