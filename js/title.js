var OriginTitile=document.title;
var titleTime;
document.addEventListener('visibilitychange',function()
{
    if (document.hidden)
    {
        document.title="w(ﾟДﾟ)w 不要走！再看看嘛！";
        clearTimeout(titleTime);
    }
    else
    {
        document.title="♪(^∇^*)欢迎回来！-"+OriginTitile;
        titleTime=setTimeout(function(){document.title=OriginTitile;},1000);
    }
});