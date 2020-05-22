
import { i18n }  from '~/plugins/i18n';

export function createFieldErrorMessage(type, field, args) {
    if (type === "required" || type ==="email") {
        const baseMessage = i18n.tc('error.' + type)
        const placeHolders = [i18n.tc('placeHolder.' + field)]
        return editMessage(baseMessage, placeHolders)
    } else if (type ==="min" || type === "max" || type === "excludesall") {
        const baseMessage = i18n.tc('error.' + type)
        const placeHolders = [
            i18n.tc('placeHolder.' + field),
            args,
        ]
        return editMessage(baseMessage, placeHolders)
    }

    return ''
}

export function createErrorMessage(type, arg) {
    const baseMessage = i18n.tc('error.' + type)
    return baseMessage
}


export function editMessage(baseMessage, args) {
    if (isNotParam(baseMessage)) {
        return ''
    }

    if (isNotParam(args) || args.length === 0) {
        return baseMessage
    }

    let message = baseMessage
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
        message = message.replace('[' + i + ']', args[i])
    }

    return message
}

function isNotParam(value) {
    if (value == null  || value === '') {
        return true
    }
    return false
}