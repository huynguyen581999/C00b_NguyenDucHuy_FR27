document.addEventListener('DOMContentLoaded', () => {

    //Lay the input bat dau va the input ket thuc
    let input_start = document.getElementById("input_start");
    let input_end = document.getElementById("input_end");

    //Lay nut ap dung
    let btn_Apply = document.getElementById("btn_Apply");

    // Gan gia tri noi dung hien thi bang gia tri input bat dau
    let current_value = input_start.value;

    // Lấy the span hien thi so
    let contentShow = document.getElementById("contentShow");

    //Thiet lap gia tri ban dau cho the hien thi so
    contentShow.innerHTML = input_start.value;

    //Xu ly onclick nut Apply
    btn_Apply.onclick = () => {
        if (Number(input_start.value) < Number(input_end.value)) {
            contentShow.innerHTML = input_start.value;
            current_value = contentShow.innerHTML;
            clearInterval(save_Interval);
        }
        else {
            alert("Giá trị ban đầu phải bé hơn giá trị sau !");
        };

    };

    //Lay the tang giam
    let descrease = document.getElementById("descrease");
    let ascending = document.getElementById("ascending");

    //Xu ly onclick nut tang,giam
    descrease.onclick = () => {

        if (current_value > Number(input_start.value)) {
            contentShow.innerHTML = --current_value;
        }
        else {
            alert("Đã đạt tới ngưỡng giá trị nhỏ nhất");
        };

    };

    ascending.addEventListener('click', () => {
        if (current_value < Number(input_end.value)) {
            contentShow.innerHTML = ++current_value;
        }
        else {
            alert("Đã đạt tới ngưỡng giá trị lớn nhất");
        };
    });

    //Lay the Play
    let btn_Play = document.getElementById("btn_Play");

    //Luu ham Interval
    let save_Interval;

    // //Xu ly onclick nut Play
    btn_Play.onclick = () => {
        save_Interval = setInterval(() => {

            if (current_value < Number(input_end.value)) {
                contentShow.innerHTML = ++current_value;
            }
            else {
                clearInterval(save_Interval);
            };
        }, 1000);
    };


    //Lay the Pause
    let btn_Pause = document.getElementById("btn_Pause");

    //Xu ly onclick nut Pause
    btn_Pause.onclick = () => {
        clearInterval(save_Interval);
    };


    //Xu ly onclick nut Hello
    let btn_Hello = document.getElementById("btn_Hello");
    btn_Hello.onclick = () => {
        alert("Xin chào !");
    };

    //Xu ly onclick nut Good bye
    let btn_Goodbye = document.getElementById("btn_Goodbye");
    btn_Goodbye.onclick = () => {
        alert("Tạm biệt");
    };
});





