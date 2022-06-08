/**
 * ...
 * @author Julio Cesar Silva
 * @date 24/05/2012
 */

	/**
	 * Teste
	 */
	function Player( _name, _cI, _iF, _url, _type) 
	{
		
		
		/* vars of the class - private - accessible only using the get|set methods */
		var width		 = 0;
		var height		 = 0;
		var x	  		 = 0;
		var y	  		 = 0;
		var speed 		 = 5;
		var ready  		 = false;
		var respaw  	 = false;
		var timerRespaw  = 0;
		
		/* config. for add images ---> how to use?
		 * @parameter iI and iF: interval for read image quantity -> cI: initial Number for images (current image for add)   iF: final Number for Images
		 * @parameter url: location of the (*..path/imageName_+nI+type file) ...imageLocation/nameImage_1.png
		 * @parameter type: type extension of the image*/
		 var cI   = _cI;
	 	 var iF   = _iF;
	 	 var url  = _url;
		 var type = _type;
		
		
		
		/* PUBLIC properties characteristics - all below is public properties*/
		this.name		  = _name;
		this.shotInterval = 20;
		this.timerShot    = 0;
		this.fire   	  = true;
		this.increment	  = 0.5;
		this.lastPosX     = 0;
		this.lastPosY     = 0;
		
		
		/* putting physics properties*/
		this.vy = 0;
		this.vx = 0;
		this.VelocMaxDown   = speed;
		this.VelocMaxUp     = -speed;
		this.VelocMaxRigth  = speed;
		this.VelocMaxLeft   = -speed;
		this.constFrenagem  = 0.96;
		
		
		/* properties for animations*/
		this.sprite = [];
		
		this.image;
		 
		/* loader of the images*/
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
		
		
		
		/* overwrite the width property - just when the onload function of the Image has been completed -
		 this methoed is private of the class*/
		function overWriteWidth(update)
		{
			width = update;
		};
		
		/* overwrite the width property - just when the onload function of the Image has been completed*/
		function overWriteHeight(update)
		{
			height = update;
		};
		
		function overWriteReady(update)
		{
			ready = update;
		};
	
		
		
		
		/* this block represents the public methods - it's the same concept of the theory encapsulated properties 
		 * because some properties in this "class" are visible only internally - with them we get the internal properties */
		this.getWidth = function()
		{
			return width;
		};
		
		this.setWidth = function(update)
		{
			width = update;
		};
		
		
		
		/* About size height of the image*/
		this.getHeight = function()
		{
			return height;
		};
		
		this.setHeight = function(update)
		{
			height = update;
		};
		
		
		
		/* some properties should have just read method*/
		this.getReady = function()
		{
			return ready;
		};
		
		
		
		/* About X property*/
		this.getX    = function()
		{
			return x;
		}
		this.setX  = function(update)
		{
			x = update;
		}
		
		
		/* About Y property*/
		this.getY	 = function()
		{
			return y;
		}
		this.setY  = function(update)
		{
			y = update;
		}
		
		
		/* About speed*/
		this.getSpeed  = function()
		{
			return speed;
		}
		this.setSpeed  = function(update)
		{
			speed = update;
		}
		
		this.getTimerRespaw = function()
		{
			return timerRespaw;
		}
		
		
		this.isRespaw = function()
		{
			
			if(respaw)
			{
				timerRespaw++;
				if(timerRespaw > 300)
				{	
					respaw = false;
					timerRespaw = 0;
				}	
			}	
			
			return respaw;
		}
		
		
		this.play =  function()
		{
			respaw = true;
		}
		
	}/* end simulated class*/
	
