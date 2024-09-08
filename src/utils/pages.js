export const getPageCount = (totalPages, limit) => {
    return Math.ceil(totalPages / limit)
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i+1)
    }
    return result;
}