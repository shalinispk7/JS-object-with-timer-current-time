// Get current time and find(morning,afternoon,or night)

let currentTime= new Date();
let a = currentTime.getHours()
	if(a >= 6 && a <12){
		document.write("Good Morning! "+"It's "+a+" am");
	}
	else if(a >= 12 && a <16){
		document.write("Good Afternoon! "+"It's "+a+" pm");
	}
	else if(a >= 16 && a <18){
		document.write("Good Evening! "+"It's "+a+" pm");
	}
	else if(a >= 18 && a <=24){
		document.write("Good Night! "+"It's "+a+" pm");
	}
	else if(a >=1 && a <6){
		document.write("Mid night! "+"It's "+a+" pm");
	}
	
	else{
		alert("24-Hour Time Format, So enter time between 1 to 24");
	}
