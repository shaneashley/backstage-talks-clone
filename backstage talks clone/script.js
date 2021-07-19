/*const firstIssue = document.querySelector("#issue1");
const secondIssue = document.querySelector("#issue2");
const thirdIssue = document.querySelector("#issue3");
const fourthIssue = document.querySelector("#issue4");
const fiftthIssue = document.querySelector("#issue5");


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'https://backstagetalks.com/img/backstagetalks_cover_issue_5.png';

imgArray[1] = new Image();
imgArray[1].src = 'https://backstagetalks.com/img/backstagetalks_cover_issue_4.png';

imgArray[2] = new Image();
imgArray[2].src = 'https://backstagetalks.com/img/backstagetalks_cover_issue_3.png';

imgArray[3] = new Image();
imgArray[3].src = 'https://backstagetalks.com/img/backstagetalks_cover2017.png';


imgArray[4] = new Image();
imgArray[4].src = 'https://backstagetalks.com/img/backstagetalks_cover2016_n.png';





function issueTwo () {
  document.body.style.backgroundColor = "orange";
  do
}
*/


var test = document.getElementById("test");

document.onscroll = function() {

		scrollTop = document.documentElement.scrollTop;
    test.innerHTML = scrollTop;
    
    allDivs = document.getElementsByTagName('div');

    for( i=0; i< allDivs.length; i++ )
    {
    		curDiv = allDivs[i];
        
        
        // The code below makes the background color change when the 						scroll top passes the 2/3 of the previous div.
        
        heightBefore = 0;    
        if (i > 0){
        		heightBefore = allDivs[i-1].offsetHeight / 3;
        }
        
        if (scrollTop > curDiv.offsetTop - heightBefore){
        		color = curDiv.getAttribute("data-color");
          	document.body.style.background = color;
        }
                
    }
};
