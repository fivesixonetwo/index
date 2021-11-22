const getMinDate = function () {
    let dateObj = new Date();
    const arr = dateObj.toDateString().split(" ")
    let month = arr[2] === "01" ? dateObj.getUTCMonth() + 2 : dateObj.getUTCMonth() + 1; //months from 1-12
    let day = arr[2];
    let year = dateObj.getUTCFullYear();
    let newdate = month + "/" + day + "/" + year;
    return newdate;
}

$(".searchbar__checkin--in").daterangepicker({
    "minDate": getMinDate(),
}, function (start, end) {
    
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});
$(".searchbar__checkin--out").daterangepicker({
    "opens": "left",
    "minDate": getMinDate()
}, function (start, end) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});
