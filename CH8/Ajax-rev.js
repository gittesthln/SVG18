let httpObj;
function getData() {//// ref="OpenS"
  httpObj = new XMLHttpRequest();//// ref="MakeObj"
  if(httpObj) {//// ref="Succeed"
	  httpObj.onreadystatechange = function () {//// ref="GetS"
      if(httpObj.readyState == 4 && httpObj.status == 200) {//// ref="requestOK"
        alert(httpObj.responseText);//// ref="showSendText"
        let polygon = document.getElementById("npolygon");//// ref="setDS"
        polygon.setAttribute("points", httpObj.responseText);//// ref="setDE"
      }
		}
	}
  httpObj.open("GET","./svg-polygon-ajax.php?N=" +//// ref="MakeReqS"
    encodeURI(document.getElementById("N").value),true);//// ref="MakeReqE"
  httpObj.send(null);//// ref="sendnull"
}//// ref="OpenE"
//// ref="GetE"
