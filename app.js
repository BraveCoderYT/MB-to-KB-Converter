$(document).ready(function () {
  $("#convert").on("click", function () {
    var mb = $("#mb").val();

    if (mb == "") {
      alert("MB field are required.");
    } else {
      var decimal = 1000*mb;
      var binary = 1024*mb;

      alert("Converted KB: (Decimal: "+decimal+") & (Binary: "+binary+")");
      var mb = $("#mb").val("");
    }
  });
});
