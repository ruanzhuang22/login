import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { cleanSession } from 'selenium-webdriver/safari';
import { map } from 'rxjs/operators';

export namespace Constants{
    export class Configure {
        // tslint:disable-next-line:max-line-length
        static readonly INPUT_FILTER_MASK = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', 'đ', 'ế', 'n', ' ', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
        static readonly SPECIAL_CHARACTERS_REGEX = /["~!#$%^&*\(\)+=`{}\[\]\|\\:;'<>\/?"]+/g;
    }

    export const NoteCategory = [
        {value: '# Not in Use', title: '# Not in Use'},
        {value: '2021 Incentive', title: '2021 Incentive'},
        {value: 'Confirmed Info', title: 'Confirmed Info'},
        {value: 'County Discrepancy', title: 'County Discrepancy'},
        {value: 'County, Etc, Confirmed', title: 'County, Etc, Confirmed'},
        {value: 'Deceased', title: 'Deceased'},
        {value: 'Dup', title: 'Dup'},
        {value: 'Dup OK', title: 'Dup OK'},
        {value: 'Election 2020', title: 'Election 2020'},
        {value: 'Grass Roots Survey', title: 'Grass Roots Survey'},
        {value: 'Info confirmed May 2020 email', title: 'Info confirmed May 2020 email'},
        {value: 'Katelyn Media List', title: 'Katelyn Media List'},
        {value: 'Left Message', title: 'Left Message'},
        {value: 'Mail Chimp Active', title: 'Mail Chimp Active'},
        {value: 'Marketing Imported', title: 'Marketing Imported'},
        {value: 'No #', title: 'No #'},
        {value: 'No 411', title: 'No 411'},
        {value: 'No Ans Mach', title: 'No Ans Mach'},
        {value: 'no pcl', title: 'no pcl'},
        {value: 'Phoned to Confirm Info', title: 'Phoned to Confirm Info'},
        {value: 'PostGrid Mail Correction', title: 'PostGrid Mail Correction'},
        {value: 'PostGrid Mail Varified but Returned', title: 'PostGrid Mail Varified but Returned'},
        {value: 'Retired', title: 'Retired'},
        {value: 'Return Mail', title: 'Return Mail'},
        {value: 'Returned Mail', title: 'Returned Mail'},
        {value: 'send PCL', title: 'send PCL'},
        {value: 'Send PLC', title: 'Send PLC'},
        {value: 'Set To', title: 'Set To'},
        {value: 'Set To Active', title: 'Set To Active'},
        {value: 'Set To ALL', title: 'Set To ALL'},
        {value: 'Set To Deleted', title: 'Set To Deleted'},
        {value: 'Set To No 411', title: 'Set To No 411'},
        {value: 'Set To Review', title: 'Set To Review'},
        {value: 'Town Hall Attendee', title: 'Town Hall Attendee'},
        {value: 'Updated', title: 'Updated'},
        {value: 'Test', title: 'Test'},
        {value: 'Nhan 123', title: 'Nhan 123'},
        {value: 'Meo', title: 'Meo'},
        {value: 'Thursday', title: 'Thursday'},
        {value: 'Haizzz', title: 'Haizzz'},
        {value: 'test category', title: 'test category'},
        {value: 'Wednesday', title: 'Wednesday'},
        {value: 'Tuesday', title: 'Tuesday'},
        {value: 'Hieu category', title: 'Hieu category'},
        {value: 'Nhan category', title: 'Nhan category'},
        {value: 'Monday', title: 'Monday'},
        {value: 'Test1', title: 'Test1'},
        {value: 'nhan newwww', title: 'nhan newwww'}
    ] 

    export const Status = [
        {value: 'ALL', title: 'ALL'},
        {value: 'Active', title: 'Active'},
        {value: 'Closed', title: 'Closed'},
        {value: 'Deleted', title: 'Deleted'},
        {value: 'Review', title: 'Review'}
    ]

    export const UserName = [
        {value: 'ABP', title: 'ABP'},
        {value: 'laurap', title: 'laurap'},
        {value: 'Marietta', title: 'Marietta'},
        {value: 'Rosanne', title: 'Rosanne'},
        {value: 'AccountingAssistant', title: 'AccountingAssistant'},
        {value: 'Simone', title: 'Simone'},
        {value: 'Account', title: 'Account'},
        {value: 'Reception', title: 'Reception'},
        {value: 'Marketing', title: 'Marketing'},
        {value: 'steve', title: 'steve'},
        {value: 'LindsayW', title: 'LindsayW'},
        {value: 'Megan', title: 'Megan'},
        {value: 'Debra', title: 'Debra'},
        {value: 'Katelyn', title: 'Katelyn'},
        {value: 'Kathy', title: 'Kathy'},
        {value: 'TrishL', title: 'TrishL'},
        {value: 'Tripts', title: 'Tripts'},
        {value: 'PaolinaN', title: 'PaolinaN'},
        {value: 'hieu.dao@sea-solutions.com', title: 'hieu.dao@sea-solutions.com'},
        {value: 'trungg.hieuu2605@gmail.com', title: 'trungg.hieuu2605@gmail.com'},
        {value: 'comet.conexus.01@gmail.com', title: 'comet.conexus.01@gmail.com'},
        {value: 'nhan.dao@sea-solutions.com', title: 'nhan.dao@sea-solutions.com'}
    ]

    export class DateTime {
        static readonly DATE_FORMAT = 'dd/MM/yyyy';
        static readonly SECOND_DATE_FORMAT = 'yyyy-mm-dd';
        static readonly DATETIME_FORMAT = 'dd/MM/yyyy H:mm';
    }
}