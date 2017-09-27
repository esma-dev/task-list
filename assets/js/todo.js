// check off specific todos by clicking

//select an individual todo
//manipulate it (with a line through)
$("ul").on("click", "li", (event) => {
	let currLi = $(event.currentTarget);
	currLi.toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", ".delete", (event) => {
	let that = $(event.currentTarget);
	that.parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

//add listener to text input that fires when hit the enter key
$("input[type='text']").on("keypress", (event) => {
	let currInput = $(event.currentTarget);
	if(event.which === 13){
		$("ul").append(`<li><span class="delete"><i class="fa fa-trash" aria-hidden="true"></i></span>${currInput.val()}</li>`);
		currInput.val("");
	}
});

//toggle the plus button on and off

// let addButton = document.querySelector(".fa-plus");
// addButton.addEventListener("click", () => {
// 	let input = document.querySelector("input");
// 	if (input.classList[0] === "disappear"){
// 		input.classList.add("appear");
// 		input.classList.remove("disappear");
// 	} else {
// 		input.classList.add("disappear");
// 		input.classList.remove("appear");
// 	}
// });

$(".fa-plus").on("click", () => {
	$("input[type='text']").fadeToggle();
});