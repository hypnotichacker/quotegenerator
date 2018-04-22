//jquery onclick function
$("#getQuote").on("click", function(){

  //ajaxsetup cache: false seems to add a new quote instead of app repeating same quote, or using the same previous quote it has cached.
   $.ajaxSetup ({cache: false});
 
  
//JSON API DATA 
//API source: https://quotesondesign.com/api-v4-0/
  /*
  Had to change JSON data to HTML from append because: "append, adds the code to the one that you had, html replaces it. Replacing append with html creates a new quote each time you click the button & deletes the previous one."
  */
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $(".quote").html(a[0].content + "<p>— " + a[0].title + "</p>")

  });
});