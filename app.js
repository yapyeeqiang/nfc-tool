// check if NFC is supported by the browser
console.log('asd')
if ('NDEFReader' in window) {
    console.log('asd')
    const reader = new NDEFReader()

    // handle NFC reading
    reader.addEventListener('reading', (event) => {
        const tagMessage = event.message.records[0].data
        const tagMessageString = new TextDecoder().decode(tagMessage)
        document.querySelector('.tag-message').innerHTML = `<p>${tagMessageString}</p>`
        document.querySelector('.tag-message').style.display = 'block'
        document.querySelector('#scan-prompt').style.display = 'none'
    })

    // handle NFC errors
    reader.addEventListener('error', (event) => {
        document.querySelector('#nfc-error').innerHTML = `Error: ${event.message}`
    })

    // start listening for NFC scans
    reader.scan()
} else {
    document.querySelector('#nfc-error').innerHTML = 'NFC is not supported by this device/browser.'
}
