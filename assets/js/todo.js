// check off specific todos by clicking

//select an individual todo
//manipulate it (with a line through)
$("li").on("click", (event) => {
	let currLi = $(event.target);
	currLi.toggleClass("completed");
});

//click on X to delete todo