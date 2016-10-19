//write your code here
'use strict';
$(document).ready(function() {

/*--#1--*/

// console.log($('#secretBox'));
// console.log($('.box.boxType1')[3]);
// console.log($('.boxType1')[3]);
// console.log($('#row3').children()[1]);
// console.log($('.row').children());
// console.log($('div#secretBox'));

// var $secretBox=$('div#secretBox');
// $secretBox.css('backgroundColor', 'white');
// $secretBox.append('<h1>secret box!</h1>');

/*--#2--*/
//
// var $boxes=$('.box');
//   $boxes.each(function(){
//   if ($(this).css('backgroundColor')==='rgb(255, 0, 0)') {
//     $(this).css('backgroundColor', 'white');
//   }});

/*--#3--*/

// console.log($('#row1').children().length);
// $('#row1').children().each(function() {
//   $(this).removeAttr("class");
//   $(this).addClass('boxType3'); console.log($(this).hasClass('boxType3'));});

/*--#4--*/

// console.log($('#row4').children().last().css('display','none'));

/*--#5--*/

var $firstRows=$('#row2').children().slice(0,2);
console.log($firstRows);
console.log($('row2').attr('style'));
$firstRows.each(function(){$(this).removeAttr('style');});
console.log($firstRows.attr('style'));

});
