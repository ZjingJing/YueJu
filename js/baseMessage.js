/**
 * Created by ZJing on 2017/3/3.
 */
require(['jquery'],function($){
    //����ÿ�
    $("#right-more input").focus(function(){
        if($(this).val() == this.defaultValue){
            this.value = "";
        }
    }).blur(function(){
        $(this).val(this.value == "" ? this.defaultValue : this.value);
    })
    //ѡ��л�
    var $dDiv = $("#left-main .house-more .content .head div");
    var $Aiyaya = $("#left-main .house-more .content .aiyaya");
    $dDiv.on('click',function(){
        var idx = $(this).index();
        $dDiv.eq(idx).addClass("selected").siblings().removeClass("selected");
        $Aiyaya.eq(idx).addClass("selected").siblings().removeClass("selected");
    });
    //ͼƬ�ֲ�
    var $bigImg = $("#main .big-img img");
    var $smallImg = $("#main .small-img img");
    var iNow = 0;
    var timer;
    timer = setInterval(function(){
        changeImg(iNow);
        iNow++;
        iNow==4?iNow=0:iNow;
    },1000);
    $bigImg.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            changeImg(iNow);
            iNow++;
            iNow==4?iNow=0:iNow;
        },1000);
        //timer();
    });
    $smallImg.hover(function(){
        iNow = $(this).parent().index();
        changeImg(iNow);
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            changeImg(iNow);
            iNow++;
            iNow==4?iNow=0:iNow;
        },1000);
        //timer();
    });
    $smallImg.on('click',function(){
        iNow = $(this).parent().index();
        changeImg(iNow);
        //$bigImg.attr("src",$(this).attr("src"));
        //$(this).addClass("selected").parent("li").siblings().children("img").removeClass("selected");
        //console.log($(this).index()==$smallImg.eq(0).index());

    });
    function changeImg(idx){
        $bigImg.attr("src",$smallImg.eq(idx).attr("src"));
        $smallImg.eq(idx).addClass("selected").parents("li")
            .siblings().children("img").removeClass("selected");
    }
    //ס������
    layui.use('laydate', function(){
        var laydate = layui.laydate;
        var start = {
            min: laydate.now()
            ,max: '2099-06-16 23:59:59'
            ,istoday: false
            ,choose: function(datas){
                end.min = datas + 1; //��ʼ��ѡ�ú����ý����յ���С����
                end.start = datas + 1; //�������յĳ�ʼֵ�趨Ϊ��ʼ��
            }
        };
        var end = {
            min: laydate.now()
            ,max: '2099-06-16 23:59:59'
            //,istoday: false
            ,choose: function(datas){
                start.max = datas; //������ѡ�ú����ÿ�ʼ�յ��������
            }
        };
        document.getElementById('LAY_demorange_s').onclick = function(){
            start.elem = this;
            laydate(start);
        };
        document.getElementById('LAY_demorange_e').onclick = function(){
            end.elem = this;
            laydate(end);
        }
    });














});
