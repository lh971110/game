function loadImg(imgUrl,fn){
				var imgObj = {};
				var loaded = 0;
				var tempImg; 
				var imgLength = 0;
				for (var key in imgUrl){
					imgLength++;
					tempImg = new Image();
					tempImg.onload = function(){
						loaded++;
						if(loaded >= imgLength){
							fn(imgObj);
						}
					};
					tempImg.src = imgUrl[key];
					imgObj[key] = tempImg;
				}
			}