$(function(){

    var $section1 = $("#section1");
    var $header = $("#header");
    var $menu = $(".menu");
    var $subList = $(".subList");
    var $submenu = $(".submenu");
    
    // var windowWidth = $window.width();


    
    window.addEventListener('scroll',function(){
        console.log(
            "ScrollY: " ,window.scrollY,
            "header.offset().top:", $header.offset().top,
            "section1.offset().top:", $section1.offset().top,
            // "outerHeight : " ,$(window).outerHeight(),
            // "innerHeight : " ,$(window).innerHeight()*0.1
        );
    });
 
// -----------------------------------------------
// pop 메시지


        $("#notice>a").on("click",function(event){
            event.preventDefault();
            $("#noticeBox").css({display:"none"});
        });

        $("#noticeCheck>a").on("click",function(event){
            event.preventDefault();
            $("#noticeBox").css({display:"none"});
        });
       

         
// -----------------------------------------------
// 배너 
        var interval = 3000;
        var timerId = window.setInterval(slideImage,interval);
        var $imgList = $("#bannerlist");

        $imgList.parent().hover(
            function(){
                window.clearInterval(timerId);

            },
            function(){
                timerId=window.setInterval(slideImage, interval);
            }
        )

        function slideImage(){

            if($imgList.is(":animated")) return;

            $imgList.animate({"margin-left":"-100%"}, function(){
                $imgList.removeAttr("style").children(":first").appendTo(this);
            })
        };

// -----------------------------------------------
// 서브메뉴 
       

        $menu.mouseenter(function(){
            $subList.hide();
            var a = $(this).attr("id");
            $('#s'+a).slideDown(400);
        });

        $subList.mouseleave(function(){
            $(this).slideUp(400),
            $submenu.css({
                "box-shadow":"4px 4px 4px #cfcfcf6b"
            });
        });


// -----------------------------------------------
// tripType

        $("#tripType>ul>li>a").on("click", function(e){
            e.preventDefault();
            $("#tripType>ul>li>a").removeClass("pick");
            $(this).addClass("pick");
        });
      

// -----------------------------------------------
// 출발, 도착 박스

        $("#depPick").on("click", function(e){
            e.preventDefault();
            $("#closeBtn>h3").text("출발지 선택"),
            $("#depAirport").toggle();
            $("#depAirport").css({"left":"7%"});
        });

        $("#arrPick").on("click", function(e){
            e.preventDefault();
            $("#closeBtn>h3").text("도착지 선택"),
            $("#depAirport").toggle(),
            $("#depAirport").css({"left":"28%"});

        });
        $("#closeBtn>img").on("click", function(e){
            e.preventDefault();         
            $("#depAirport").toggle()
        });

// -----------------------------------------------

        var count1=0;
        var count2=0;
        var count3=0;

        
        $("#adult>.decrease").on("click", function(e){
            e.preventDefault();
            if(count1<=0){
                
                return;
            }else{
                count1-=1
            }
           
            $(this).siblings('.result').html(count1);
        })
        $("#adult>.increase").on("click", function(e){
            e.preventDefault();
            count1+=1
            $(this).siblings('.result').html(count1);
        })




        $("#child>.decrease").on("click", function(e){
            e.preventDefault();
           
            if(count2<=0){ 
                return;
            }else{
                count2-=1
            }
            $(this).siblings('.result').html(count2);
        })
        $("#child>.increase").on("click", function(e){
            e.preventDefault();
            count2+=1
            $(this).siblings('.result').html(count2);
        })


        $("#infant>.decrease").on("click", function(e){
            e.preventDefault();
            
            if(count3<=0){ 
                return;
            }else{
                count3-=1
            }
            $(this).siblings('.result').html(count3);
        })
        $("#infant>.increase").on("click", function(e){
            e.preventDefault();
            count3+=1
            $(this).siblings('.result').html(count3);
        })



// -----------------------------------------------

        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop() 
            var $navLeft = $("#navLeft");
            var $navRight = $("#navRight");
 
        
            if(scrollTop > 0){
                $navLeft.css({ "opacity":"1"})
                $navRight.css({"opacity":"1"})
                $header.css({
                    "background-color":"white",
                    "border-bottom":"solid 2px #f1f2f6"
                })
                $("#logo>img").attr("src","images/logopinkver.png")
               
            } else{
                $navLeft.css({"opacity":"0"});
                $navRight.css({"opacity":"0"})
                $header.css({"background-color":"transparent",
                "border-bottom":"none"
            })
                $("#logo>img").attr("src","images/logowhitever.png")
            }
        });








// -----------------------------------------------
// // 모바일

//             $window.on("scroll", function(){
//                 if ( windowWidth >= 1200 ) {
//                     if (scrollTop > $section0.offset().top){
//                         $header.css({"display":"none"})
//                     }
//                 }
//         });












    });
        
            
      




