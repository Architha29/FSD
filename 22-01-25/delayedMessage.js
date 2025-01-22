function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) {
            callback();
        }
    }, delay);
}

delayedMessage("This is delayed", 3000, () => {
    console.log("Hello");
});
