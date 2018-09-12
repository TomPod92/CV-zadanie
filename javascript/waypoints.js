var $box1 = $('.cv__name');
var $box2 = $('.cv__education');
var $box3 = $('.cv__contact');
var $box4 = $('.cv__experience');
var $box5 = $('.cv__hobbies');
var $box6 = $('.cv__skills');

$box1.waypoint(function () {
    console.log('waypoint1!');
    $box1.addClass('animate');
});

$box2.waypoint(function () {
    console.log('waypoint2!');
    $box2.addClass('animate');
});

$box3.waypoint(function () {
    console.log('waypoint3!');
    $box3.addClass('animate');
},{offset: '0.4vh'});

$box4.waypoint(function () {
    console.log('waypoint4!');
    $box4.addClass('animate');
},{offset: '0.4vh'});

$box5.waypoint(function () {
    console.log('waypoint5!');
    $box5.addClass('animate');
},{offset: '0.8vh'});

$box6.waypoint(function () {
    console.log('waypoint6!');
    $box6.addClass('animate');
},{offset: '0.8vh'});

