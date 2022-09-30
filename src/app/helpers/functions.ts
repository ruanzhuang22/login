export function isDefined(value: any): boolean {
    return value !== undefined && value !== null;
}

export function isNgbDatepickerValue(model): boolean {
    if (isDefined(model)) {
        if (model.year && model.year >= 1700 && model.month && model.day) {
            return true;
        }
    }
    return false;
}