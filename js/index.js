$(document).ready(function(){
    $('#div_help').hide();

    $('#see_help').on('click', ()=>{
        $('#div_help').show();
        $('#game_content').hide();
    });

    $('#skip_help').on('click', ()=>{
        $('#div_help').hide();
        $('#game_content').show();
    });

    // $('#valider_new_match').on('click', ()=>{
    //     var club = $('#club').val();
    //     var cote_club = $('#cote_club').val();
    //     var adversaire = $('#adversaire').val();
    //     var cote_adversaire = $('#cote_adversaire').val();
    //     var gagnant = $('#gagnant').val();
    //     var cote_gagnant = $('#cote_gagnant').val();
        
    //     input=[club,cote_club,adversaire,cote_adversaire,gagnant,cote_gagnant]
    //     input.forEach((element,index) => {
    //         if(index%2!=0){
    //             if(element==''){
    //                 element='nondefini'
    //                 console.log('null of index',index)
    //             }
    //         }
    //     });
    //     // input.forEach(e=>{
    //     //     console.log(e)
    //     // })
    // });
    

});