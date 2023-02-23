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

var lastScrollTop = 0;

// $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop() 


//     if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
//         /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
//         $header.css({
//             "top":"-500px",
//             "transition-duration":"100ms"
//         });
       
//     } else {
//         $header.css({
//             "top":"0px",
//             "transition-duration":"400ms",
//             "z-index":"10000",
//             "background-color":"#fff",
//             "border-bottom" :"1px solid #f1f2f6"
//         });
//         $("#mainmenu>ul>li>a").css({"color":"black"})
//         $("#logo>img").attr("src","images/logopinkver.png")
//         $("#nav_p>img").attr("src","images/nav_person.png")
//         $("#nav_c>img").attr("src","images/nav_cart.png")
//         $("#nav_s>img").attr("src","images/nav_search.png")
//         $("#nav_l").css("color","black")
//         $("#subwrap").css({ 
//             "box-shadow":"1em 1em 1em #43434338"
//     })}
//     lastScrollTop = scrollTop;

// });








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
        
            
      




