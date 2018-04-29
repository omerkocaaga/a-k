class Result {
    constructor(OldValue, NewValue, Rank) {
        this.OldValue = OldValue
        this.NewValue = NewValue
        this.Rank = Rank
    }
}

const WordChecker = function (oldValue) {
    let
        lowerCaseValue = newValue = oldValue.toLowerCase(),
        arr = []

    while ((arr = regEx.exec(lowerCaseValue)) !== null) {
        newValue = newValue.replace(arr[0], item => {
            return item.replace(/./g, '*')
        })
    }

    let
        rank = newValue.split("").reduce((ar, item) => {
            item === '*' && ar.push(item)
            return ar
        }, []).length

   
   return new Result(oldValue, newValue, rank)
}