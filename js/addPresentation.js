$('#newPresentation').off('submit').on('submit', function(e){
  e.preventDefault();
  $('#presentationContainer').append(_.template($("#presentationTemplate").html(), {
    title: this.name.value,
    description: this.description.value
  }));
  this.reset();
  $("#addPresentationDialog").modal('hide');
});
