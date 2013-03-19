var PresentationCollection = (function(){
  var presentations= [];
  return {
    add: function(e){
      e.preventDefault();
      presentationId = presentations.length
      var presentation = new Presentation(presentationId, this.name.title, this.description.value);
      presentations.push(presentation);
      $('#presentationContainer').append(_.template($("#presentationTemplate").html(), presentation));

      $("#presentation" + presentationId).find("a[href='#addSlideDialog']").off('click').on('click',presentation.newSlide);
      this.reset();
      $("#addPresentationDialog").modal('hide');
    }
  }
})();

$('#newPresentation').off('submit').on('submit', PresentationCollection.add);
