var i=0;
var image=document.getElementById("image");
var imgs=new Array('images/hds.png','images/hd.png');
function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}
var i=1;
var image2=document.getElementById("image2");
var imgs2=new Array('images/hds.png','images/hd.png');
function img2src() {
    i++;i%=imgs2.length;
    image2.src = imgs2[i];
} 
var i=2;
var image3=document.getElementById("image3");
var imgs3=new Array('images/hds.png','images/hd.png');
function img3src() {
    i++;i%=imgs3.length;
    image3.src = imgs3[i];
}
var i=3;
var image4=document.getElementById("image4");
var imgs4=new Array('images/hds.png','images/hd.png');
function img4src() {
    i++;i%=imgs4.length;
    image4.src = imgs4[i];
}
var i=4;
var image5=document.getElementById("image5");
var imgs5=new Array('images/hds.png','images/hd.png');
function img5src() {
    i++;i%=imgs5.length;
    image5.src = imgs5[i];
}
var i=5;
var image6=document.getElementById("image6");
var imgs6=new Array('images/lg.png', 'images/ls.png');
function img6src() {
    i++;i%=imgs6.length;
    image6.src = imgs6[i];
}
var i=6;
var image7=document.getElementById("image7");
var imgs7=new Array('images/hds.png','images/hd.png');
function img7src() {
    i++;i%=imgs7.length;
    image7.src = imgs7[i];
}