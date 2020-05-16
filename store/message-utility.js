
import { i18n }  from '~/plugins/i18n';

export function createFieldErrorMessage(type, field, args) {
    if (type === "required") {
        const baseMessage = i18n.tc('error.' + type)
        const args = [i18n.tc('placeHolder.' + field)]
        return editMessage(baseMessage, args)
    }

    return ''
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