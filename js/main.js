$(document).ready(function () {

    var tab = new TabMenu(); //new는 원본을 복사해 사본만들기 (플러그인의 개념)

});


function TabMenu() {
    this.init();
    this.initEvent();
}

TabMenu.prototype = {

    // 구조 정리
    init: function () {
        this.$tabMenu = $(".tab_menu li");
        this.$tabContents = $(".tab_contents li");
        this.currentIndex = 0;
        this.oldIndex = null;
    },

    // 시작하자마자 실행할 이벤트들
    initEvent: function () {
        var _this = this;  //tab메뉴

        this.$tabMenu.on("click", function () {
            _this.renewIndex( $(this) );
            _this.toggleMenu( $(this) );
            _this.toggleContent();
        });
    },

    // 번호 갱신 기능
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },


    // 메뉴 변경 기능
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass("active");
        $this.addClass("active");
    },

    // 이미지 변경 기능
    toggleContent: function () {
        this.$tabContents.eq(this.oldIndex).hide();
        this.$tabContents.eq(this.currentIndex).show();
    }
};