

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