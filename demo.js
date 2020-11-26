
var s = Snap("#snappy");
Snap.load("assets/images/SVG/hair.svg", 
          onSVGLoaded);

function onSVGLoaded(data) {
      s.append(data);
  }

