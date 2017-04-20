## 弹出层插件使用

所有的弹出层插件js都放在main模块下script/business文件夹下面

例: 供应商弹出层

1. 在页面中定义一个结构用于显示弹出层内容

		<div id="chooseSupplier" class="pop-side pop-tb"></div>
	
2. 在js中引入插件
	
		var selectSupplier = require('business/select_com.js');

3. 在js中使用插件

		new SelectSupplier({
			// 弹出层的最外层元素（就是第一步中页面中定义的div）
			// 默认值：供应商弹出层的默认值是chooseSupplier，其他弹出层可参见具体的插件设置
			
			el: '#chooseSupplier',
			
			// 弹出层数据的选择方式
			// none：不可选择（暂时没有用处），single：单选，multi：多选，multiD：多选可重复
			// 默认值：目前只有从请购单导入和从采购计划导入是multi，其他都是multiD 

			checkType: 'multiD',

			// 已选中的数据
			// 可以是数组，也可以是function，建议使用function，function每次都会执行，可更新选择的数据
			// 默认值：空数组，也就是没有值
			// 使用场景：只有checkType为multi才需要设置该属性

            selectedIds: function() {
				return $.map($('input[name="sourceSuppId"]'), function(n) {
					return $(n).val() != '' ? $(n).val() : null;
				});
			},

			// 弹出层获取数据相关参数设置
			// 默认值：见各插件的具体设置

            target: {
				// 触发弹出层的元素
				obj: '.select_supplier',
				// 获取数据请求的url
				url: '/oss/pop/supplier/0',
				// 请求类型，默认值为GET
				type: 'GET',
				// 请求的参数
				// 参数可以是对象也可以是function，一般如果不确定的话，使用function比较保险
				// 默认值：空对象
				params: {}
			},

			// 指定弹出层中的用于绑定事件的元素			
			
			domObj: {
				// 全选按钮
				selectAll: '#selectAll',
				// 全部撤回按钮
				recallAll: '#recallAll',
				// 选择链接
				select: '.js-select',
				// 撤回链接
				recall: '.js-recall',
				// 搜索按钮
				search: '#supplierSearch',
				// 关闭弹出层按钮
				close: '.icon-close,.pop-tb-switch'
			},

			// 弹层事件定义

			callback: {
				// 弹出层弹出之前的预处理，权限判断之类的
				// 请参照例子进行编码
				beforeLoad: function() {
					var dtd = $.Deferred();
					$.post('/oss/request/checkSelect.json', '', function(data) {
						if(data == 'yes') {
							dtd.resolve();
						}
						else {
							$('#alertLayer').popAlert({
								'text': '您没有请购单的处理权限，请联系管理员设置'
							});
							dtd.reject();
						}
					});
					return dtd.promise();
				},

				// 弹出层弹出之后的初始化处理
				// 可以接受函数数组，也可以接受函数，使用函数的时候会屏蔽掉默认的初始化设置
				// onClose,onSearch和onLoad相同
				onLoad: [],

				// 选择事件处理，接受函数数组
				// options：就是el，checkType等配置参数
				// thisObj：当前选择的元素，被点击的选择链接
				// targetObj：传递的是触发弹出层的元素，一般是在一个input框接受多个选项的时候用到的
				// onSelectAll,onRecallAll,onRecall和onSelect相同
				onSelect: [function(options, thisObj, targetObj) {
				}]
			}
		});

