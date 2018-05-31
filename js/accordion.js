$('.accordion').on('click', '.accordion_control', function(e){ 
  e.preventDefault();                    
  $(this)                                
    .next('.accordion_panel')            
    .not(':animated')                    
    .slideToggle();                      
});