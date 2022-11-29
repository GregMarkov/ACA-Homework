function threeDaysAgo(date) {
    const day = date.getDate();
    date.setDate(day - 3);

    let dayToGet = date.getDate();
    let monthToGet = date.getMonth() + 1;
    let yearToGet = date.getFullYear();

    if (dayToGet < 10) {
        dayToGet = '0' + dayToGet;
    }
    if (monthToGet < 10) {
        monthToGet = '0' + monthToGet;
    }

    console.log(`${yearToGet}-${monthToGet}-${dayToGet}`);
}

threeDaysAgo(new Date(2018, 0, 1))
threeDaysAgo(new Date(2015, 5, 17))
threeDaysAgo(new Date(1965, 3, 15))