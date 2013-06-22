function changeBody(index){  
switch(index){  
case 1:{  
	document.getElementById('stage').style.display = "";  
	document.getElementById('bar').style.display = "none";  
	document.getElementById('mr1').style.display = "none"; 
	document.getElementById('mr2').style.display = "none";  
break;  
    }  
case 2:{  
	document.getElementById('stage').style.display = "none";  
	document.getElementById('bar').style.display = "";  
	document.getElementById('mr1').style.display = "none"; 
	document.getElementById('mr2').style.display = "none";  
break;  
    }  
case 3:{  
	document.getElementById('stage').style.display = "none";  
	document.getElementById('bar').style.display = "none";  
	document.getElementById('mr1').style.display = ""; 
	document.getElementById('mr2').style.display = "none";  
break;
}
case 4:{  
	document.getElementById('stage').style.display = "none";  
	document.getElementById('bar').style.display = "none";  
	document.getElementById('mr1').style.display = "none"; 
	document.getElementById('mr2').style.display = "";  
break; 
} 
   }  
}  
 