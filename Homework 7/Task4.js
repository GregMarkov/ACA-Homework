function longestTime (h, m, s) {
    if (m * 60 > s && m / 60 > h) {
       return m; 
    } else if (h * 60 > m && h * 3600 > s) {
        return h; 
    } else if (m * 60 < s && h * 3600 < s) {
        return s; 
    } else {
        return "All equal"
    }
}

console.log(longestTime(1, 59, 3598))
console.log(longestTime(2, 300, 15000))
console.log(longestTime(15, 955, 59400))