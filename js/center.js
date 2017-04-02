/**
 * Created by ZJing on 2017/3/10.
 */
require(['jquery'],function($){
    //var $aA = $('#side-bar .menu a');
    var $aLi = $('#side-bar .menu li');
    var $aMain = $('#main > ul > li');
    $aLi.on('click',function(){
        var idx = $(this).index();
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $aMain.eq(idx).show().siblings().hide();
    })

})