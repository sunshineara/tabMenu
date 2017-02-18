

function TabMenu(options) {
    this.init(options);
    this.initEvent();
}

TabMenu.prototype = {

    // ���� ����
    init: function (opt) {
        this.opt = opt;
        this.$tabMenu = $(this.opt.selector).find(".tab_menu li");
        this.$tabContents = $(this.opt.selector).find(".tab_contents li");
        this.currentIndex = 0;
        this.oldIndex = null;
    },

    // �������ڸ��� ������ �̺�Ʈ��
    initEvent: function () {
        var _this = this;  //tab�޴�

        this.$tabMenu.on("click", function () {
            _this.renewIndex( $(this) );
            _this.toggleMenu( $(this) );
            _this.toggleContent();
        });
    },

    // ��ȣ ���� ���
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },


    // �޴� ���� ���
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass("active");
        $this.addClass("active");
    },

    // �̹��� ���� ���
    toggleContent: function () {
        var duration = 0;

        if (this.opt.fade === true) {
            // duration = this.opt.duration ? this.opt.duration : 400;
            if (this.opt.duration === true) {
                duration = this.opt.duration;
            } else {
                duration = 400;
            }
        }


        this.$tabContents.eq(this.oldIndex).stop(false, true).fadeOut(duration);
        this.$tabContents.eq(this.currentIndex).stop(false, true).fadeIn(duration);
    }
};