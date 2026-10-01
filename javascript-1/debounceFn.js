function debounce(callback, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}


const handleSearch = debounce((value) => {
    console.log("User stopped typing:", value);

    // emit / API call here
    // socket.emit("search", value);
}, 500);

input.addEventListener("input", (event) => {
    handleSearch(event.target.value);
});


// User types "Hello"
//        ↓
// input event fires
//        ↓
// event.target.value
//        ↓
// "Hello"
//        ↓
// handleSearch("Hello")
//        ↓
// (...args) receives "Hello"
//        ↓
// args = ["Hello"]
//        ↓
// wait 500ms
//        ↓
// callback(...args)
//        ↓
// callback("Hello")
//        ↓
// (value) receives "Hello"


// H
//  ↓
// 500ms timer

// He
//  ↓
// cancel previous timer
//  ↓
// new 500ms timer

// Hel
//  ↓
// cancel previous timer
//  ↓
// new 500ms timer

// Hell
//  ↓
// cancel previous timer
//  ↓
// new 500ms timer

// Hello
//  ↓
// cancel previous timer
//  ↓
// new 500ms timer