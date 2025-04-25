let salaries=[4000,2000];

function dashingNumbers(num) {
    num=num+"";
    let str = ""
    for (let i = 0; i < num.length; i++) {
        str += num[i];
        if (i != num.length - 1) {
            str += "-"
        }
    }
    return str;
}