$(document).ready(function () {

    var tab1 = new TabMenu({
        selector: ".tab1"
    }); //new�� ������ ������ �纻����� (�÷������� ����), �ɼ��� �������� undefined�� ����. 1 == "1"ó�� fade�κ��� ���� true�ε� ���⼱ false�� ����ȯ�Ͼ��.

    var tab2 = new TabMenu({
        selector: ".tab2",
        fade: true,
        duration: 400
    });

});

