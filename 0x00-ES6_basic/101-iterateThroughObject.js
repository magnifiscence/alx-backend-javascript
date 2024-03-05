export default function iterateThroughObject(reportWithIterator) {
    let result = '';
    let iterator = reportWithIterator.next();

    while (!iterator.done) {
        result += iterator.value.join(' | ');
        iterator = reportWithIterator.next();
        if (!iterator.done) {
            result += ' | ';
        }
    }

    return result;
}

