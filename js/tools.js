function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);
    //获取目标的位置判断速度的正负值
    var current = parseInt(getStyle(obj,attr));
    if (current>target){
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldLeft = parseInt(getStyle(obj,attr)),
            newLeft = oldLeft+speed;
        if ((speed<0&&newLeft< target)||(speed>0&&newLeft> target)){
            newLeft = target;
        }
        obj.style[attr] = newLeft +"px";
        if (newLeft==target){
            clearInterval(obj.timer);
            callback && callback();
        }

    },50)
}

function getStyle(obj,name) {
    if (window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else {
        return obj.currentStyle[name];
    }

}
