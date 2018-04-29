window.onload = function() {
    // Select elements
    const 
        textarea = document.querySelector('textarea'),
        small = document.querySelector('small')
        indicator = document.querySelector('strong i')
        rank = document.querySelector('article h2')

        // Focus textarea
        textarea.focus()

        // Set option count
        textarea.maxLength = options.maxSpeechCount
        small.innerHTML = options.maxSpeechCount

    textarea.onkeyup = event => {
        let 
            value = event.target.value,
            valueCount = value.length,
            remainingCount = options.maxSpeechCount - valueCount,
            result = WordChecker(value)

            // Set remaining count
            small.innerHTML = remainingCount

            //indicator
            indicator.style.width = (100 / options.maxSpeechCount * result.Rank) + '%'
            rank.innerHTML = result.Rank > 0 ? result.Rank + '%' : ''

            console.log(result.NewValue)
    }

    // Calculate speech rank
    textarea.onkeypress = event => {
        if(event.keyCode === 13) {

            /// Check
            //console.log(event.target.value)
            return false
        }
    }
}