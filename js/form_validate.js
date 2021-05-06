<script>  
function validateform()
{  
  var name=document.myform.name.value;  
  var surname=document.myform.surname.value;  
  var email=document.myform.email.value;  
  var phone=document.myform.phone.value;  
  var message=document.myform.message.value;  
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf("."); 


alert("Details are successfully completed!")

    if (name==null || name=="")
  {  
    alert("Name can't be blank");  
    return false;  
  }
  else if (phone==null || phone=="")
  {  
    alert("phone no can't be blank");  
    return false;  
  }
  else if (phone.length < 10 || phone.length > 10)
  {  
    alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");  
    return false;  
  }
    else if (surname==null || surname=="")
  {  
    alert("Last Name can't be blank");  
    return false;  
  }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
  {  
    alert("Please enter a valid e-mail address");  
    return false;    
  }

  

} 
</script>

