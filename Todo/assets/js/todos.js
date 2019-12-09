//Check of specific Todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete li
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});


	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing new todo Text from input
		var todoText=$(this).val(); 
		//create a new li and add to ul
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});