/**
 * ...
 * @author Julio Cesar Silva
 * @date 25/11/2016
 */
function Background( _name, _cI, _iF, _url, _type) {
		
		
		var width   = 0;
		var height  = 0;
		var x	    = 0;
		var y	    = 0;
		var speed   = 3;
		var ready   = false;
		var cI      = _cI;
	 	var iF      = _iF;
	 	var url     = _url;
		var type    = _type;
		
		this.name       = _name;
		this.sprite     = [];
		this.image;
		 
		for(cI; cI < iF; cI++)
		{
			this.image = new Image();
			
			this.image.src = url+cI+"."+type;
			
		    this.image.onload = function () 
			{	
				overWriteWidth(this.width);
				overWriteHeight(this.height);
				overWriteReady(true);
			};
			
			this.sprite.push(this.image);
		}
		
		
		function overWriteWidth(update)
		{
			width = update;
		};
			
		function overWriteHeight(update)
		{
			height = update;
		};
		
		function overWriteReady(update)
		{
			ready = update;
		};
	
		this.getWidth = function()
		{
			return width;
		};
		
		this.setWidth = function(update)
		{
			width = update;
		};
		
		this.getHeight = function()
		{
			return height;
		};
		
		this.setHeight = function(update)
		{
			height = update;
		};
		
		this.getReady = function()
		{
			return ready;
		};
		
		this.getX    = function()
		{
			return x;
		}
		this.setX  = function(update)
		{
			x = update;
		}
		
		this.getY	 = function()
		{
			return y;
		}
		this.setY  = function(update)
		{
			y = update;
		}
		
		this.getSpeed  = function()
		{
			return speed;
		}
		this.setSpeed  = function(update)
		{
			speed = update;
		}
		
	}
	
