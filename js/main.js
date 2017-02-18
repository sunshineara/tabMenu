$(document).ready(function () {

    var tab1 = new TabMenu({
        selector: ".tab1"
    }); //new는 원본을 복사해 사본만들기 (플러그인의 개념), 옵션을 안적으면 undefined가 들어간다. 1 == "1"처럼 fade부분이 원랜 true인데 여기선 false로 형변환일어난다.

    var tab2 = new TabMenu({
        selector: ".tab2",
        fade: true,
        duration: 400
    });

});

