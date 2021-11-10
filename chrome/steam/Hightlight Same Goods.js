// The script code by mane at 10/11/2021
var old_img_src = ""
var find_count = 0
document.querySelectorAll(".inventory_page > .itemHolder > .item").forEach(elem=>{
	if (elem.querySelector("img")){
		var img_obj_src = elem.querySelector("img").src;
		if (img_obj_src == old_img_src){
			elem.style.background="#fcff4a";
			find_count+=1
		}else{
			old_img_src = img_obj_src;
		}
	}
});
alert("[Mane] Find Same object " + find_count.toString() + " items");
