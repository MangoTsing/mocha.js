var chai=require('chai');
var expect=chai.expect;
//describe方法用来测试嵌套内容，it方法描述单独一个测试用例
describe('some simple tests',function(){
	it('test equal',function(){
		expect(4+5).to.equal(9);
	//测试成功
	})
	it('test not equal',function(){
		expect(4+5).to.not.equal(10);
	})
	//测试不等
	it('test to be true ',function(){
		expect(true).to.be.true;
	})
	it('test obj equal',function(){
		expect({'name':'mango'}).to.not.equal({'name':'mango'});
		//上面对象比较默认是===
		expect({'name':'mango'}).to.deep.equal({'name':'mango'});
		//使用deep不是比较引用，是比较是否一一相等
	})
})