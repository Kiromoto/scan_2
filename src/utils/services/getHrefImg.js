export function getHrefImg(data) {
	let source = data
	let start = 0
	if (data) {
		start = data.lastIndexOf('src="')
		if (start === -1) {
			return ''
		} else {
			source = data.slice(start + 5, source.length)
			let end = source.indexOf('"')
			source = source.slice(0, end)
		}
	}
	
	return source
}



// src="https://storage.scan-interfax.ru/images/1%3A0Ixl0ItvLNCi0pFhE9GXdcK2LyjQiNGJEsKs0ZEHFTgh0YBQW9Cm0Yhb0JEQ4oCi0LjQhUxJWtGcXmHCrdCyRdGYUn544oCgwq3QqdCm0LxG0IJvctCq0JLQp1jRlA3QkNCF0IbRgEPihKIv0ZPQj9Cf0LoEduKAotCd0LXRh34%3D" alt=""&gt;&lt;br&gt;
// 	&lt;span&gt;
// 	&lt;span&gt;
// 	&lt;svg width="40" height="40"&gt;
// 	&lt;use xlink:href="#zoom"&gt;&lt;/use&gt;
// 	&lt;/svg&gt;
// 	&lt;/span&gt;
// 	&lt;/span&gt;
//
//
// 	&lt;/div&gt;
// 	&lt;div&gt;&lt;i&gt; &lt;/i&gt;&lt;/div&gt;
// 	&lt;/div&gt;
//
//
//
//
// 	&lt;/div&gt;
//
//
// 	&lt;div&gt;
//
// 	&lt;/div&gt;
//
// 	&lt;/div&gt;&lt;/body&gt;
// &lt;/data&gt;
//
// </entity></sentence></scandoc>