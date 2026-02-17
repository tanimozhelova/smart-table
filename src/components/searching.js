import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    const searchRule = rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false);
    const compare = createComparison(null, [searchRule], { skipEmptyTargetValues: true });

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        const searchValue = state[searchField] || '';
        const comparator = compare(searchValue);
        const filteredData = data.filter(item => comparator(item));
        return filteredData;
    }
}