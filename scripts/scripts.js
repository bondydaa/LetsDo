$(function() {
        var addDiv = $('#addNewLoc');
        var i = $('#addNewLoc p').size() + 1;
        
        $('#addNew').on('click', function() {
                if(i<=4){
                        $('<p><input type="text" name="loc' + i +'" value="" placeholder="Enter Another Location!"><a href="#" class="remNew">Remove</a> </p>').appendTo(addDiv);
                        i++;
                        $('.remNew').on('click', function() { 
                                $(this).parents('p').remove();
                                i--;
                                return false;
                        });
                };
                return false;
        });
        
        var addDiv1 = $('#addNewTime');
        var y = $('#addNewTime p').size() + 1;
        
        $('#addTNew').on('click', function() {
                if(y<=4){
                        $('<p><select name="time' + y +'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><select name="TOD' + y +'"><option value="am">am</option><option value="pm">pm</option></select><a href="#" class="remTNew">Remove</a></p>').appendTo(addDiv1);
                        y++;
                        $('.remTNew').on('click', function() { 
                                $(this).parents('p').remove();
                                y--;
                                return false;
                        });
                };
                return false;
        });
});
