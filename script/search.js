function change() {
    if (document.getElementById('baidu').checked){
        document.getElementById('logo').src='images/baidu.svg';
        document.getElementById('btnSearch').value='baidu搜索';
        document.getElementById('frmSearch').action='https://www.baidu.com/s';
        document.getElementById('txtSearch').name='wd';
    }else if(document.getElementById('bing').checked){
        document.getElementById('logo').src='images/bing.svg';
        document.getElementById('btnSearch').value='bing搜索';
        document.getElementById('frmSearch').action='https://cn.bing.com/search';
        document.getElementById('txtSearch').name='q';
    }else if(document.getElementById('sogou').checked){
        document.getElementById('logo').src='images/sogou.svg';
        document.getElementById('btnSearch').value='sogou搜索';
        document.getElementById('frmSearch').action='https://www.sogou.com/web';
        document.getElementById('txtSearch').name='query';
    }
}