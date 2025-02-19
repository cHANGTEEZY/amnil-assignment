// we use switch case when we have multiple condtions we need to check

function workout(day) {
    switch (day) {
        case 0:
            console.log("Do 20 pushups, 4 sets");
            break;
        case 1:
            console.log("Do 20 biceps curls, 4 sets");
            break;
        case 2:
            console.log("Do 20 pull ups, 4 sets");
            break;
        case 3:
            console.log("Do 10 russian twist,4 sets");
            break;
        case 4:
            console.log("Do 20 jumping jacks, 5 sets");
            break;
        case 5:
            console.log("Do yoga 40 mins");
            break;
        case 6:
            console.log("Cheat day");
            break;
    }

}

const day = new Date().getDay();
workout(day);
