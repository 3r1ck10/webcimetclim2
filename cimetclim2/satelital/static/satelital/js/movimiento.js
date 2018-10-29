<!--
//**************************Javascript for Image Player ******************************
//****************************  Variables to be used  *******************************

image_name="/static/satelital/fig/ir13_";
image_type="png";
first_image=1;
last_image=12;
animation_height=430;
animation_width=650;

theImages = new Array();                      // holds the images
imageNum = new Array() ;                      // keeps track of which images to omit from loop
imageDate= new Array();
normal_delay = 300 ;
delay = normal_delay;                         // delay between frames in 1/100 seconds
delay_step = 50;
delay_max = 4000;
delay_min = 50;
dwell_multiplier = 5;
dwell_step = 1;
end_dwell_multiplier    = dwell_multiplier;
start_dwell_multiplier  = dwell_multiplier-2;
current_image = first_image;                  // number of the current image
timeID = null;
status = 0 ;                                  // 0-stopped, 1-playing
play_mode = 0 ;                               // 0-normal, 1-loop , 2-sweep
size_valid = 0 ;


	//====> Make sure the first image number is not smaller than the last image nimber

	if (first_image > last_image )
	{
		var help = last_image;
		last_image = first_image;
		first_image = help;

	}


	//========> Preload the first image (while page is downloading)
	for (var i=first_image; i<=last_image; i++)
	{
		theImages[i]     = new Image() ;
		theImages[i].src = image_name + i + "." + image_type ;
		imageNum[i]      = false ;
	};


	//===> Stop the Animation
	function stop()
	{
		//==  cancel animation (timeID holds the expression which calls the fwd or bkwd function ) ==
		if (status == 1)
			clearTimeout (timeID) ;
		status == 0 ;
	}


	//===> Display animation in fwd direction in either loop or sweep mode
	function animate_fwd()
	{
		current_image++;                         // increment image number
		//== check if current image has exceeded loop bound ==
		if (current_image > last_image)
		{
			if (play_mode == 0)
			{
				current_image =last_image;
			  status=0;
			 return;

			};                    //NORMAL

			if (play_mode == 1)
			{
				current_image = first_image;  //LOOP

			};

			if (play_mode == 2)
			{
				current_image =last_image;
				animate_rev();
				return;
			};
		};

		//== check to ensure that current image has not been deselected from loop ==
		//== if it has, then find the next image that hasn't been ==

		document.animation.src = theImages[current_image].src;
		delay_time = delay;
		if ( current_image == first_image) delay_time = start_dwell_multiplier*delay;
		if ( current_image == last_image ) delay_time = end_dwell_multiplier*delay ;

		//== call "animate_fwd()" again after a set time delay time has elapsed
		timeID = setTimeout("animate_fwd()" , delay_time) ;
	}


	//===> Changes playing speed by adding or subtracting from the delay between frames
	function change_speed(dv)
	{
		delay+=dv;
		//== check to ensure max and min delay constraints have not been crossed ==
		if(delay > delay_max)  delay = delay_max;
		if(delay < delay_min)  delay = delay_min;

	}

	//===> function that changes the dwell rates.
	function change_end_dwell(dv)
	{
		end_dwell_multiplier+=dv;
		if ( start_dwell_multiplier < 1 ) start_dwell_multiplier = 0 ;
	}


	//=== Increment to next image
	function incrementImage(number)
	{
		stop();
		 if (number > last_image) number = last_image;

		//	increment to first good image
		while (imageNum[number] == true && number<=last_image)
			number-=1 ;
		current_image = number;
		document.animation.src = theImages[current_image].src;
	}


	//=== Decrement to next image
	function decrementImage(number)
	{
		stop();
		//== if image is first in loop, decrement to last image ==
		if (number < first_image)
			number = first_image ;
		current_image = number ;
		document.animation.src = theImages[current_image].src
	}


	//== play forward
	function fwd()
	{
		stop() ;
		status = 1 ;
		animate_fwd() ;
	}


	//== > change play mode
	function change_mode(mode)
	{
		play_mode = mode ;
	}


	//== load and initialize everyuthing once page is downloaded
	function launch()
	{
		stop() ;
		current_image = last_image ;
		document.animation.src = theImages[current_image].src ;
		change_mode (0) ;
		fwd();
	}


	//=== Check the selection of image in animation loop
	function checkImage(status,i)
	{
		if (status == true)
		imageNum[i] = false ;
		else imageNum[i] = true ;
	}


	//===> empty function - used to deal with image buttons rather than html buttons
	function func()
	{
	}


	//==> sets up interface this is the one fuction called from the html body
	function animation()
	{
		count = first_image ;
	}


	// button image change functions on mouse actions
	function MM_swapImgRestore()
	{ //v3.0
		var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
	}


	function MM_preloadImages()
	{ //v3.0
		var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
		if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}


	function MM_findObj(n, d)
	{ //v3.0
		var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
	}


	function MM_swapImage()
	{ //v3.0
		var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
		if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
	}

//************************* End of Javascript for  Image Player *********************
//--bgcolor=#3b8bcb>
