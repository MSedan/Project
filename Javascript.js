function move() {
    var v1 = document.getElementById("p1").value;
    console.log(v1);
    if (v1 == 50) {
      document.getElementById("p1").value = 0;
    } else {
      document.getElementById("p1").value = v1 + 1;
    }
    document.getElementById("toastText").innerHTML = document.getElementById(
      "p1"
    ).value;
  }
  
  function Name() {
    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl);
    });
    toastList.forEach((toast) => toast.show());
  }
  
  document.getElementById("feedbackbtn").onclick = function () {
    var Feedback = document.getElementById("myfeedback").value;
    console.log(Feedback);
  };
  