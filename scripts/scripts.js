$(function() {
        var addDiv = $('#addNewLoc');
        var i = $('#addNewLoc p').size() + 1;
        
        $('#addNew').on('click', function() {
                if(i<=4){
                        $('<p><input type="text" name="loc' + i +'" value="" placeholder="Enter Another Location!"><a href="#" class="remNew">Remove</a> </p>').appendTo(addDiv);
                        i++;
                // return false;
                        $('.remNew').on('click', function() { 
                                $(this).parents('p').remove();
                                i--;
                                return false;
                        });
                };
                return false;
        });

});
