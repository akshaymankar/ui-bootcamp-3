var Presentation = function(presentationId, presentationName, presentationDescription){
  var id = presentationId,
      title = presentationName,
      description = presentationDescription,
      slideCount = 0;
  var presentationId = "presentation" + id

  var bindModal = function(){
    $("#newSlide").off('submit').on('submit',function(e){
      e.preventDefault();
      $presentation = $("#"+presentationId);
      $slides = $presentation.find(".slides");
      $slides.append(_.template(
        $("#slideTemplate").html(), {counter: slideCount++}
      ));
    });
  }

  return {
    newSlide: function(e){
      bindModal();
    },
    id: id,
    title: title,
    description: description
  };
};
