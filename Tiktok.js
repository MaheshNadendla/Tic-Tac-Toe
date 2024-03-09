let count=0;
check=0;
xwins=0;
owins=0;
function Press1()
{
    let z=document.querySelector('.one').innerHTML;
    console.log(z);
    if(document.querySelector('.one').innerHTML==="" && check==0)
    {
        let val=checkPress();
        document.querySelector('.one').innerHTML=`${val}`;
        count++;
        WinCheck();
        CountCheck();
        if(val==="X")
        {
            document.querySelector('.one').style.color="black";
        }
        else
        {
            document.querySelector('.one').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}

function Press2()
{
    let z=document.querySelector('.two').innerHTML;
    console.log(z);
    if(document.querySelector('.two').innerHTML===""&& check==0)
    {
        let val=checkPress();
        document.querySelector('.two').innerHTML=`${val}`;
        count++;
        WinCheck();
        CountCheck();
        if(val==="X")
        {
            document.querySelector('.two').style.color="black";
        }
        else
        {
            document.querySelector('.two').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press3()
{
    let z=document.querySelector('.three').innerHTML;
    console.log(z);
    if(document.querySelector('.three').innerHTML==="" && check==0)
    {
        let val=checkPress();
        document.querySelector('.three').innerHTML=`${val}`;
        count++;
        WinCheck();
        CountCheck();
        if(val==="X")
        {
            document.querySelector('.three').style.color="black";
        }
        else
        {
            document.querySelector('.three').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press4()
{
    let z=document.querySelector('.four').innerHTML;
    console.log(z);
    if(document.querySelector('.four').innerHTML=="" && check==0)
    {
        let val=checkPress();
        document.querySelector('.four').innerHTML=`${val}`;
        count++;
        WinCheck();
        CountCheck();
        if(val==="X")
        {
            document.querySelector('.four').style.color="black";
        }
        else
        {
            document.querySelector('.four').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press5()
{
    let z=document.querySelector('.five').innerHTML;
    console.log(z);
    if(document.querySelector('.five').innerHTML==="" && check==0)
    {
    let val=checkPress();
   
        document.querySelector('.five').innerHTML=`${val}`;
        count++;
        WinCheck();
        CountCheck();
        if(val==="X")
        {
            document.querySelector('.five').style.color="black";
        }
        else
        {
            document.querySelector('.five').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press6()
{
    let z=document.querySelector('.six').innerHTML;
    console.log(z);
    if(document.querySelector('.six').innerHTML==="" && check==0)
    {
        let val=checkPress();
        document.querySelector('.six').innerHTML=`${val}`;
        count++;
        WinCheck();
        CountCheck();
        if(val==="X")
        {
            document.querySelector('.six').style.color="black";
        }
        else
        {
            document.querySelector('.six').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press7()
{
    let z=document.querySelector('.seven').innerHTML;
    console.log(z);
    if(document.querySelector('.seven').innerHTML==="" && check==0)
    {
    let val=checkPress();
        
    document.querySelector('.seven').innerHTML=`${val}`;
    count++;
    WinCheck();
    CountCheck();
    if(val==="X")
        {
            document.querySelector('.seven').style.color="black";
        }
        else
        {
            document.querySelector('.seven').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press8()
{
    let z=document.querySelector('.eight').innerHTML;
    console.log(z);
    if(document.querySelector('.eight').innerHTML==="" && check==0)
    {
    let val=checkPress();
        
    document.querySelector('.eight').innerHTML=`${val}`;
    count++;
    WinCheck();
    CountCheck();
    if(val==="X")
        {
            document.querySelector('.eight').style.color="black";
        }
        else
        {
            document.querySelector('.eight').style.color="red";
        }
    }
    else{
    console.log("none");
    }
     
}
function Press9()
{
    WinCheck();
    let z=document.querySelector('.nine').innerHTML;
    console.log(z);
    if(document.querySelector('.nine').innerHTML==="" && check==0)
    {
    let val=checkPress();
    
    document.querySelector('.nine').innerHTML=`${val}`;
    count++;
    WinCheck();
    CountCheck();
    if(val==="X")
        {
            document.querySelector('.nine').style.color="black";
        }
        else
        {
            document.querySelector('.nine').style.color="red";
        }
    }
    else{
    console.log("none");
    }
    
}

function checkPress()
{
    
    let y=count%2;
    if(y==0)
        return "X";
    return "O"
}
function CountCheck()
{
    if(count==9 && check==0)
    {
        setTimeout (()=>{
            document.querySelector('.Show').innerHTML="Match Draw";
        },60);
    }

}
function Reset()
{
        count=0;
        document.querySelector('.one').innerHTML="";
        document.querySelector('.two').innerHTML="";
        document.querySelector('.three').innerHTML="";
        document.querySelector('.four').innerHTML="";
        document.querySelector('.five').innerHTML="";
        document.querySelector('.six').innerHTML="";
        document.querySelector('.seven').innerHTML="";
        document.querySelector('.eight').innerHTML="";
        document.querySelector('.nine').innerHTML="";
}
function Restart()
{
    check=0;
    Reset();
    document.querySelector('.Show').innerHTML="";

}
function ShowXwin()
{
    document.querySelector('.Player1').innerHTML=`Player1<br />Wins : ${xwins}`;
}
function ShowOwin()
{
    document.querySelector('.Player2').innerHTML=`Player2<br />Wins : ${owins}`;
}
function ResetSocre(){
    xwins=0;
    ywins=0;
    ShowOwin();
    ShowXwin();
}
function WinCheck()
{
    let a=    document.querySelector('.one').innerHTML;
    let b=    document.querySelector('.two').innerHTML;
    let c=    document.querySelector('.three').innerHTML;
    let d=    document.querySelector('.four').innerHTML;
    let e=    document.querySelector('.five').innerHTML;
    let f=    document.querySelector('.six').innerHTML;
    let g=    document.querySelector('.seven').innerHTML;
    let h=    document.querySelector('.eight').innerHTML;
    let i=    document.querySelector('.nine').innerHTML;

    if( a==="X" && b==="X" && c==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( d==="X" && e==="X" && f==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( g==="X" && h==="X" && i==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( a==="X" && d==="X" && g==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( b==="X" && e==="X" && h==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( c==="X" && f==="X" && i==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( a==="X" && e==="X" && i==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    else if( c==="X" && e==="X" && g==="X")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="X Win The Game";
        },60);
        xwins++;
        ShowXwin();
    }
    if( a==="O" && b==="O" && c==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( d==="O" && e==="O" && f==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( g==="O" && h==="O" && i==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( a==="O" && d==="O" && g==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( b==="O" && e==="O" && h==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( c==="O" && f==="O" && i==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( a==="O" && e==="O" && i==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
    else if( c==="O" && e==="O" && g==="O")
    {
        check++;
        setTimeout (()=>{
        document.querySelector('.Show').innerHTML="O win the Game";
        },60);
        owins++;
        ShowOwin();
    }
}


