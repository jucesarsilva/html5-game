/**
 * ...
 * @author Julio Cesar Silva
 * @date 24/05/2012
 */


	function Explosion( _name, _cI, _iF, _url, _type) 
	{
		
		var width   = 0;
		var height  = 0;
		var x	    = 0;
		var y	    = 0;
		var ready   = false;
		var cI      = _cI;
	 	var iF      = _iF;
	 	var url     = _url;
		var type    = _type;
		var sprite  = [];
		var permission = true;
		var index	= 0;
		
		
		this.name       = _name;
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
			
			sprite.push(this.image);
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
		
		
		this.isAnimation =  function()
		{
			/* we count the length of the array less 2, because array began in 0 and we want show the ultimate sprite, so we decrease more 1*/
			if(index > (sprite.length - 2)) 
			{
				permission = true;
				index = 0;
			}
			
			return permission;
				
		}
		
		
		this.play = function( _x, _y)
		{
			x = _x;
			y = _y;
			index = 0;
			permission =  false
		}
		
		
		this.Animation = function()
		{
			index++;
			if(!permission)
			return sprite[index];
		} 
	}
	
