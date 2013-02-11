$(document).ready(function() {


if($('#document_doctype').val() =="meetings"){ 
  $('#document_meeting_date_input').show()
}
else {$('#document_meeting_date_input').hide()}


  $('#document_doctype').change(function(){
  document_type = $('#document_doctype').val();
  if(document_type == "meetings"){
    $('#document_meeting_date_input').show()
  }
  else {
    $('#document_meeting_date_input').hide();
  };
});
});

