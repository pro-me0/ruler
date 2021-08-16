let title = document.createElement('span'),hold=true, tru0 = true,tru=true, difx, dify, ht = document.createElement('span'),html, wd = document.createElement('span'), w, wh, ruler = (me, e) => {
    if(!tru0){
        hold = false;
        // tru0 = true;
    };
    if (tru0) {
        title.innerHTML = "x: " + e.clientX + "<br>y: " + e.clientY;
        title.style.transition = '0s';
        title.setAttribute('id', 'span')
        
        ht.style.transition = '0s';
        ht.style.top = e.clientY + 'px';
        ht.style.border = '1px dashed  rgb(100, 100, 39)';
        ht.style.left = e.clientX + 'px';
        ht.style.visibility = 'hidden';
        ht.style.padding = '0';
        
        wd.style.padding = '0';
        wd.style.visibility = 'hidden';
        wd.style.transition = '0s';
        wd.style.border = '1px dashed green';
        wd.style.maxWidth = window.innerWidth + 'px';
        wd.style.left = e.clientX + 'px';
    
        w = e.clientX;
        wh = e.clientY;
        me.setAttribute('onmousemove', 'rule(event, w)');
        me.appendChild(title);
        me.appendChild(ht);
        me.appendChild(wd);
        adjust(e.clientX, e.clientY);
        tru0 = false;
        hold = true;
    };
};
let rule = (e, x) => {
    ht.style.visibility = 'visible';
    wd.style.visibility = 'visible';
    if (!hold){
        tru0 = true;
    }
    if(hold){
            let pos = e.clientX, poy = e.clientY;
            if (pos > x) {   
                difx = pos - x;
            }else{
                difx = x - pos;
            }
            if(poy > wh){
                dify = e.clientY - wh;
            }else{
                dify = wh - e.clientY;
            }
            title.innerHTML = 'x: ' +  difx + '<br>y: ' + dify;
            
            /* title.style.left = (pos - (0)) + 'px'; */
            /* title.style.top = (e.clientY - title.offsetHeight) + 'px'; */
            adjust(e.clientX, e.clientY);
        }
};
let adjust = (e, y) => {
        let init = title.offsetWidth, bal = window.innerWidth - (init);
        /* if(title.style.left.slice(0, title.style.left.indexOf('px')) > bal){
            let x = window.innerWidth - e, fin = title.offsetWidth - x;
            title.style.left = (e - (fin+8)) + 'px';
            title.style.left = (window.innerWidth - (title.offsetWidth + 8)) + 'px';
        }; */
        /* if(title.style.left.slice(0, title.style.left.indexOf('px')) < 0){
            title.style.left = '8px';
        }; */
        /* if (title.style.top.slice(0, title.style.top.indexOf('px')) < 0) {
            let x = window.innerHeight - y, fin = title.offsetHeight - x;
            title.style.top = (0) + 'px';
        }; */
        wd.style.top = y + 'px';
        if(y > wh){
            ht.style.height = (dify) + 'px';
    
            title.style.top = (Number(wd.style.top.slice(0, wd.style.top.indexOf('px'))) - (title.offsetHeight+ 10)) + 'px';
            if (title.style.top.slice(0, title.style.top.indexOf('px')) < 0) {
                /* let x = window.innerHeight - y, fin = title.offsetHeight - x; */
                title.style.top = (0) + 'px';
            };
        }else{
            ht.style.top = y + 'px';
            ht.style.height = (dify) + 'px';
    
            title.style.left = (Number(ht.style.left.slice(0, ht.style.left.indexOf('px'))) - (title.offsetWidth + 10)) + 'px';
            title.style.top = (Number(wd.style.top.slice(0, wd.style.top.indexOf('px'))) + 10) + 'px';
        };
        if(e > w){
            wd.style.minWidth = (difx) + 'px';
            wd.style.width = (e - w) + 'px';
            
            title.style.left = (Number(ht.style.left.slice(0, ht.style.left.indexOf('px'))) + 10) + 'px';
            if(title.style.left.slice(0, title.style.left.indexOf('px')) > bal){
                let x = window.innerWidth - e, fin = title.offsetWidth - x;
                title.style.left = (e - (fin+8)) + 'px';
                /* title.style.left = (window.innerWidth - (title.offsetWidth + 8)) + 'px'; */
            };
        }else{
            wd.style.minWidth = (w - e) + 'px';
            wd.style.left = e + 'px';
            wd.style.width = (difx) + 'px';
    
            title.style.left = (Number(ht.style.left.slice(0, ht.style.left.indexOf('px'))) - (title.offsetWidth + 10)) + 'px';
            if(title.style.left.slice(0, title.style.left.indexOf('px')) < 0){
                title.style.left = '8px';
            };
        };
};
let menu = () => {
    html = document.querySelector('html'), div = document.createElement('div'), span0 = document.createElement('span'), span2 = document.createElement('span');
        div.appendChild(span0);
        document.body.appendChild(div);
    
        div.style.position = 'fixed';
        div.style.right = '10px';
        div.style.top = '10px';
        div.style.border = '1px solid white';
        div.style.borderRadius = '.499em';
        div.style.width = '2em';
        div.style.height = '1em';
        div.style.zIndex = 2;
        div.style.cursor = 'pointer';
        // div.style.textAlign = 'right';
        
        span0.style.transition = '.3s';
        span0.style.position = 'absolute';
        span0.style.borderRadius = '.499em';
        span0.style.backgroundColor = 'white';
        span0.style.boxShadow = 'none';
        span0.style.border = '0';
        span0.style.width = '1em';
        span0.style.padding = '0';
        span0.style.height = 'inherit';
        
        div.setAttribute('onclick', 'toggle(this, event, span0)');
};
let state = {
        on: (span) => {
            html.setAttribute('onclick', 'ruler(this, event)');
            span.style.left = '16px';
            span.style.backgroundColor = 'green';
            tru=false;
            tru0 = true;hold = true;
        },
        off: (span) => {
            ht.remove();wd.remove();title.remove();
            html.removeAttribute('onclick');
            span.style.left = '0px';
            span.style.backgroundColor = 'white';
            tru=true;
        }
    };
function toggle(me, e, span0){
    e.stopPropagation();
    if(tru == true){
        state.on(span0);
        console.log('on')
    }else if(tru != true){
        state.off(span0);
        console.log('off')
    };
};