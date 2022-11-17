

let start = document.getElementById('ind');
document.body.append(start);


let timerFunc = () => {

    let f10 = () => {
        setTimeout(() => {
            console.log(10);
            ind.innerHTML = 10;
        }, 1000)
    }
    f10();

    let f9 = () => {
        setTimeout(() => {
            console.log(9);
            ind.innerHTML = 9;
        }, 2000)
    }
    f9();

    let f8 = () => {
        setTimeout(() => {
            console.log(8);
            start.innerHTML = 8;
        }, 3000)
    }
    f8();

    let f7 = () => {
        setTimeout(() => {
            console.log(7);
            start.innerHTML = 7;
        }, 4000)
    }
    f7();

    let f6 = () => {
        setTimeout(() => {
            console.log(6);
            start.innerHTML = 6;
        }, 5000)
    }
    f6();

    let f5 = () => {
        setTimeout(() => {
            console.log(5);
            start.innerHTML = 5;
        }, 6000)
    }
    f5();

    let f4 = () => {
        setTimeout(() => {
            console.log(4);
            start.innerHTML = 4;
        }, 7000)
    }
    f4();

    let f3 = () => {
        setTimeout(() => {
            console.log(3);
            start.innerHTML = 3;
        }, 8000)
    }
    f3();

    let f2 = () => {
        setTimeout(() => {
            console.log(2);
            start.innerHTML = 2;
        }, 9000)
    }
    f2();

    let f1 = () => {
        setTimeout(() => {
            console.log(1);
            start.innerHTML = 1;
        }, 10000)
    }
    f1();

    let f = () => {
        setTimeout(() => {
            console.log("Happy Independence Day");
            start.innerHTML = "Happy Independence Day";
        }, 11000)
    }
    f();
}
timerFunc();

