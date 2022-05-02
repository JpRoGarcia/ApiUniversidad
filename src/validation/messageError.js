const errorFormato = (e) => {
    const allErrors = (e.substring(e.indexOf(':') + 1).trim()).split(',').map(err => err.trim())
    return allErrors
}

module.exports = errorFormato