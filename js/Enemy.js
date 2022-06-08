/**
 * ...
 * @author Julio Cesar Silva
 * @date 24/05/2012
 */


	function Enemy( _name, _cI, _iF, _url, _type) 
	{
		
		
		/* PRIVATE properties should be used this way - just example - 
		 we were get the parent canvas in the main class - where we have a element "canvas" */
		var parent		 = window.document.getElementById("canvas");
		var canvasWidth  = parent.width;
		var canvasHeight = parent.height;
		
		
		var width   = 0;
		var height  = 0;
		var x	    = 0;
		var y	    = 0;
		var speed   = 4;
		var ready   = false;
		
		var cI      = _cI;
	 	var iF      = _iF;
	 	var url     = _url;
		var type    = _type;
		
		this.name	= _name;
		this.sprite = [];
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
		
		
		
		
		/* About random position on screen - config. by interval*/
		this.randomPosition    = function( _initX, _endX, _initY, _endY)
		{
			x = (canvasWidth + width)  + (Math.random() * 500);
			y = (height + (Math.random() * (canvasHeight - height )));
		};
		
	}
	
