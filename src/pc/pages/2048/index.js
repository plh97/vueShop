var o = {};
var val = '';

Object.defineProperty(o, 'a', {
	get(e){
		console.log('正在获取o.a')
		return val
	},
	set(e) {
		val = e
		console.log('changing...to',e);
	},
});
o.a = 'nima'

console.log(o.a);