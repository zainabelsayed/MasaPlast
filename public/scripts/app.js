var imageView= document.getElementById("view");
var header=document.querySelector("#header");
var subheader=document.querySelector('#subHeader');
var header3=document.querySelector('#header3');
var leftArrow=document.querySelector('#left');
var rightArrow=document.querySelector('#right');
var div=document.querySelector('.colors');
var after=document.querySelector('.after');
var points=document.querySelectorAll('.point');
points=Array.from(points);
var images=[
    "images/bg-right.jpg",
    "images/Go-Green.jpg",
    "images/hands.png",
    "images/bead_header.png",
    "images/scrap.png"
];
 var counter=0;
var headers=[
    "And Resell It As",
    "Recycle",
    "We Guarantee",
    "10 Years",
    "We Recycle"
     
];
var counterh1=0;
var subheaders=[
"GRANULES &",
"Keeps Your Environment",
"HIGH QUALITY",
"EXPERIENCE IN",
"PLASTIC FILM"
];
var counterh2=0;
var headers3=[
"PELLETS.",
"Clean,Safe & Healthy.",
"PLASTIC GRANULES.",
"PLASTIC RECYCLING",
"SCRAP."
];
var counterh3=0;
var colors=[
"#17264f",
"#feebe6",
"#17264f",
"#feebe6",
"yellow"

];
var colorCount=0;
var pointCount=1;

/*function change(){

		imageView.src=images[counter++ % images.length];
		header.innerText=headers[counterh1++ % headers.length];
		subheader.innerText=subheaders[counterh2++ % subheaders.length];
		header3.innerText=headers3[counterh3++ % headers3.length];

	}
		

setInterval(change,7000);*/

 leftArrow.addEventListener("click",function(){
 	for (i = 0; i < points.length; i++) {
      points[i].className = points[i].className.replace("highlight", "");
  }
 	header.classList.remove('animated','fadeIn');
 	subheader.classList.remove('animated','fadeIn');
 	header3.classList.remove('animated','fadeIn');
 	if(counter<0){counter=4;}
 	imageView.src=images[counter--];
 	setTimeout(function(){
 	div.style.color=colors[colorCount--];
 	header.innerText=headers[counterh1--];
 	subheader.innerText=subheaders[counterh2--];
 	header3.innerText=headers3[counterh3--];
 	points[pointCount--].classList.add("highlight");
 	if(colorCount<0){colorCount=4;}
 	if(counterh1<0){counterh1=4;}
 	if(counterh2<0){counterh2=4;}
 	if(counterh3<0){counterh3=4;}
 	if(pointCount<0){pointCount=4;}
 	header.classList.add('animated','fadeIn');
	subheader.classList.add('animated','fadeIn');
	header3.classList.add('animated','fadeIn');
 	},10);
 });
 
 rightArrow.addEventListener("click",function(){
 	
 	for (i = 0; i < points.length; i++) {
      points[i].className = points[i].className.replace("highlight", "");
  }
 	if(counter>=images.length){counter=0;}
 	imageView.src=images[counter++];
 	setTimeout(function(){
 		if(pointCount>=points.length){pointCount=0;}
	 	if(counterh1>=headers.length){counterh1=0;}
	 	if(counterh2>=subheaders.length){counterh2=0;}
	 	if(counterh3>=headers3.length){counterh3=0;}
	 	if(colorCount>=colors.length){colorCount=0;}
	 	header.innerText=headers[counterh1++];
	 	div.style.color=colors[colorCount++];
	 	subheader.innerText=subheaders[counterh2++];
	 	//subheader.style.color=colors[colorCount++];
	 	header3.innerText=headers3[counterh3++];
	 	//header3.style.color=colors[colorCount++];
	 	points[pointCount++].classList.add("highlight");
	 	header.classList.add('animated','fadeIn');
	 	subheader.classList.add('animated','fadeIn');
	 	header3.classList.add('animated','fadeIn');
	 	
 	},10);
 	
 }); 
setInterval(function(){
       rightArrow.click();
       header.classList.remove('animated','fadeIn');
	 	subheader.classList.remove('animated','fadeIn');
	 	header3.classList.remove('animated','fadeIn');
  },7000);

	/*header.innerText=headers[(counterh1-- % headers.length)];
	subheader.innerText=subheaders[(counterh2-- % subheaders.length)];
	header3.innerText=headers3[(counterh3-- % headers3.length)];
	if(((counter++ % images.length)-1)<0){
		counter=0;
		counterh1=0;
		counterh3=0;
		counterh2=0;
	}*/

