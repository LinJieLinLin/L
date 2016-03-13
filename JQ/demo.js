var func = (function(w, d) {
    var nowPage = 0;
    $('.L').on('click', function() {
        var e=$(this);
        console.log(e);
    });
return {
    changePage: function(argPage) {
        nowPage = argPage || 0;
        $('[page]').css('display', 'none');
        $('[page="' + nowPage + '"]').css('display', 'block');
    }
};
})(window, document);

var section = $('section');
console.log($('section').length);
console.log($('body'));
var L = {};
func.changePage();


function changePage(argPage) {
    console.log(argPage);
    // func.changePage(argPage);
}
