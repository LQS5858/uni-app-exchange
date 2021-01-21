export default {
    'bt-loading': {
        inserted (el, data) {
            const elPos = getComputedStyle(el)?.position
            if (elPos === 'static') el.style.position = 'relative'
            const list = el?.classList
            console.log('>>指令', list);
            const _list = Array.from(list).join('')
            const regx = /cu-load load-cuIcon/gi
            if (!regx.test(_list)) {
                list.add('cu-load')
                list.add('load-cuIcon')
            }
        },
        update (el, data) {
            const regxLoaing = /loading/gi
            const list = el?.classList
            const { value } = data || {}
            const _list = Array.from(list).join('')
            if (value) {
                if (!regxLoaing.test(_list)) {
                    list.add('loading')
                }
            } else {
                if (regxLoaing.test(_list)) {
                    list.remove('loading')
                }
            }
        }
    }
}