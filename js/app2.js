var myScreenOrientation = window.screen.orientation;
myScreenOrientation.lock("portrait");
const abcList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numLet = [20,17,10,19,18,15,25,20,9,14,19,13,31,19,19,32,31,17,23,18,24,16,26,20,19,13];
const imagesList = ["/frame000.png", "/frame001.png", "/frame002.png", "/frame003.png", "/frame004.png", "/frame005.png", "/frame006.png", "/frame007.png", "/frame008.png", "/frame009.png", "/frame010.png","/frame011.png", "/frame012.png", "/frame013.png", "/frame014.png", "/frame015.png", "/frame016.png", "/frame017.png", "/frame018.png", "/frame019.png", "/frame020.png", "/frame021.png", "/frame022.png", "/frame023.png", "/frame024.png", "/frame025.png", "/frame026.png", "/frame027.png", "/frame028.png","/frame029.png", "/frame030.png", "/frame031.png",, "/frame032.png"];
let vidNum = 0;
var currentIndex = 0;
var animatedImage = document.getElementById("animated-image");
var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;
var screenHeight2 = window.innerHeight;
//var videox = document.getElementById("video_player");

//videox.muted = true;

var wrapper = document.getElementById("signature-pad");//where we write

var canvas = wrapper.querySelector("canvas");//where we write
var wrapper2 = document.getElementById('display-pad'); //PDF area
var canvas2 = wrapper2.querySelector("canvas");
//var c3 = document.getElementById("mydisplay");
var pdfW = 1800;
var pdfH =4800;
var marX = 100;
var scrollY = 150;
var scrollI = 40;
var lineW = 5;
var resR = 1;
canvas2.width = pdfW;//screenWidth;//1200;//pdf size
canvas2.height = pdfH;
var cheight = parseInt(canvas2.getAttribute("height"));//smaller than canvas; top pdf
var cwidth = parseInt(canvas2.getAttribute("width"));
canvas.width = screenWidth;//Write Area
var oldWidth = canvas.width;
var oldX = 0;
canvas.height = screenHeight;
var WH = canvas.height;//parseInt(canvas.getAttribute("height"));//larger than canvas2; write area
var WW = parseInt(canvas.getAttribute("width"));//where we write
ctx2.fillStyle = "white";
ctx2.fillRect(0,0,pdfW,pdfH);//PDF area
console.log(screenWidth,screenHeight);
console.log(cwidth,cheight, " PDF area WxH");
console.log(WW,WH, " Write Area WxH");
var tCtx;


var signaturePad = new SignaturePad(canvas, {//canvas or ctx
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: 'rgba(0,0,0,t)'
});


var xpos = marX;
var ypos = 0;
ctx.lineWidth = lineW;
ctx.strokeStyle = "lightcyan";

var IDsetI = null;
 

IDsetI = window.setInterval(animate, 100);
//console.log(IDsetI+" id to  stop");


function animateOver() {
  if (IDsetI == 1){
    window.clearInterval(IDsetI);
    currentIndex=0;
  } else{
    currentIndex=0;
    IDsetI = window.setInterval(animate, 100);
  }
  
}
//setInterval(animate, 100);
function animate() {
        currentIndex++;
        if (currentIndex >= numLet[vidNum]) {
          currentIndex = 0;
          console.log(IDsetI+" idnow to  stop")
          //window.clearInterval(IDsetI);
        }
        animatedImage.src = abcList[vidNum]+imagesList[currentIndex];
      }

function handler() {
  window.clearInterval(IDsetI);
  IDsetI = window.setInterval(animate, 100); // Change image every .1 second

	vidNum = vidNum +1;
	if(vidNum>25){vidNum=0;}
}

function hide() {
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function hide2() {
  var x = document.getElementById("hide2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
/*
function handleMouseDown(event) {
  //e.button describes the mouse button that was clicked
  // 0 is left, 1 is middle, 2 is right
  if (event.button === 2) {
    rightMouseClicked = true;
    getMousePosition(event);
    //var mpos = getMousePosition(canvas2,event);
    console.log("rightMouseClicked2: ");
  } 
  
  var currentScroll = document.documentElement.scrollTop;// || document.body.scrollTop;
  console.log(currentScroll);
}

function getMousePosition(event) {
  let rect = canvas.getBoundingClientRect();
  var currentScroll = document.documentElement.scrollTop;
   currentScroll = wrapper2.scrollTop;
  console.log(currentScroll, "currentScroll");
    pX = event.clientX;
    pY = currentScroll;
    console.log(pX, pY);
  let x = event.clientX - rect.left;
  let y = currentScroll - rect.top -5;
  console.log(x, y,"XY position",rect.left,rect.top,);
  ctx2.fillStyle = "white";
  ctx2.fillRect(Math.round(x/300,0)*300+100, currentScroll*canvas.height/6*ratio, 300, canvas.height/4*ratio);//PDF area
  //drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
    var h1 = window.innerHeight;
    var ratio = screenHeight2/h1;
    console.log(x, y);
if (document.getElementById('text').value ==" "){
  ctx2.fillRect(Math.round(x/300,0)*300+100, currentScroll*canvas.height/6*ratio, 300, canvas.height/4*ratio);//PDF area
  ctx2.drawImage(canvas,0,canvas.height/2.5-canvas.height/2.8,canvas.width-5,canvas.height/2.5+canvas.height/1.45,Math.round(x/300,0)*300+100,(currentScroll)*canvas.height/6*ratio,300,canvas.height/4*ratio);


 lines();
 document.getElementById('text').value = " ";
} 
if(document.getElementById('text').value !=" "){
  ctx2.fillRect(Math.round(x/300,0)*300+100, currentScroll*canvas.height/6*ratio, 300, canvas.height/4*ratio);//PDF area
  ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width*0.3,tCtx.canvas.height*2,(pX)*300,(pY+0.5)*canvas.height/6*ratio,300,canvas.height/4*ratio);
  document.getElementById('text').value = " ";
}
//wrapper2.scrollTo(0,(ypos)*canvas.height/6*ratio);
 lines();
}*/

//document.addEventListener('mousedown', handleMouseDown);
/*document.addEventListener('mouseup', handleMouseUp);*/
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

function savePDF() {
    let currentDate = new Date();
    let Datetime = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear() + "--" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ".pdf";
  if (1==2) {
    var xxx=1;
  } else {
    var context = canvas2.getContext('2d');
    var imgData = canvas2.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF({
        unit:"px",
        format: [cheight*2,cwidth*0.6]
        });
     pdf.addImage(imgData, 'JPEG', 0, 0);
     pdf.save(Datetime);
  }
}



function colorR(){
  var r =  255;
  var g = 0;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorO(){
  var r =  255;
  var g = 173;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorY(){
  var r =  255;
  var g = 255;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorG(){
  var r =  20;
  var g = 255;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorBl(){
  var r =  0;
  var g = 120;
  var b = 255;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorP(){
  var r =  165;
  var g = 0;
  var b = 255;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorB(){
  var r =  0;
  var g = 0;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function lines(){
    // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
  signaturePad.clear();
var r=255;
    var g=255;
    var b=255;
    var a=1;
        ctx.lineWidth = lineW;
        ctx.strokeStyle = "skyblue";
        // Select a fill style
        ctx.fillStyle = 'rgba(0,0,0,t)';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        var h1 = window.innerHeight;
        console.log("h1",h1);
        ctx.moveTo(canvas.width-5, h1*0.4);
        ctx.lineTo(5, h1*0.4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, h1*0.6);
        ctx.lineTo(5, h1*0.6);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, h1*0.8);
        ctx.lineTo(5, h1*0.8);
        ctx.stroke();
}
function linesUndo(){
    var r=255;
    var g=255;
    var b=255;
    var a=1;
        ctx.lineWidth = lineW;
        ctx.strokeStyle = "skyblue";
        // Select a fill style
        ctx.fillStyle = 'rgba(0,0,0,t)';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        var h1 = window.innerHeight;
        console.log("h1",h1);
        ctx.moveTo(canvas.width-5, h1*0.4);
        ctx.lineTo(5, h1*0.4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, h1*0.6);
        ctx.lineTo(5, h1*0.6);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, h1*0.8);
        ctx.lineTo(5, h1*0.8);
        ctx.stroke();
}
function centre(){
  handler();
  if(xpos > marX){
    ypos = ypos + 1;
  }
    
if(document.getElementById('text').value ==" "){
  //drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)


ctx2.drawImage(canvas,0,0,canvas.width,canvas.height,100+650,(ypos)*scrollY,canvas.width/6,198);


} 
if(document.getElementById('text').value !=" "){
  ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width*0.3,tCtx.canvas.height*2,100+650,(ypos+0.5)*canvas.height/6,canvas.width/6,198);
  document.getElementById('text').value = " ";
}

wrapper2.scrollTo(600,(ypos)*scrollY+scrollI);
ypos = ypos + 1;
xpos = marX;
 lines();
}

function mynewline(){
    ypos = ypos + 1;
    xpos = marX;
wrapper2.scrollTo(0,(ypos)*scrollY+scrollI);//(ypos)*canvas.height/6*ratio);
}

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);

  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
   lines();
}

// On mobile devices it might make more sense to listen to orientation change,
// rather than window resize events.
window.onresize = resizeCanvas;
resizeCanvas();

function download(dataURL, filename) {
  var blob = dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
}

// One could simply use Canvas#toBlob method instead, but it's just to show
// that it can be done using result of SignaturePad#toDataURL.
function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

function copyme() {
  handler();
  if (xpos+canvas.width/6 > 1700 ){ //==4 previously
    xpos = marX;
    ypos = ypos + 1}
    //drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
if (document.getElementById('text').value ==" "){
ctx2.drawImage(canvas,0,0,canvas.width,canvas.height,xpos,(ypos)*scrollY,(canvas.width)/6,198);

 lines();
 document.getElementById('text').value = " ";
} 
if(document.getElementById('text').value !=" "){
  ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width*0.3,tCtx.canvas.height*2,xpos,(ypos+0.5)*scrollY,(canvas.width)/6,198);
  document.getElementById('text').value = " ";

}
wrapper2.scrollTo((xpos)-150,(ypos)*scrollY+scrollI);//(ypos)*canvas.height/6*ratio);
xpos = xpos + canvas.width/6;
}

function clearme() {
  var data = signaturePad.toData();
  if (data != "") {
    data.pop(); // remove the last dot or line
    signaturePad.fromData(data);
    console.log(data)
  } else {
    lines();
  }
}

// Text input element
document.getElementById('text').addEventListener('keyup', function() {
  tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
  imageElem = document.getElementById('text'); //Image element
  tCtx.canvas.width = 300; 
  tCtx.fillText(this.value, 0, 10);
}, false);
//load a sprite sheet and animate this?
function cropImage(imagePath, downloadName, newX, newY, newWidth, newHeight) {
    const originalImage = new Image();
    originalImage.src = imagePath;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    originalImage.addEventListener('load', function() {
        
        const originalWidth = originalImage.naturalWidth;
        const originalHeight = originalImage.naturalHeight;
        const aspectRatio = originalWidth/originalHeight;
        if(newHeight === undefined) {
            newHeight = newWidth/aspectRatio;
        }
        canvas.width = newWidth;
        canvas.height = newHeight;
        
        ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);
        downloadImage(downloadName);
    });
}
