require.config({
	//baseUrl+文件名  来寻找文件
    //是从Index.html找main.js所在的目录的路径
	baseUrl: "js",
    paths: {
        "app": "app",
        "jquery": "lib/jquery"
    }
  });
require(["app/carsouel", "app/goup", "app/waterfull"],
    function(Carsouel,Goup,Waterfull){
    	
    	/*var goup = (function(){
    		return {
    			init: function(){
    				new Goup();
    			}
    		}
    	})()
    	var waterfull = (function(){
    		return {
    			init: function(){
    				new Waterfull();
    			}
    		}
    	})()*/
    	new Carsouel();
        new Goup();
        new Waterfull();
    	//goup.init();
    	//waterfull.init();
        //This function will be called when all the dependencies
        //listed above are loaded. Note that this function could
        //be called before the page is loaded.
        //This callback is optional.
    
});