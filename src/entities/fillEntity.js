function FillEntity(Interceptor,shapeObject,arguments, canvasX, canvasY) {
  var self = this;
  var passedArguments = arguments;
  this.populate = function(Interceptor) {
    if(passedArguments[0].name == 'p5.Color') {
      passedArguments = passedArguments[0].levels;
    }
    Interceptor.currentColor = Interceptor.getColorName(passedArguments)['color'] + Interceptor.getColorName(passedArguments)['rgb'];
  }

  this.populate(Interceptor);
}
FillEntity.handledNames = [
  'fill'
]

FillEntity.handles = function(name) {
  return (this.handledNames.indexOf(name) >= 0);
}

FillEntity.isParameter = true;

Registry.register(FillEntity);
