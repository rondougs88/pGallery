$(document).ready(process());

function process() {
    $('nav a').on('click', function(){
        //Current class assignment
        $('nav a').parent().removeClass('current');
        $(this).parent().addClass('current');
        
        //Set heading text
        $('h1#heading').text($(this).text());
        
        //Get & filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        // Remove hidden class if 'all-projects' is selected
        if(category=='all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        
        //Stop link bahaviour
        return false;
        
    });
    
    // Mouse enter overlay
    $('ul#gallery li').on('mouseenter', function(){
        //Get data attribute values
//        var title = $(this).children().data('title');
        var title = $(this).data('title');
//        var desc = $(this).children().data('desc');
        var desc = $(this).data('desc');
        
        //Validation
        if(desc==null){
            desc = 'Click to enlarge.';
        }
        
        //Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //Get overlay div
        var overlay = $(this).children('.overlay');
        
        //Add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        overlay.fadeIn(800);
    });
    
    // Mouse leave overlay
    $('ul#gallery li').on('mouseleave', function(){
        
        //Get overlay div
        var overlay = $(this).children('.overlay');
        
        overlay.fadeOut(500);
        
    });
    
}