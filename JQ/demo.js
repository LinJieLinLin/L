var func = (function(w, d) {
    var nowPage = 0;
    return {
        changePage: function(argPage) {
            nowPage = argPage||0;
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
    func.changePage(argPage);
}
