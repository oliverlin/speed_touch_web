



var $sb = jQuery.noConflict(); 
            
$sb(document).ready(function() {
  $sb("#pdf_insert.s4").animate({scrollLeft:  4000000}, 0);

	    var btn = $sb('html');
	    
	    
$sb('.bun').bind('touchstart', function(){
    $sb(this).addClass('hover');
}).bind('touchend', function(){
    $sb(this).removeClass('hover');
});

/* 解決inline-block空隙 */	    
$sb('#ab_block').contents().filter(function() {return this.nodeType === 3;}).remove();	
$sb('.menu_bar').contents().filter(function() {return this.nodeType === 3;}).remove();	
$sb('#switch_btn').contents().filter(function() {return this.nodeType === 3;}).remove();
$sb('#select_word').contents().filter(function() {return this.nodeType === 3;}).remove();
$sb('.fil_list_ot').contents().filter(function() {return this.nodeType === 3;}).remove();
$sb('#main_select_ul').contents().filter(function() {return this.nodeType === 3;}).remove();	
$sb('.item_ctrl_bar').contents().filter(function() {return this.nodeType === 3;}).remove();	    
	    
/* 解決inline-block空隙結束 */
	    /*
$sb(".chzn-select").chosen(); 
$sb(".chzn-select-deselect").chosen({allow_single_deselect:true});
	    */
/* pin按鈕loading狀態 */	
var $pin_btn = $sb('#pin_btn');    
var $pin_btn1 = $sb('#pin_btn1');    
var $pin_btn2 = $sb('#pin_btn2'); 
var $pin_btn3 = $sb('#pin_btn3');  
var $s2_check_back = $sb('#s2_check_back');       
with ($pin_btn) {
        click(function () {
        	$sb('.modal-body-mask').addClass('active');
	    	$sb(this).button('loading');
        });
}    
with ($s2_check_back) {
        click(function () {
	    	$sb(this).button('loading');
        });
} 
with ($pin_btn1) {
        click(function () {
	    	$sb(this).button('loading');
        });
} 
with ($pin_btn2) {
        click(function () {
	    	$sb(this).button('loading');
        });
} 
with ($pin_btn3) {
        click(function () {
	    	$sb(this).button('loading');
        });
} 
/* pin按鈕loading狀態結束 */   
	    
with (btn) {
        click(function () {
        	var a = parseInt($sb('.nows').attr('sta'));
        	$sb('.stage' + a).find('.sbk').addClass('active');
        	a = a + 1;
        	if( a == 5){
        		$sb('.sbk' ).removeClass('active');
        		a = 1;
        	}
        	$sb('.nows').attr('sta',a);
        });
} 




/** **/
function trytry(){	
	var $msu_c = $sb('.column');
	$msu_c.each(function () {
		var $this = $sb(this);
		var n = parseInt($this.attr('lev'));
		var m = n + 1;
		$sb('.column' + m).css('left', n*15 + '%');	});
}
trytry();

/* 選取流程角色 */

var $right_bul_add = $sb("#right_bul.s4").find('ul').children('li.add');
           
function rbaShowPrivilegePanel($sbthis) { 
	$sbthis.addClass('active');
}
function rbaHidePrivilegePanel($sbthis) {
	$sbthis.addClass('active');
}
function rbaHideAllPanel($sbthis){
	$right_bul_add.removeClass('active');
}

with ($right_bul_add) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    rbaHideAllPanel($right_bul_add);
    		$right_bul_add.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	rbaShowPrivilegePanel($sb(this));
            }
            else {
            	rbaHidePrivilegePanel($sb(this));
            }
        });
}
/* 選取流程角色結束 */

/* 修改流程 */

var $item_ctrl_bar = $sb(".item_ctrl_bar .bun");
           
function icbShowPrivilegePanel($sbthis) { 
	$sbthis.addClass('active');
}
function icbHidePrivilegePanel($sbthis) {
	$sbthis.addClass('active');
}
function icbHideAllPanel($sbthis){
	$item_ctrl_bar.removeClass('active');
}

with ($item_ctrl_bar) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    icbHideAllPanel($item_ctrl_bar);
    		$item_ctrl_bar.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	icbShowPrivilegePanel($sb(this));
            }
            else {
            	icbHidePrivilegePanel($sb(this));
            }
        });
}
/* 修改流程結束 */


/* 左側切換pdf閱讀 */
var $pdf_insert = $sb("#pdf_insert .pdf_menu").find('.pdf_item');
           
function piShowPrivilegePanel($sbthis) { 
	$sbthis.addClass('active');
}
function piHidePrivilegePanel($sbthis) {
	$sbthis.addClass('active');
}
function piHideAllPanel($sbthis){
	$pdf_insert.removeClass('active');
}

with ($pdf_insert) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    piHideAllPanel($list_item);
    		$list_item.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	piShowPrivilegePanel($sb(this));
            }
            else {
            	piHidePrivilegePanel($sb(this));
            }
        });
}
/* 左側切換pdf閱讀結束 */

/* 左側切換身分 */
var $list_item = $sb("#left_bul li");
           
function tsShowPrivilegePanel($sbthis) { 
	$sbthis.addClass('active');
}
function tsHidePrivilegePanel($sbthis) {
	$sbthis.addClass('active');
}
function tsHideAllPanel($sbthis){
	$list_item.removeClass('active');
}

with ($list_item) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    tsHideAllPanel($list_item);
    		$list_item.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	tsShowPrivilegePanel($sb(this));
            }
            else {
            	tsHidePrivilegePanel($sb(this));
            }
        });
}
/* 左側切換身分結束 */


/* 叫出流程附件 */
var $switch_block = $sb("#switch_block");

with ($switch_block) {
        toggle(function () {
                $sb('#pdf_insert').addClass('active');
                $sb('#right_block_s3').addClass('active');
                $sb(this).addClass('active');
        }, function () {
                $sb('#pdf_insert').removeClass('active');
                $sb('#right_block_s3').removeClass('active');
                $sb(this).removeClass('active');
        });
}

/* 叫出流程附件結束 */


/* p1編輯代理狀態切換 */

var $t78_ctl = $sb("#t78_ctl");
var $main_list_wrapper = $sb(".main_list_wrapper").find('.item');

$main_list_wrapper.each(function () {
	var $this = $sb(this);
	
	$this.touchwipe({
		preventDefaultEvents: false,
	    wipeLeft: function() { 
			var $pcs = $this;
			var $pcs_sta = $pcs.attr('sta');
	        $pcs.attr('sta','1');
	        $pcs.attr('sta','1');
	        $pcs.find('.t8').addClass('show');
	        $pcs.find('.t7').addClass('show');
			if( $pcs_sta == "1" ){
	       	 	$pcs.attr('sta','0');
	       	 	$pcs.attr('sta','0');
	       	 	$pcs.find('.t8').removeClass('show');
	       	 	$pcs.find('.t7').removeClass('show');
			}
	        return false;
	    },
	    wipeRight: function() { 
			var $pcs = $this;
			var $pcs_sta = $pcs.attr('sta');
	        $pcs.attr('sta','1');
	        $pcs.attr('sta','1');
	        $pcs.find('.t8').addClass('show');
	        $pcs.find('.t7').addClass('show');
			if( $pcs_sta == "1" ){
	       	 	$pcs.attr('sta','0');
	       	 	$pcs.attr('sta','0');
	       	 	$pcs.find('.t8').removeClass('show');
	       	 	$pcs.find('.t7').removeClass('show');
			}
	        return false;
	    }
	});
});

with ($t78_ctl) {
        toggle(function () {
				$sb('.t8').attr('sta','1');
				$sb('.t7').attr('sta','1');
                $sb('.t8.cancel').addClass('show');
                $sb('.t7.edit').addClass('show');
                $sb(this).addClass('active');
                $sb(this).html('完成');
        }, function () {
				$sb('.t8').attr('sta','0');
				$sb('.t7').attr('sta','0');
                $sb('.t8.cancel').removeClass('show');
                $sb('.t7.edit').removeClass('show');
                $sb(this).removeClass('active');
                $sb(this).html('編輯');
        });
}

/* p1編輯代理狀態切換結束 */

/* 叫出選字bar */
var $s3_btns0 = $sb(".s3_btns0");
var $s3_btns0_cancel = $sb(".s3_btns0_cancel");

with ($s3_btns0) {
        click(function () {
        		$sb('.textarea_cover').addClass('hide');
                $sb('#select_word').addClass('active');
                $sb(this).addClass('active');
                $sb('.menu_bar').addClass('active');
                $sb('.s3_btns0_cancel').addClass('active');
                $sb('.mess_icon').removeClass('hide_word');
        });
}
with ($s3_btns0_cancel) {
        click(function () {
        		$sb('.textarea_cover').removeClass('hide');
                $sb('#select_word').removeClass('active');
                $sb(this).removeClass('active');
                $sb('.menu_bar').removeClass('active');
                $sb('.s3_btns0').removeClass('active');
                $sb('.mess_icon').addClass('hide_word');
        });
}




/* 叫出選字bar結束 */

/* 叫出選字bar */
var $list_top_edit = $sb(".list_top_edit");
with ($list_top_edit) {
        toggle(function () {
                $sb('.t7.edit').addClass('show');
                $sb('.t8.cancel').addClass('show');
                $sb(this).addClass('active');
        }, function () {
                $sb('.t7.edit').removeClass('show');
                $sb('.t8.cancel').removeClass('show');
                $sb(this).removeClass('active');
        });
}


/* 叫出選字bar結束 */



/* 右側切換流程附件 */
var $ab_block = $sb("#ab_block");
var $switch_left_b = $sb("#switch_btn .left_b");
var $switch_right_b = $sb("#switch_btn .right_b");
         
var $switch_item = $sb("#switch_btn .item");
      
function tsShowPrivilegePanel($sbthis) { 
	$sbthis.addClass('active');
}
function tsHidePrivilegePanel($sbthis) {
	$sbthis.addClass('active');
}
function tsHideAllPanel($sbthis){
	$switch_item.removeClass('active');
}

with ($switch_item) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    tsHideAllPanel($switch_item);
    		$list_item.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	tsShowPrivilegePanel($sb(this));
            }
            else {
            	tsHidePrivilegePanel($sb(this));
            }
        });
}
   
with ($switch_left_b) {
        click(function () {
			$sb('#a_block').addClass('active');
			$sb('#b_block').removeClass('active');
        });
}
with ($switch_right_b) {
        click(function () {
			$sb('#a_block').removeClass('active');
			$sb('#b_block').addClass('active');
        });
}
/* 右側切換流程附件結束 */

/* 右側切換流程增加拖拉 */
/* 右側切換流程增加拖拉結束 */
		
/* 右側點選流程 */
var $right_bul_li = $sb("#right_bul.s3 li");
         
function tsShowPrivilegePanel($sbthis) { 
	$sbthis.find('.hidden_content').addClass('active');
	$sbthis.addClass('active');
}
function tsHidePrivilegePanel($sbthis) {
	$sbthis.find('.hidden_content').addClass('active');
	$sbthis.addClass('active');
}
function tsHideAllPanel($sbthis){
	$sbthis.find('.hidden_content').removeClass('active');
	$sbthis.removeClass('active');
}

with ($right_bul_li) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    tsHideAllPanel($right_bul_li);
    		$right_bul_li.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	tsShowPrivilegePanel($sb(this));
            }
            else {
            	tsHidePrivilegePanel($sb(this));
            }
        });
}
/* 右側點選流程結束 */


/* 設定流程開始 */

var $main_select_li = $sb("#main_select_ul .column .column_inset .tub li");
var $back_bar_bstn = $sb("#back_bar .bstn");
var $main_select_ul_column = $sb("#main_select_ul .column");

$main_select_ul_column.each(function () {
	var $this = $sb(this);
	$this.touchwipe({
		preventDefaultEvents: false,
	    wipeLeft: function() { 
	        return false;
	    },
	    wipeRight: function() { 
			var $pcs = $this;
			var $now_show =  parseInt($sb('#main_select_ul .column.active:last').attr('lev'));
			if( $now_show >= 2 ){
				$sb('#main_select_ul .column.active:last').removeClass('active');		
			}
	        return false;
	    }
	});
});
         
         
function msliShowPrivilegePanel($sbthis) { 
		$sbthis.addClass('active');
		var a = parseInt($sbthis.attr('line'));
		var b = parseInt($sbthis.closest('.column').attr('lev'));
		var b = b + 1;
		var f = $sbthis.attr('line');
  		if( f >= 0 ){
			$sbthis.closest('#main_select_ul').find('.column' + b).addClass('active');
  		}
		$sbthis.closest('#main_select_ul').find('.column' + b).find('.tub.line' + a).addClass('active');
		$sbthis.closest('#main_select_ul').find('.column' + b).find('.tub.line' + a).closest('.column_inset').addClass('active');
  		
}
function msliHidePrivilegePanel($sbthis) {
		$sbthis.addClass('active');
		var a = parseInt($sbthis.attr('line'));
		var b = parseInt($sbthis.closest('.column').attr('lev'));
		var b = b + 1;
		var f = $sbthis.attr('line');
  		if( f >= 0 ){
			$sbthis.closest('#main_select_ul').find('.column' + b).addClass('active');
  		}
		$sbthis.closest('#main_select_ul').find('.column' + b).find('.tub.line' + a).addClass('active');
		$sbthis.closest('#main_select_ul').find('.column' + b).find('.tub.line' + a).closest('.column_inset').addClass('active');
}
function msliHideAllPanel($sbthis){
		$sbthis.closest('.tub').children().removeClass('active')
		var d = parseInt($sbthis.closest('.column').attr('lev'));
		d = d + 1;
		for (i = d; i < $sb('#main_select_ul .tub').length; i++){
			$sb('#main_select_ul').find('.column' + i).find('.active').removeClass('active');
		}
		$nowfol = $sbthis.attr('line');
		ds = d;
		
		if( $nowfol == true ){
			ds = d + 1;
		}
		for (i = ds; i < $sb('#main_select_ul .column').length + 1; i++){
			$sb('#main_select_ul').find('.column' + i).removeClass('active');
		}
}
function BackAllPanel($sbthis){
		var $now_show =  parseInt($sb('#main_select_ul .column.active:last').attr('lev'));
		if( $now_show >= 2 ){
			$sb('#main_select_ul .column.active:last').removeClass('active');		
		}
}
with ($main_select_li) {
        click(function () {
			var status = "" + $sb(this).attr("status");
			
            if (status == "undefined") {
                $sb(this).attr("status", "hide");
                status = $sb(this).attr("status");
            }
    	    msliHideAllPanel($sb(this));
    		$main_select_li.attr("status", "hide");
            if (status == "hide") {
                $sb(this).attr("status", "show");
            	msliShowPrivilegePanel($sb(this));
            }
            else {
            	msliHidePrivilegePanel($sb(this));
            }
        });
}
with ($back_bar_bstn) {
        click(function () {
        	BackAllPanel($sb(this));
        });
}

/* 設定流程結束 */


/* 所有.scrol_tub物件加上mobile scroll */

var col_num = $sb('.scrol_tub').length;


for(i = 1; i < col_num + 1; i++) {
var s = i - 1;
$sb(".scrol_tub:eq("+s+")").attr('id','scroller' + i);
var items = ['scroller' + i];
var myScroll = ['myScroll' + i];
var myScroll;


function loaded() {
    items.forEach(function(items) {
	    items = new iScroll(items, {
	        onBeforeScrollStart: function (e) {
	            var target = e.target;
	            while (target.nodeType != 1) target = target.parentNode;
	
	            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
	                e.preventDefault();
	        }
	    });
	});
}
loaded();
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
}

/* 所有.scrol_tub物件加上mobile scroll結束 */


$sb(function(){   
    $sb('#i').mobiscroll().datetime({
        /* invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] }, */
        theme: 'android-ics light',
        display: 'bubble',
        mode: 'scroller',
        animate: 'swing',
        dateOrder: 'yy mmD dd',
        dateFormat: 'yy/mm/dd'
    });    

    $sb('#show_i').click(function(){
        $sb('#i').mobiscroll('show'); 
        return false;
    });
    $sb('#clear_i').click(function () {
        $sb('#i').val('');
        return false;
    });
    $sb('#s').mobiscroll().datetime({
        /* invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] }, */
        theme: 'android-ics light',
        display: 'bubble',
        mode: 'scroller',
        animate: 'swing',
        dateOrder: 'yy mmD dd',
        dateFormat: 'yy/mm/dd'
    });    

    $sb('#show_s').click(function(){
        $sb('#s').mobiscroll('show'); 
        return false;
    });
    $sb('#clear_s').click(function () {
        $sb('#s').val('');
        return false;
    });
    $sb('#i2').mobiscroll().datetime({
        /* invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] }, */
        theme: 'android-ics light',
        display: 'bubble',
        mode: 'scroller',
        animate: 'swing',
        dateOrder: 'yy mmD dd',
        dateFormat: 'yy/mm/dd'
    });    

    $sb('#show_i2').click(function(){
        $sb('#i2').mobiscroll('show'); 
        return false;
    });
    $sb('#clear_i2').click(function () {
        $sb('#i2').val('');
        return false;
    });
    $sb('#s2').mobiscroll().datetime({
        /* invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] }, */
        theme: 'android-ics light',
        display: 'bubble',
        mode: 'scroller',
        animate: 'swing',
        dateOrder: 'yy mmD dd',
        dateFormat: 'yy/mm/dd'
    });    

    $sb('#show_s2').click(function(){
        $sb('#s2').mobiscroll('show'); 
        return false;
    });
    $sb('#clear_s2').click(function () {
        $sb('#s2').val('');
        return false;
    });
});

var $left_bul = $sb('#left_bul').offset().top;
console.log('left_bul.top:'+$left_bul);

var nunum = $sb('.item').length;
console.log(nunum);
for(i=1;i<10;i++){
	for(j=1;j<10;j++){
		console.log('.item('+i+'x'+j+')='+i*j);
	}
}

});             

