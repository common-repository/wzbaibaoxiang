
		<div class="websitebox_box">
			<div class="websitebox_news">
				<ul>
				   <a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>常规设置</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=11&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>WP优化</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=1&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>侧边客服</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=9&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>手机客服</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=3&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>留言板</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=4&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>网站背景</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=5&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>提示框</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=6&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>滚动公告</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=7&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" class="websitebox_adm"><li>图片水印</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=8&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>三合一</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=10&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>鼠标特效</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=13&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>广告</li></a>
				</ul>
			</div>
			<div class="websitebox_centen">
			    <form class="layui-form" action="" lay-filter="example">
				<div class="websitebox_cenh3">
					<span>图片水印设置</span>
					<input type="hidden" name="websitebox" value="10">
				  	 <input type="hidden" name="action" value="websitebox">
				  	 <input type="hidden" name="nonce" value="<?php echo esc_attr(wp_create_nonce('websitebox'));?>">
					 <button type="submit" class="layui-btn websitebox_bot" lay-submit="" lay-filter="demo1">保存设置</button>
				</div>
					<div class="layui-form-item websitebox_bor" pane="">
					   <label class="layui-form-label">启用图片水印</label>
					   <div class="layui-input-block">
					       <?php
					        if(isset($websitebox_shuiyin['auto']) && $websitebox_shuiyin['auto']==1){
					            echo '<input type="checkbox" name="close" lay-skin="switch" lay-filter="switchsy" lay-text="开|关" checked="">';
					        }else{
					            echo '<input type="checkbox" name="close" lay-skin="switch" lay-filter="switchsy" lay-text="开|关">';
					        }
					       ?>
						  <span class="websitebox_zxc">选择是否启用图片水印</span>
					   </div>
					   <p style="color:red;">注意：开启后，只会针对新上传的图片添加水印并不会对历史的图片添加水印</p>
					 </div>
					<div class="websitebox_wystyle">
						 <div class="websitebox_wystyle1">
								<span>水印设置</span>
						 </div> 
						 <div class="layui-form-item">
						     <label class="layui-form-label">水印内容</label>
						     <div class="layui-input-inline">
						       <input type="text" name="title" placeholder="请输入" autocomplete="off" class="layui-input" value="<?php if(isset($websitebox_shuiyin['title']) && $websitebox_shuiyin['title']){echo esc_attr($websitebox_shuiyin['title']);}?>">
						     </div>
						 </div>
						 <div class="layui-form-item">
						     <label class="layui-form-label">字体大小</label>
						     <div class="layui-input-inline">
						       <input type="text" name="size" placeholder="请输入内容 单位默认为px" autocomplete="off" class="layui-input" value="<?php if(isset($websitebox_shuiyin['size']) && $websitebox_shuiyin['size']){echo esc_attr($websitebox_shuiyin['size']);}?>">
						     </div>
						 </div>
						 <div class="websitebox_wystyle">
						     <label class="layui-form-label">字体颜色</label>
						 	  <div class="layui-input-inline" style="width: 120px;">
                                <input type="text" name="word" placeholder="请选择颜色" class="layui-input" id="test-form-input1" value="<?php if(isset($websitebox_shuiyin['word']) && $websitebox_shuiyin['word']){echo esc_attr($websitebox_shuiyin['word']);}?>">
                              </div>
                              <div class="layui-inline" style="left: 10px;">
                                <div id="test1"></div>
                              </div>
						 </div>
						 <div class="websitebox_wystyle">
						 	 <div class="websitebox_wystyle1">
						 			<span>选择水印位置</span>
						 	 </div>
						 	 <div class="websitebox_fodong websitebox_fodong1" pane="">
						 	    <label class="layui-form-label">左上</label>
						 	    <div class="layui-input-block">
						 	      <input type="radio" name="type" value="1" title="" <?php if(isset($websitebox_shuiyin['type']) && $websitebox_shuiyin['type']==1){echo   'checked=""';}?> >
						 		  
						 	    </div>
						 	  </div>
						 	  <div class="websitebox_fodong websitebox_fodong1" pane="">
						 	     <label class="layui-form-label">左下</label>
						 	     <div class="layui-input-block">
						 	       <input type="radio" name="type" value="7" title="" <?php if(isset($websitebox_shuiyin['type']) && $websitebox_shuiyin['type']==7){echo 'checked';}?> >
						 	     </div>
						 	   </div>
						 	   <div class="websitebox_fodong websitebox_fodong1" pane="">
						 	      <label class="layui-form-label">右下</label>
						 	      <div class="layui-input-block">
						 	        <input type="radio" name="type" value="9" title="" <?php if(isset($websitebox_shuiyin['type']) && $websitebox_shuiyin['type']==9){echo 'checked';}?> >
						 	      </div>
						 	    </div>
						 		<div class="websitebox_fodong websitebox_fodong1" pane="">
						 		   <label class="layui-form-label">右上</label>
						 		   <div class="layui-input-block">
						 			 <input type="radio" name="type" value="3" title="" <?php if(isset($websitebox_shuiyin['type']) && $websitebox_shuiyin['type']==3){echo 'checked';}?>>
						 		   </div>
						 		</div>
								<div class="websitebox_fodong websitebox_fodong1" pane="">
								   <label class="layui-form-label">居中</label>
								   <div class="layui-input-block">
									 <input type="radio" name="type" value="5" title="" <?php if(isset($websitebox_shuiyin['type']) && $websitebox_shuiyin['type']==5){echo 'checked';}?>>
								   </div>
								</div>
								<div style="clear: both;"></div>
						 </div>
					
					</div>
				</form>
			</div>
		</div>
		<style>
		*{
			padding: 0;
			margin: 0;
			text-decoration: none;
		}
		.tj_lianjie{
			width:100%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.tj_lianjie1 {
		    margin-bottom: 20px;
		}
		.tj_lianjie1 a{
			display: block;
			width:550px;
			border: 1px solid #ccc;
			box-sizing: border-box;
			padding:10px;
			box-shadow: 6px 4px 10px #ccc;
			border-radius: 4px;
		}
		.tj_lianjie1 a>div{
			width:100%;
			display: flex;
			justify-content: space-between;
		}
		.tj_logo{
			width:120px;
			height:120px;
			margin-right:10px;
		}
		.tj_neirong h2{
			font-size:16px;
			line-height:30px;
			color: #000000;
		}
		.tj_neirong  p{
			font-size:12px;
			color: #000000;
		}
		.tj_neirong  span{
			font-size:14px;
			color: #000000;
		}
		.tj_anzhuang{
			width: 120px;
			height: 24px;
			border: 1px solid #ccc;
			text-align: center;
			line-height: 24px;
			border-radius: 3px;		
	    }
		.layui-btn {
		    background-color: #007DDB;
		}
		.layui-form-onswitch {
		    border-color: #007DDB;
            background-color: #007DDB;
		}
		.layui-form-radio>i:hover, .layui-form-radioed>i {
		    color: #007DDB;
		}
		#wpwrap {
		    background-color: #fff;
		}
		.tj_neirong_jimuzhuti {
		    width: 120px;
		    height: 120px;
		    margin-right: 10px;
		    display: flex;
		    flex-shrink: 0;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		    background-image: linear-gradient(90deg, #5540D9 0%, #ee7fff 100%);
		    position: relative;
		    overflow: hidden;
		}
		.tj_neirong_jimuzhuti span {
		    color: #FFF;
		    font-size: 16px;
		    letter-spacing: 2px;
		    font-weight: 600;
		}
		.tj_neirong_jimuzhuti span + span  {
		    margin-top: 10px;
		}
		.tj_lianjie1_free::before {
		    content: "免费";
		    position: absolute;
		    right: -33px;
		    top: 1px;
		    width: 100px;
		    height: 30px;
		    line-height: 30px;
		    text-align: center;
		    color: #FFF;
		    background-color: #CC0033;
		    transform: rotate(45deg);
		}
	</style>
		<div style="width: 1200px;padding: 10px;">
		  <h2 style="line-height: 40px;font-size: 16px;font-weight: 600;">相关推荐</h2>
		  <div class="tj_lianjie">
		  <div class="tj_lianjie1">
			  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=baiduseo'));?>" target="_blank">
				  <div class="tj_neirong">
					 <img src="<?php echo esc_url(plugins_url('images/icon-256x256.png',__FILE__)); ?>" class="tj_logo">
					   <div>
						   <h2>百度站长SEO合集</h2>
						   <p>含百度站长、百度地图sitemap、关键词排名查询监控、网站蜘蛛、robots、图片alt标签、天级推送、死链查询、百度自动推送、批量提交URL到站长、百度收录查询、批量推送未收录、301/404等功能。</p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
				   
			  </a>
		  </div>
		  <div class="tj_lianjie1">
			  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=auto-reply-wechat'));?>" target="_blank">
				  <div class="tj_neirong">
					 <img src="<?php echo esc_url(plugins_url('images/weixingzh.jpg',__FILE__)); ?>" class="tj_logo">  
					   <div>
						   <h2>公众号自动回复</h2>
						   <p>本插件适用于订阅号（未认证也可以）、服务号。根据关键词自动获取网站相关文章：用户通过公众号发送关键词，公众号即可根据用户的关键词读取wordpress网站内相关的内容，推送URL回复用户。</p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
			  </a>
		  </div>
		  <div class="tj_lianjie1">
			  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=nleilian-guanjc'));?>" target="_blank">
				  <div class="tj_neirong">
					   <img src="<?php echo esc_url(plugins_url('images/tagneilian.png',__FILE__)); ?>" class="tj_logo"> 
					   <div>
						   <h2>内链tag标签</h2>
						   <p>
						       输入需要匹配所有文章的关键词，添加后，该关键词会将所有wordpress的网站文章关键词加超链，内链。（如果设置URL，则所有文章下的该关键词添加超链（内链）到指定地址。）
						   </p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
			  </a>
		  </div>
		  <div class="tj_lianjie1">
			  <a href="https://www.rbzzz.com/qxcp.html" target="_blank">
				  <div class="tj_neirong">
					   <div class="tj_neirong_jimuzhuti tj_lianjie1_free"><span>积木</span><span>主题</span></div>
					   <div>
						   <h2>积木主题</h2>
						   <p>一款基于wordpress的模块化主题，根据您的喜好来配置网站，他可以是企业官网、博客、商城等多元素化的主题，并且基于SEO严格根据搜索引擎对HTML的标准开发。</p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
			  </a>
		  </div>
	  </div>
		</div> 
	</body>
	<script>
	jQuery(document).ready(function($){
	    if($("input[name='close']").attr("checked") == "checked") {
             $("input[name='title']").attr("lay-verify","required")
             $("input[name='size']").attr("lay-verify","required")
        }
		layui.use(['form', 'layedit', 'laydate','colorpicker'], function(){
		  var form = layui.form
		  ,layer = layui.layer
            colorpicker = layui.colorpicker;
		  //常规使用
		   colorpicker.render({
                elem: '#test1'
            ,color: '<?php  
                        if(isset($websitebox_shuiyin['word']) && $websitebox_shuiyin['word']){
                        echo esc_attr($websitebox_shuiyin['word']);
                        }else{
                        echo '#fff';
                        } ?>'
            ,done: function(color){
              $('#test-form-input1').val(color);
            }
        });
        //监听指定开关
        form.on('switch(switchsy)', function(data){
            if(this.checked) {
                $("input[name='title']").attr("lay-verify","required")
                $("input[name='size']").attr("lay-verify","required")
            }else {
                $("input[name='title']").removeAttr("lay-verify")
                $("input[name='size']").removeAttr("lay-verify")
            }
        });
		   form.on('submit(demo1)', function(data){
		       var index = layer.load(1, {
                    shade: [0.7,'#111'] //0.1透明度的白色背景
                });
    		  	$.ajax({
    		  		url:'',
    		  		data:{data:JSON.stringify(data.field)},
    		  		type:'post',
    		  		dataType:'json',
    		  		success:function(data){
    		  		    layer.close(index);
    		  			if(data.msg==3){
    		  				layer.confirm('该功能,点击‘确定’后登录官网进行授权', {
    						  btn: ['确定','取消'] //按钮
    						}, function(){
    						  window.location.href='https://www.rbzzz.com/qxcp.html';
    						}, function(){
    					  
    						});
    		  			}else if(data.msg==1){
    		  				layer.alert('保存成功');
    		  			}else{
    		  				layer.msg('保存失败，请刷新后重试');
    		  			}
    		  		}
    		  	})
    		    return false;
    		});
		});
	})
	</script>
</html>

