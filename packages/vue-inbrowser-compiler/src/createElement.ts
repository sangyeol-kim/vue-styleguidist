export default (
	h: (comp: object | string, attr: { [key: string]: any }, children: any[]) => any[] | any
) => {
	return (comp: object | string, attr: { [key: string]: any }, children: any[]): any[] | any => {
		return h(comp, groupAttr(attr), children)
	}
}

const rootAttributes = [
	'staticClass',
	'class',
	'style',
	'key',
	'ref',
	'refInFor',
	'slot',
	'scopedSlots',
	'model'
]

const onRE = /on([A-Z][a-zA-Z]+)/

const groupAttr = (attrs: { [key: string]: any }): { [key: string]: any } => {
	const attributes: { [key: string]: any } = {}
	Object.keys(attrs).forEach(name => {
		const value = attrs[name]
		if (rootAttributes.includes(name)) {
			attributes[name] = value
		} else if (onRE.test(name)) {
			if (!attributes.on) {
				attributes.on = {}
			}
			const foundName = onRE.exec(name)
			if (foundName) {
				attributes.on[foundName[1]] = value
			}
		}
	})
	return attributes
}
