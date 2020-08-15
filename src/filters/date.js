import {fillzero} from './fillzero.js'
export const date = time =>{
	let d = new Date();
	d.setTime(time);
	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let date = d.getDate();
	let hour = d.getHours();
	let minute = d.getMinutes();
	let second = d.getSeconds();
	return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(minute)}:${fillzero(second)}`
}