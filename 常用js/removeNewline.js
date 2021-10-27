export function removeNewline_one(text) {
	//对文本进行换行符的处理
	let reg = /\r\n|\r|\n|\n\r/g
	let txtaArr = text.split(reg)
	let newtxtaArr = txtaArr.filter((item) => {
		return item !== ''
	})
	// console.log('newtxtaArr', newtxtaArr)
	let txt = newtxtaArr.join('\n')
	return txt
}

export function removeNewline_two(text) {
	//对文本进行换行符的处理
	let reg = /\r\n|\r|\n|\n\r/g
	let txtaArr = text.split(reg)
	let newtxtaArr = txtaArr.filter((item) => {
		return item !== ''
	})
	// console.log('newtxtaArr', newtxtaArr)
	let txt = newtxtaArr.join('\n')
	return txt.trim()
}
