
$(document).ready(function(){
    let boolen = false;
    var matrix = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];
    let index = 0;
    matrix.forEach(ele => {
       ele.forEach(ele2 => {
          // console.log(ele2)
       })
    })
 /////////////////////////// clicking on cell
$(".cell").click(function(){
$(this).parents(".game--container").toggleClass("x");
if($(this).parents(".game--container").hasClass('x')){
    $(this).append('<i class="fas fa-times" data-tic="X"></i>');
    $(this).addClass("pointers");
    $(".game--status").text("it is O turn");
    checking();
}else{
    $(this).append(' <i class="far fa-circle" data-tic ="O"></i>');
    $(this).addClass("pointers");
    $(".game--status").text("it is X turn");
    checking();
}
index++
console.log(index);
if(index == 9 && !boolen){
    $(".game--status").text("it is DRAW");
    document.querySelector(".fail").play();
}
});
    ////////clicking on reset
    $(".game--restart").click(function(){
            $(".cell").each(function(){
                        $(this).html("");
                        $(".game--status").text("it is X turn");
                        $(this).removeClass("pointers");
                        $(this).parents(".game--container").removeClass("pointers");
                        $(this).parents(".game--container").removeClass("x");
                        $(this).find("i").remove();
                        index = 0;
                        boolen = false;
            });
    });
    

///////////// function to check if win
/*
$(".cell").on("click","i",function(){
    console.log("hdhhd");
})
*/
let testing = 0
function checking(){
for (let i = 0; i < matrix.length; i++) {
    if($(".cell").eq(matrix[i][0]).find("i").attr("data-tic") == $(".cell").eq(matrix[i][1]).find("i").attr("data-tic") &&  $(".cell").eq(matrix[i][1]).find("i").attr("data-tic") != undefined && $(".cell").eq(matrix[i][0]).find("i").attr("data-tic") != undefined){
        if( $(".cell").eq(matrix[i][2]).find("i").attr("data-tic") == $(".cell").eq(matrix[i][1]).find("i").attr("data-tic")  &&  $(".cell").eq(matrix[i][2]).find("i").attr("data-tic") != undefined){
        $(".game--container").addClass("pointers");
        $(".game--status").text(` ${$(".cell").eq(matrix[i][0]).find("i").attr("data-tic")} has won`);
       document.querySelector("audio").play();
       boolen = true;
       index = 0;
        break;

        }
    }else{
        console.log("wrong")
    }

   // console.log($(".cell").eq(matrix[i][0]).find("i").attr("data-tic"));
   // console.log($(".cell").eq(matrix[i][1]).find("i").attr("data-tic"));
    //console.log($(".cell").eq(matrix[i][2]).find("i").attr("data-tic"));
}
}

});
