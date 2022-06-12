$(document).ready(function() {
    $('.tellStoryBtn').click(function(){
        const name = $('#personName').val();
        const character = $('#character').val();
        const adv = $('#ad').val();
        const adj = $('#adj').val();
        const form = [name, character, adv, adj];
        const names = ["personName", "Character", "Adverb", "Adjective"];
        let error = [];
        let message = "";
        for(let i = 0; i < 4; i += 1){
            if(form[i] === ''){
                error[i] = names[i];
            }
        }
        for(let i = 0; i < error.length; i += 1){
            message += error[i];
            if(i !== error.length - 1){
                message += ',';
            }
        }
        if(error.length > 1){
            message += " fields is empty!";
        }else{
            message += " fields is empty";
        }
        if(error.length !== 0){
            alert(message);
            $('input[type="text"]').val('');
            $('.container3').empty();
        }else {
            let phrase = '<fieldset class="fieldset2">' +
                '<div class="reuslt">' +
                '<h1>' + "Wendy's Crazy MadLibs Story" + '</h1>' +
                '<p>' +
                'One day, my friend ' + name + ' was visiting New York and ran into ' + character + '. ' +
                name + ' ran ' + adv + ' to meet ' + name + '. ' + 'But ' + name + ' turned out to be very ' +
                adj + ' and ' + name + ' did not enjoy the meeting.'
                + '</p>' +
                '</div>' +
                '</fieldset>';
            $('input[type="text"]').val('');
            $('.container3').html(phrase);
        }
    })
});
