

const arr =["intro" , "anime"];
let start = 0;


function project_onclick(pjid)
{
    //alert(pjid);
    var prjId=document.getElementById(pjid.toString() + "dir");

    if(prjId.style.display === "block")
    {
        prjId.style.display="none";
    }
    else
    {
        prjId.style.display="block";
    }
    
}



function change_Content(arrowId)
{
    let id_content = arr[start];
    var content_display = document.getElementById(id_content);

    if(arrowId.toString()==="next_ptr")
    {
        if(start==(arr.length-1))
        {
            return;
        }
        
        console.log("Hello")
        content_display.style.display ="none";
        start=start+1;
        var content_to_disp = document.getElementById(arr[start]);
        // console.log(content_to_disp);
        content_to_disp.style.display ="block";
    }
    else
    {
        if(start==0)
        {
            return;
        }
        
        let id_content = arr[start];
        var content_display = document.getElementById(id_content);
        content_display.style.display = "none";

        start=start-1;
        var content_to_disp = document.getElementById(arr[start]);
        content_to_disp.style.display ="block";

    }
}