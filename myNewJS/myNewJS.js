


function newEmp(form){
var x=radio1.elements.emp.value;
//alert(x);

if(x=="Contractor"){
document.getElementById("Contractor_Form").style.display="block";
document.getElementById("Permanent_Form").style.display="none";

}
else{
document.getElementById("Contractor_Form").style.display="none";
document.getElementById("Permanent_Form").style.display="block";
}
}

function contractorFormValue(form){   /* method invoked after event of onClick submit button on Contractor's page. This method has the    
                                         reference of form object.*/

									 
var n=validate();

if(n==1){
return;
}

var first_name     =ContractorsForm.elements.f_name.value; /* fetching a value from the element of Contractors Form and assigning it to a 
                                                              variable*/
var middle_name    =ContractorsForm.elements.m_name.value;
var last_name      =ContractorsForm.elements.l_name.value;
var gender_        =ContractorsForm.elements.gender.value;
var classific      =ContractorsForm.elements.classification.value;
var star_rate      =ContractorsForm.elements.star_s_rate.value;
var rate_of_payment=ContractorsForm.elements.rateofpayment.value;
var office_region_ =ContractorsForm.elements.office_region.value;
var practice_loc   =ContractorsForm.elements.practice_location.value;
var service_line_  =ContractorsForm.elements.service_line.value;
var deptt_no_      =ContractorsForm.elements.deptt_no.value;
var sub_deptt_     =ContractorsForm.elements.sub_deptt.value;
var time_r         =ContractorsForm.elements.time_reviewer.value;
var team_co        =ContractorsForm.elements.team_coordinator.value;
var s_date         =ContractorsForm.elements.start_date.value;
var full_t         =ContractorsForm.elements.full_time.value;
var capacity_hr    =ContractorsForm.elements.capacity_hrs.value;
var spider_email   =ContractorsForm.elements.spider_e_mail.value;
var wipfli_email   =ContractorsForm.elements.wipfli_e_mail.value;
var spider_jira_   =ContractorsForm.elements.spider_jira.value;
var cmic_jira_     =ContractorsForm.elements.cmic_jira.value;
var w_duration     =ContractorsForm.elements.work_duration.value;

// Printing the variable value onto the same Contractor's Form page from the top.
document.write('<p>First Name:&nbsp;'+first_name + '<br>Middle Name:&nbsp;'+middle_name + 
'<br>Last Name:&nbsp;'+ last_name+'<br>Gender:&nbsp;'+ gender_ +'<br>Classification:&nbsp;'+classific+
'<br>Star System Rate:&nbsp;'+star_rate+'<br>Payment Rate:&nbsp;'+rate_of_payment+'<br>Office:&nbsp;'+office_region_+
'<br>Practice:&nbsp;'+practice_loc+'<br>Service Line:&nbsp;'+service_line_+'<br>Department:&nbsp;'+deptt_no_+
'<br>Sub-Department:&nbsp;'+sub_deptt_+'<br>Time Reviewer:&nbsp;'+time_r+'<br>Team Coordinator:&nbsp;'+team_co+
'<br>Start Date:&nbsp;'+s_date+'<br>Full Time:&nbsp;'+full_t+'<br>Capacity Hours:&nbsp;'+capacity_hr +
'<br>SpiderLogic E-mail Required:&nbsp;'+spider_email+'<br>Wipfli E-mail Required:&nbsp;'+wipfli_email+
'<br>SpiderLogic JIRA Required:&nbsp;'+spider_jira_+'<br>CMIC JIRA Required:&nbsp;'+cmic_jira_+
'<br>Duration of Work Order:&nbsp;'+w_duration+'</p>');
}

	

function validate(form){

var flag=0;

var req_field=[ContractorsForm.elements.f_name.value,ContractorsForm.elements.l_name.value,
ContractorsForm.elements.gender.value,ContractorsForm.elements.classification.value,
ContractorsForm.elements.star_s_rate.value,ContractorsForm.elements.rateofpayment.value,
ContractorsForm.elements.office_region.value,ContractorsForm.elements.practice_location.value,
ContractorsForm.elements.service_line.value,ContractorsForm.elements.deptt_no.value,
ContractorsForm.elements.sub_deptt.value,ContractorsForm.elements.start_date.value,
ContractorsForm.elements.full_time.value,ContractorsForm.elements.capacity_hrs.value,
ContractorsForm.elements.spider_e_mail.value,ContractorsForm.elements.wipfli_e_mail.value,
ContractorsForm.elements.spider_jira.value,ContractorsForm.elements.cmic_jira.value,
ContractorsForm.elements.work_duration.value];

for(var i=0;i<req_field.length;i++){
if(req_field[i]==""){
document.getElementById("req_field_msg_c"+[i]).innerHTML="* field cannot be left blank";
flag=1;
}
else{document.getElementById("req_field_msg_c"+[i]).innerHTML="";}

}

 var file_up=[ContractorsForm.elements.time_reviewer.value,ContractorsForm.elements.team_coordinator.value];
 var dis_msg_file=["list1_c","list2_c"];
 
 for(var i=0;i<file_up.length;i++){
 
 if(file_up[i]==""){
 document.getElementById(dis_msg_file[i]).style.fontWeight="bold";
 document.getElementById(dis_msg_file[i]).style.fontSize="13px";
 document.getElementById(dis_msg_file[i]).style.color="red"; 
 document.getElementById(dis_msg_file[i]).innerHTML=" * field cannot be left blank";
 
 flag=1;
 }
 else{document.getElementById(dis_msg_file[i]).innerHTML="";}
 }
  
 return flag;
}



function permanentFormValue(form){   /* Method invoked after event of onClick Submit Button in the Permanent Employee's page.This method has 
                                        been passed the form's object*/

									
var n=validate_perma();

if(n==1){
return;
}

var first_name     =PermanentsForm.elements.f_name.value; /*fetching the value from the element of Permanent Employee's form and assigning
                                                            it to a variable*/
var middle_name    =PermanentsForm.elements.m_name.value;
var last_name      =PermanentsForm.elements.l_name.value;
var gender_        =PermanentsForm.elements.gender.value;
var classific      =PermanentsForm.elements.classification.value;
var star_rate      =PermanentsForm.elements.star_s_rate.value;
var office_region_ =PermanentsForm.elements.office_region.value;
var practice_loc   =PermanentsForm.elements.practice_location.value;
var service_line_  =PermanentsForm.elements.service_line.value;
var deptt_no_      =PermanentsForm.elements.deptt_no.value;
var sub_deptt_     =PermanentsForm.elements.sub_deptt.value;
var time_r         =PermanentsForm.elements.time_reviewer.value;
var ex_reviewer    =PermanentsForm.elements.expense_reviewer.value;
var team_co        =PermanentsForm.elements.team_coordinator.value;
var s_date         =PermanentsForm.elements.start_date.value;
var full_t         =PermanentsForm.elements.full_time.value;
var capacity_hr    =PermanentsForm.elements.capacity_hrs.value;
var spider_email   =PermanentsForm.elements.spider_e_mail.value;
var wipfli_email   =PermanentsForm.elements.wipfli_e_mail.value;
var spider_jira_   =PermanentsForm.elements.spider_jira.value;
var cmic_jira_     =PermanentsForm.elements.cmic_jira.value;
var g_salary       =PermanentsForm.elements.gross_salary.value;
var bonus_         =PermanentsForm.elements.bonus.value;

// Printing the value inside variable on the Permanent Employee's page from the top
document.write('<p>First Name:&nbsp;'+first_name +'<br>Middle Name:&nbsp;'+middle_name + '<br>Last Name:&nbsp;'+ last_name+
'<br>Gender:&nbsp;'+ gender_ + '<br>Classification:&nbsp;'+classific+'<br>Star System Rate:&nbsp;'+star_rate+
'<br>Office:&nbsp;'+office_region_+'<br>Practice:&nbsp;'+practice_loc+'<br>Service Line:&nbsp;'+service_line_+
'<br>Department:&nbsp;'+deptt_no_+'<br>Sub-Department:&nbsp;'+sub_deptt_+'<br>Time Reviewer:&nbsp;'+time_r+
'<br>Expense Reviewer:&nbsp;'+ex_reviewer+'<br>Team Coordinator:&nbsp;'+team_co+'<br>Start Date:&nbsp;'+s_date+
'<br>Full Time:&nbsp;'+full_t+'<br>Capacity Hours:&nbsp;'+capacity_hr+'<br>SpiderLogic E-mail Required:&nbsp;'+spider_email+
'<br>Wipfli E-mail Required:&nbsp;'+wipfli_email+'<br>SpiderLogic JIRA Required:&nbsp;'+spider_jira_+
'<br>CMIC JIRA Required:&nbsp;'+cmic_jira_+'<br>Gross Salary Component<br>(not including 12-month Bonus):&nbsp;'+g_salary+
'<br>12-month Bonus(if any):&nbsp;'+bonus_+'</p>');
}


function validate_perma(form){

var flag=0;

var req_field=[PermanentsForm.elements.f_name.value,PermanentsForm.elements.l_name.value,
PermanentsForm.elements.gender.value,PermanentsForm.elements.classification.value,
PermanentsForm.elements.star_s_rate.value,PermanentsForm.elements.office_region.value,
PermanentsForm.elements.practice_location.value,PermanentsForm.elements.service_line.value,
PermanentsForm.elements.deptt_no.value,PermanentsForm.elements.sub_deptt.value,
PermanentsForm.elements.start_date.value,PermanentsForm.elements.full_time.value,
PermanentsForm.elements.capacity_hrs.value,PermanentsForm.elements.spider_e_mail.value,
PermanentsForm.elements.wipfli_e_mail.value,PermanentsForm.elements.spider_jira.value,
PermanentsForm.elements.cmic_jira.value,PermanentsForm.elements.gross_salary.value,
PermanentsForm.elements.bonus.value];

for(var i=0;i<req_field.length;i++){
if(req_field[i]==""){
document.getElementById("req_field_msg_p"+[i]).innerHTML="* field cannot be left blank";
flag=1;
}
else{document.getElementById("req_field_msg_p"+[i]).innerHTML="";}

}

 var file_up=[PermanentsForm.elements.time_reviewer.value,PermanentsForm.elements.expense_reviewer.value,
 PermanentsForm.elements.team_coordinator.value];
 var dis_msg_file=["list1_p","list2_p","list3_p"];
 
 for(var i=0;i<file_up.length;i++){
 
 if(file_up[i]==""){
 document.getElementById(dis_msg_file[i]).style.fontWeight="bold";
 document.getElementById(dis_msg_file[i]).style.fontSize="13px";
 document.getElementById(dis_msg_file[i]).style.color="red"; 
 document.getElementById(dis_msg_file[i]).innerHTML=" * field cannot be left blank";
 
 flag=1;
 }
 else{document.getElementById(dis_msg_file[i]).innerHTML="";}
 }
  
 return flag;
}


// -------------------File API for uploading and reading from Files--------------------------------------- //

if(window.File && window.FileReader && window.FileList && window.Blob){

//alert('File APIs supported');
}
else{
alert('The File APIs are not fully supported in this browser!!!	');
}


//----------- Method for Contractor's Time-Reviewer Drop-Down ------------ //


function handleFileSelect1(evt){


var select=document.getElementById('drop_down1_c');
var files=evt.target.files;
var output=[];
var txt="text/plain";

var option_classes=document.getElementsByClassName('options_class_c1');
//alert(option_classes.length);
var length=option_classes.length;
for(var i=0;i<length;i++){

select.removeChild(option_classes[length-i-1]);

}

for(var i=0,f; f=files[i];i++){

if(f.type==txt){

}
else{
alert("Please Upload a file of Text type!!!");
break;
}
output.push('<li><strong>',escape(f.name), '</strong> (',f.type||'n/a',')-',f.size,
'bytes,last modified:',f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString():'n/a','</li>');


var reader=new FileReader();

reader.onload=(function(theFile){
return function(e){

var data = e.target.result.split(",");

for(var i=0;i<data.length;i++){

var opt=document.createElement('option');
opt.value=data[i];
opt.className="options_class_c1";
opt.innerHTML=data[i];
select.appendChild(opt);
}
};
})(f);

reader.readAsText(f);
}
document.getElementById('list1_c').style.color="black";
document.getElementById('list1_c').innerHTML='<ul>'+output.join('')+'</ul>';
}
document.getElementById('file_name1_c').addEventListener('change',handleFileSelect1,false);


// ---------- Method for Contractor's Team-Coordinator Drop-Down ---------------//

function handleFileSelect2(evt){

var select1=document.getElementById('drop_down2_c');
var files=evt.target.files;
var output=[];
var txt="text/plain";

var option_classes=document.getElementsByClassName('options_class_c2');

var length=option_classes.length;
for(var i=0;i<length;i++){

select1.removeChild(option_classes[length-i-1]);

}
for(var i=0,f; f=files[i];i++){

if(f.type==txt){

}
else{
alert("Please Upload a file of Text type!!!");
break;
}

output.push('<li><strong>',escape(f.name), '</strong> (',f.type||'n/a',')-',f.size,
'bytes,last modified:',f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString():'n/a','</li>');

var reader=new FileReader();

reader.onload=(function(theFile){
return function(e){

var data = e.target.result.split(",");


for(var i=0;i<data.length;i++){

var opt=document.createElement('option');
opt.value=data[i];
opt.innerHTML=data[i];
opt.className="options_class_c2";
select1.appendChild(opt);
}
};
})(f);

reader.readAsText(f);
}
document.getElementById('list2_c').style.color="black";
document.getElementById('list2_c').innerHTML='<ul>'+output.join('')+'</ul>';
}
document.getElementById('file_name2_c').addEventListener('change',handleFileSelect2,false);	

//------------Method for Permanent's Time Reviewer Drop Down--------------//

function handleFileSelect1_p(evt){

var select=document.getElementById('drop_down1_p');
var files=evt.target.files;
var output=[];
var txt="text/plain";

var option_classes=document.getElementsByClassName('options_class_p1');

var length=option_classes.length;
for(var i=0;i<length;i++){

select.removeChild(option_classes[length-i-1]);

}

for(var i=0,f; f=files[i];i++){
if(f.type==txt){

}
else{
alert("Please Upload a file of Text type!!!");
break;
}

output.push('<li><strong>',escape(f.name), '</strong> (',f.type||'n/a',')-',f.size,
'bytes,last modified:',f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString():'n/a','</li>');

if(f.type.match('txt.*')){
continue;												
}

var reader=new FileReader();

reader.onload=(function(theFile){
return function(e){

var data = e.target.result.split(",");

for(var i=0;i<data.length;i++){

var opt=document.createElement('option');
opt.value=data[i];
opt.innerHTML=data[i];
opt.className="options_class_p1";
select.appendChild(opt);
}
};
})(f);

reader.readAsText(f);
}
document.getElementById('list1_p').style.color="black";
document.getElementById('list1_p').innerHTML='<ul>'+output.join('')+'</ul>';
}
document.getElementById('file_name1_p').addEventListener('change',handleFileSelect1_p,false);

//-------------Method for Permanent's Expense Reviewer Drop Down-------------//

function handleFileSelect2_p(evt){

var select1=document.getElementById('drop_down2_p');
var files=evt.target.files;
var output=[];
var txt="text/plain";

var option_classes=document.getElementsByClassName('options_class_p2');

var length=option_classes.length;
for(var i=0;i<length;i++){

select1.removeChild(option_classes[length-i-1]);

}

for(var i=0,f; f=files[i];i++){

if(f.type==txt){

}
else{
alert("Please Upload a file of Text type!!!");
break;
}

output.push('<li><strong>',escape(f.name), '</strong> (',f.type||'n/a',')-',f.size,
'bytes,last modified:',f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString():'n/a','</li>');

if(f.type.match('txt.*')){
continue;												
}

var reader=new FileReader();

reader.onload=(function(theFile){
return function(e){

var data = e.target.result.split(",");

for(var i=0;i<data.length;i++){

var opt=document.createElement('option');
opt.value=data[i];
opt.innerHTML=data[i];
opt.className="options_class_p2";
select1.appendChild(opt);
}
};
})(f);

reader.readAsText(f);
}
document.getElementById('list2_p').style.color="black";
document.getElementById('list2_p').innerHTML='<ul>'+output.join('')+'</ul>';
}
document.getElementById('file_name2_p').addEventListener('change',handleFileSelect2_p,false);


//------------------Method for Permanent's Team Coordinator Drop Down---------------------//

function handleFileSelect3_p(evt){

var select3=document.getElementById('drop_down3_p');
var files=evt.target.files;
var output=[];
var txt="text/plain";

var option_classes=document.getElementsByClassName('options_class_p3');

var length=option_classes.length;
for(var i=0;i<length;i++){

select3.removeChild(option_classes[length-i-1]);

}

for(var i=0,f; f=files[i];i++){

if(f.type==txt){

}
else{
alert("Please Upload a file of Text type!!!");
break;
}

output.push('<li><strong>',escape(f.name), '</strong> (',f.type||'n/a',')-',f.size,
'bytes,last modified:',f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString():'n/a','</li>');

if(f.type.match('txt.*')){
continue;												
}

var reader=new FileReader();

reader.onload=(function(theFile){
return function(e){

var data = e.target.result.split(",");

for(var i=0;i<data.length;i++){


var opt=document.createElement('option');
opt.value=data[i];
opt.innerHTML=data[i];
opt.className="options_class_p3";
select3.appendChild(opt);
}
};
})(f);

reader.readAsText(f);
}
document.getElementById('list3_p').style.color="black";
document.getElementById('list3_p').innerHTML='<ul>'+output.join('')+'</ul>';
}
document.getElementById('file_name3_p').addEventListener('change',handleFileSelect3_p,false);

