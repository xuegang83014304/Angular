   $(function(){
   	$(".business>ul>li>div").hide();
   	$(".business>ul>li").click(function(){
   		var $index=$(this).index();	 
     		$(".business>ul>li").removeClass('on').eq($index).addClass("on");
     			$(".business>ul>li>div");
     		     if($index==0||$index==3){
     			$(".business>ul>li>div").hide();		
     		}
     		     if($index==1){
     			$(".business>ul>li>div").eq(2).hide();		
     		}
     		          	 if($index==2){
     			$(".business>ul>li>div").eq(1).hide();		
     		}
     		   	 	$(".i").click(function(){
   	 		   	$(".business>ul>li>div").hide().eq($index).show();
     		if($index==0||$index==3){
     			$(".business>ul>li>div").hide();		
     		}
     		
   	 	})

   	})

   })
   

