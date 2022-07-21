export const showSizeFile = (size) => {
    if(size >= 1000 && size <= 999999){
        return `${Math.round(size/1000)} KB`
    } else if(size >= 1000000 && size <= 999999999){
        return `${Math.round(size/1000000)} MB`
    } else if(size >= 1000000000) {
        return `${Math.round(size/1000000000)} GB`
    } else{
        return `${size} bytes`
    }
}