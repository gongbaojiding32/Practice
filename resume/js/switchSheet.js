let btnList = document.getElementById("btnList");
btnList.addEventListener("click", function(event) {
	let target = event.target;
	if (target.nodeName.toLocaleLowerCase() === "button") {
		let fileName = "";
		switch (target.id) {
			case "sheet-1":
				fileName = "css/style_1.css";
				break;
			case "sheet-2":
				fileName = "css/style_2.css";
				break;
			case "sheet-3":
				fileName = "css/style_3.css";
				break;
			default:
				fileName = "";
		}
		let linkNodes = document.getElementsByTagName("link");
		for(let node of linkNodes){
			if (
				node.getAttribute("rel") === "stylesheet" &&
				node.getAttribute("href").indexOf("style") > -1
			) {
				node.setAttribute("href", fileName);
			}
		}
	}
});
