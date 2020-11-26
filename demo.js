
var s = Snap("#snappy");
Snap.load("assets/images/SVG/hair.svg", 
          onSVGLoaded);

function onSVGLoaded(data) {
      h = data.select("#hair");
      s.append(h);
  }

