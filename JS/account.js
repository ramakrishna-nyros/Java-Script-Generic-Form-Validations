/* Empty field validation */

function valid(obj, msg)  /* Receives the parameters */
{
	if(obj.value=="")    /* check the condition */
	{
	alert(msg);         /* alert message to user */
	obj.focus();       /* focus the same field */
	return false;
	}
	else
	{
	return true;
	}
}

/* Minimum length validation */ 

	function minLengthValid(obj,min,msg) /* Receives the parameters */
	{
		var len=obj.value.length;
		if(len>=min)				/* check the condition */
		 {
			return true;
		 }
		else
		 {
			alert(msg);			  /* alert message to user*/
			obj.focus();         /* focus the same field */
			return false;
		 }
	}	


/* Start with alphabet validation */

function startWithAlphabet(obj, msg)    /* Receives the parameters */
{
var swreg = /^[a-zA-Z]{1}(.*)$/; 
                           /* Regular Expression to accept start with alphabet */
	if (obj.value.match(swreg))        /* check the condition */
	{
	return true;
    } 
	else
	{
	  alert(msg);                  /* alert message to users */
      obj.focus();                 /* focus the same field */
      return false; 
    }
}
  
/* Alphabet validation */

function alphabetValid(obj,msg) /* Receives the parameters */
 {
    var areg =/^[a-zA-Z]+$/;   /* Regular Expression to accept alphabets */
	if(obj.value.match(areg)) /* check the condition */
		{
			return true;
		}
		else
		{
			alert(msg);              /* alert message to users */
			obj.focus();             /* focus the same field */
			return false;
		}
}

/* Alphanumeric validation */

function alphaNumericValid(obj,msg)        /* Receives the parameters */
{

    var anreg=/^[0-9a-zA-Z]+$/;     /* Regular Expression to accept alphanumerics */
	if(obj.value.match(anreg))          /* check the condition */
	{
		return true;
	}
	else
	{
	alert(msg);                         /* alert message to users */
	obj.focus();                        /* focus the same field */
	return false;
	}
}

/* Phone number format validation */

function phoneNumValid(obj,msg)      /* Receives the parameters */
{
var preg=/^[+](\d{2})(\s)[(](\d{3})[)]-(\d{3})-(\d{4})$/;
                                        /* Regular Expression to accept valid phone number */
	if(obj.value.match(preg))          /* check the condition */
	{
		return true;
	}
	else
	{
	alert(msg);                  /* alert message to users */
	obj.focus();                    /* focus the same field */
	return false;
	}
}

/* Email format validation */

function emailValid(obj,msg)          /* Receives the parameters */
{
var ereg=/^[0-9a-zA-Z_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,5}$/; 
                                      /* Regular Expression to accept valid email format */

	if(obj.value.match(ereg))        /* check the condition */
	{
	
		return true;
	}
	else
	{
	alert(msg);                     /* alert message to users */
	obj.focus();                    /* focus the same field */
	return false;
	}
}

/* Image file type(.jpg ,.png ,.gif) validation */

function fileTypeValid(obj,msg)      /* Receives the parameters */
{
var val=obj.value;
		if(val.match(".jpg") || val.match(".gif") || val.match(".png"))
                            		/* check the condition */
		{
			return true;
		}
		else
		{
		    
			alert(msg);           /* alert message to users */
			obj.value="";        /* Empty the previous value */
			obj.focus();        /* focus the same field */
			return false;
		}
}


/* Select box  validation */

function mulSelvalid(obj,msg)           /* Receives the parameters */
{
	if(obj.options[0].selected == true) /* check the condition */
	{
		alert(msg);                    /* alert message to users */
		obj.focus();                  /* focus the same field */
		return false;
	}
	else
	{
	return true;
	}

}

/* Check box and Radio button validation*/

function mulCheckValid(obj, msg)           /* Receives the parameters */
{
	var count = 0;
    for(var i = 0;i < obj.length;i ++)     /* check all checkboxes/radio buttons */
	{
        if(obj[i].checked)            
		{
            count ++;
        }
    }
    if(count == 0)                      /* if no checkbox/radio button is selected */    
	{
        alert(msg);                    /* alert message to users */
        obj[0].focus();              /* focus the starting of the checkbox/radiobutton  */
        return false;
    }
    else{
        return true;
    }
}

