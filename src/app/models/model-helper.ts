import { TblContacts, TblRefProvinces, TblCounties, TblRefEmailStatuses, TblRefStatusCodes, TblContactNotes, TblWorkers, TblRefNoteCategories, TblSearchNote } from "./db.model";

export class ModelHelper{
    public static getClass(entitySet: string): any{
        if(entitySet === 'TblContacts'){
            return TblContacts;
        }
        if(entitySet === 'TblRefProvinces'){
            return TblRefProvinces;
        }
        if(entitySet === 'TblCounties'){
            return TblCounties;
        }
        if(entitySet === 'TblRefEmailStatuses'){
            return TblRefEmailStatuses;
        }
        if(entitySet === 'TblRefStatusCodes'){
            return TblRefStatusCodes;
        }
        if(entitySet === 'TblContactNotes'){
            return TblContactNotes;
        }
        if(entitySet === 'TblWorkers'){
            return TblWorkers;
        }
        if(entitySet === 'TblRefNoteCategories'){
            return TblRefNoteCategories;
        }
        if(entitySet === 'TblSearchNote'){
            return TblSearchNote;
        }
    }
}
