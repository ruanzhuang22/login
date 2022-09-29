import { JsonConvert, JsonConverter, JsonCustomConvert, JsonObject, JsonProperty } from 'json2typescript';

@JsonConverter
export class NumberConverter implements JsonCustomConvert<number> {
  serialize(data: any): number {
    if (Number.isNaN(data)) {
      return data;
    } else {
      return Number(data);
    }
  }
  deserialize(data: any): number {
    if (typeof data === 'undefined' || data === null) {
      return data;
    }
    if (Number.isNaN(data)) {
      return data;
    } else {
      return Number(data);
    }
  }
}
@JsonConverter
export class StringConverter implements JsonCustomConvert<string> {
  serialize(data: any): string {
    if (data) {
      return data.toString();
    } else {
      return data;
    }
  }
  deserialize(data: any): string {
    if (data) {
      return data.toString();
    } else {
      return data;
    }
  }
}
@JsonConverter
export class BooleanConverter implements JsonCustomConvert<boolean> {
  serialize(data: any): boolean {
    if (typeof (data) === 'boolean') {
      return data;
    } else {
      return data;
    }
  }
  deserialize(data: any): boolean {
    if (typeof (data) === 'boolean') {
      return data;
    } else {
      return data;
    }
  }
}
@JsonConverter
export class DateTimeConverter implements JsonCustomConvert<Date> {
  serialize(date: Date): any {
    function pad(number: any) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
    return date.getUTCFullYear() +
      '-' + pad(date.getUTCMonth() + 1) +
      '-' + pad(date.getUTCDate()) +
      'T' + pad(date.getUTCHours()) +
      ':' + pad(date.getUTCMinutes()) +
      ':' + pad(date.getUTCSeconds()) +
      '.' + (date.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
      'Z';
  }
  deserialize(date: any): Date {
    const dReturn = new Date(date);
    if (dReturn.getFullYear() === 1970
      && dReturn.getMonth() === 0
      && dReturn.getDate() === 1) {
      return null;
    } else {
      return dReturn;
    }
  }
}
@JsonConverter
export class TblContactsConverter implements JsonCustomConvert<TblContacts> {
  serialize(data: TblContacts): any {
    const jsonConvert = new JsonConvert();
    return jsonConvert.serialize(data);
  }
  deserialize(data: any): TblContacts {
    const jsonConvert = new JsonConvert();
    return jsonConvert.deserializeObject(data, TblContacts);
  }
}
@JsonObject('TblContacts')
export class TblContacts{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('IdC', NumberConverter, true)
  IdC: number = undefined;
  @JsonProperty('AccountCode', StringConverter, true)
  AccountCode: string = undefined;
  @JsonProperty('StatusCode', StringConverter, true)
  StatusCode: string = undefined;
  @JsonProperty('ReminderStatusCode', StringConverter, true)
  ReminderStatusCode: string = undefined;
  @JsonProperty('SendReminder', BooleanConverter, true)
  SendReminder: boolean = undefined;
  @JsonProperty('LastDateSent', DateTimeConverter, true)
  LastDateSent: Date = undefined;
  @JsonProperty('EntryDate', DateTimeConverter, true)
  EntryDate: Date = undefined;
  @JsonProperty('LastChange', DateTimeConverter, true)
  LastChange: Date = undefined;
  @JsonProperty('Initial', StringConverter, true)
  Initial: string = undefined;
  @JsonProperty('Company', StringConverter, true)
  Company: string = undefined;
  @JsonProperty('Dept', StringConverter, true)
  Dept: string = undefined;
  @JsonProperty('Salutation', StringConverter, true)
  Salutation: string = undefined;
  @JsonProperty('FirstName', StringConverter, true)
  FirstName: string = undefined;
  @JsonProperty('LastName', StringConverter, true)
  LastName: string = undefined;
  @JsonProperty('Title', StringConverter, true)
  Title: string = undefined;
  @JsonProperty('CompanyShortName', StringConverter, true)
  CompanyShortName: string = undefined;
  @JsonProperty('PaymentContact', StringConverter, true)
  PaymentContact: string = undefined;
  @JsonProperty('Address1', StringConverter, true)
  Address1: string = undefined;
  @JsonProperty('Address2', StringConverter, true)
  Address2: string = undefined;
  @JsonProperty('Town', StringConverter, true)
  Town: string = undefined;
  @JsonProperty('Province', StringConverter, true)
  Province: string = undefined;
  @JsonProperty('PostalCode', StringConverter, true)
  PostalCode: string = undefined;
  @JsonProperty('Phone',StringConverter, true)
  Phone: number = undefined;
  @JsonProperty('Cell',NumberConverter, true)
  Cell: number = undefined;
  @JsonProperty('Fax',NumberConverter, true)
  Fax: number = undefined;
  @JsonProperty('Email',StringConverter, true)
  Email: string = undefined;
  @JsonProperty('EMailCc',StringConverter, true)
  EMailCc: string = undefined;
  @JsonProperty('NoEmail',BooleanConverter, true)
  NoEmail: boolean = undefined;
  @JsonProperty('EmailDisplayName',StringConverter, true)
  EmailDisplayName: string = undefined;
  @JsonProperty('Www',StringConverter, true)
  Www: string = undefined;
  @JsonProperty('SendRemittanceVia',StringConverter, true)
  SendRemittanceVia: string = undefined;
  @JsonProperty('SendRemittanceViaResponded',BooleanConverter, true)
  SendRemittanceViaResponded: boolean = undefined;
  @JsonProperty('Lis',StringConverter, true)
  Lis: string = undefined;
  @JsonProperty('LisgroupId',NumberConverter, true)
  LisgroupId: number = undefined;
  @JsonProperty('Category',StringConverter, true)
  Category: string = undefined;
  @JsonProperty('Other',StringConverter, true)
  Other: string = undefined;
  @JsonProperty('LtrOnHand',StringConverter, true)
  LtrOnHand: string = undefined;
  @JsonProperty('Zone',StringConverter, true)
  Zone: string = undefined;
  @JsonProperty('Rmno',StringConverter, true)
  Rmno: string = undefined;
  @JsonProperty('District',StringConverter, true)
  District: string = undefined;
  @JsonProperty('Selected',BooleanConverter, true)
  Selected: boolean = undefined;
  @JsonProperty('AddRelatedSelected',BooleanConverter, true)
  AddRelatedSelected: boolean = undefined;
  @JsonProperty('DuplicateNoted',BooleanConverter, true)
  DuplicateNoted: boolean = undefined;
  @JsonProperty('NysiisfirstName',StringConverter, true)
  NysiisfirstName: string = undefined;
  @JsonProperty('NysiislastName',StringConverter, true)
  NysiislastName: string = undefined;
  @JsonProperty('Nysiiscompany',StringConverter, true)
  Nysiiscompany: string = undefined;
  @JsonProperty('Nysiistown',StringConverter, true)
  Nysiistown: string = undefined;
  @JsonProperty('Nysiisaddress1',StringConverter, true)
  Nysiisaddress1: string = undefined;
  @JsonProperty('SplitId',NumberConverter, true)
  SplitId: number = undefined;
  @JsonProperty('Remitter',BooleanConverter, true)
  Remitter: boolean = undefined;
  @JsonProperty('ForDate',DateTimeConverter, true)
  ForDate: Date = undefined;
  @JsonProperty('ForYear',NumberConverter, true)
  ForYear: number = undefined;
  @JsonProperty('ForMonth',NumberConverter, true)
  ForMonth: number = undefined;
  @JsonProperty('RemittanceDate',DateTimeConverter, true)
  RemittanceDate: Date = undefined;
  @JsonProperty('LocalHeadCount',NumberConverter, true)
  LocalHeadCount: number = undefined;
  @JsonProperty('ExportHeadCount',NumberConverter, true)
  ExportHeadCount: number = undefined;
  @JsonProperty('RemittanceAmount',NumberConverter, true)
  RemittanceAmount: number = undefined;
  @JsonProperty('AmountPaid',NumberConverter, true)
  AmountPaid: number = undefined;
  @JsonProperty('UnPaidBalance',NumberConverter, true)
  UnPaidBalance: number = undefined;
  @JsonProperty('LastRefundRequestDate',DateTimeConverter, true)
  LastRefundRequestDate: Date = undefined;
  @JsonProperty('TotalRefunded',NumberConverter, true)
  TotalRefunded: number = undefined;
  @JsonProperty('Producer',BooleanConverter, true)
  Producer: boolean = undefined;
  @JsonProperty('LoyaltyCard',BooleanConverter, true)
  LoyaltyCard: boolean = undefined;
  @JsonProperty('LoyaltyCardNo',StringConverter, true)
  LoyaltyCardNo: string = undefined;
  @JsonProperty('LoyaltyCardDateIssued', DateTimeConverter, true)
  LoyaltyCardDateIssued: Date = undefined;
  @JsonProperty('RefundCategoryId', NumberConverter, true)
  RefundCategoryId: number = undefined;
  @JsonProperty('ReminderType', StringConverter, true)
  ReminderType: string = undefined;
  @JsonProperty('CategoryOrder', NumberConverter, true)
  CategoryOrder: number = undefined;
  @JsonProperty('AuditNote', StringConverter, true)
  AuditNote: string = undefined;
  @JsonProperty('OldSelected', BooleanConverter, true)
  OldSelected: boolean = undefined;
  @JsonProperty('LoyaltyCardBatchId', NumberConverter, true)
  LoyaltyCardBatchId: number = undefined;
  @JsonProperty('PrevStatusCode', StringConverter, true)
  PrevStatusCode: string = undefined
  @JsonProperty('UpdatedBy', StringConverter, true)
  UpdatedBy: string = undefined
  @JsonProperty('UpdatedDate', DateTimeConverter, true)
  UpdatedDate: Date = undefined
  @JsonProperty('LoyaltyCard2012', StringConverter, true)
  LoyaltyCard2012: string = undefined
  @JsonProperty('PrimaryCategoryId',NumberConverter, true)
  PrimaryCategoryId: number = undefined;
  @JsonProperty('GrassRootsViaEmail',BooleanConverter, true)
  GrassRootsViaEmail: boolean = undefined;
  @JsonProperty('SurveyResponded',BooleanConverter, true)
  SurveyResponded: boolean = undefined;
  @JsonProperty('GrassRootsViaMail',BooleanConverter, true)
  GrassRootsViaMail: boolean = undefined;
  @JsonProperty('EMailStatusId',NumberConverter, true)
  EMailStatusId: number = undefined;
  @JsonProperty('FormSelected',BooleanConverter, true)
  FormSelected: boolean = undefined;
  @JsonProperty('NewEmail',StringConverter, true)
  NewEmail: string = undefined;
  @JsonProperty('Euid',StringConverter, true)
  Euid: string = undefined;
  @JsonProperty('NoRefunds',NumberConverter, true)
  NoRefunds: number = undefined;
  @JsonProperty('NoRemittances',NumberConverter, true)
  NoRemittances: number = undefined;
  @JsonProperty('FirstNameSoundex',StringConverter, true)
  FirstNameSoundex: string = undefined;
  @JsonProperty('LastNameSoundex',StringConverter, true)
  LastNameSoundex: string = undefined;
  @JsonProperty('CompanySoundex',StringConverter, true)
  CompanySoundex: string = undefined;
  @JsonProperty('LastAddress1',StringConverter, true)
  LastAddress1: string = undefined;
  @JsonProperty('LastAddress2',StringConverter, true)
  LastAddress2: string = undefined;
  @JsonProperty('LastTown',StringConverter, true)
  LastTown: string = undefined;
  @JsonProperty('LastPostal',StringConverter, true)
  LastPostal: string = undefined;
  @JsonProperty('LasteMail',StringConverter, true)
  LasteMail: string = undefined;
  @JsonProperty('LastMailout',DateTimeConverter, true)
  LastMailout: Date = undefined;
  @JsonProperty('NewZone',StringConverter, true)
  NewZone: string = undefined;
  @JsonProperty('County',StringConverter, true)
  County: string = undefined;
  @JsonProperty('WorkingStatus',StringConverter, true)
  WorkingStatus: string = undefined;
  @JsonProperty('CountyId',NumberConverter, true)
  CountyId: number = undefined;
  @JsonProperty('DbtimeStamp',StringConverter, true)
  DbtimeStamp: string = undefined;
  @JsonProperty('OperatingCountyId',NumberConverter, true)
  OperatingCountyId: number = undefined;
  @JsonProperty('MailStatusCode',StringConverter, true)
  MailStatusCode: string = undefined;
  @JsonProperty('MailStatusDate',DateTimeConverter, true)
  MailStatusDate: Date = undefined;
  @JsonProperty('NoCopies',BooleanConverter, true)
  NoCopies: boolean = undefined;
  @JsonProperty('Tier',StringConverter, true)
  Tier: string = undefined;
  @JsonProperty('OwnerId',NumberConverter, true)
  OwnerId: number = undefined;
}

@JsonObject('TblCounties')
export class TblCounties{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('County', StringConverter, true)
  County: string = undefined;
  @JsonProperty('OldZone', StringConverter, true)
  OldZone: string = undefined;
  @JsonProperty('NewZone', StringConverter, true)
  NewZone: string = undefined;
  @JsonProperty('CountyFullName', StringConverter, true)
  CountyFullName: string = undefined;
  @JsonProperty('CountyType', StringConverter, true)
  CountyType: string = undefined;
  @JsonProperty('NoEntries', NumberConverter, true)
  NoEntries: number = undefined;
  @JsonProperty('Comments', StringConverter, true)
  Comments: string = undefined;
  @JsonProperty('CountyOriginalName', StringConverter, true)
  CountyOriginalName: string = undefined;
}

@JsonObject('TblRefProvinces')
export class TblRefProvinces{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('ProvinceCode', StringConverter, true)
  ProvinceCode: string = undefined;
  @JsonProperty('ProvinceShortName', StringConverter, true)
  ProvinceShortName: string = undefined;
  @JsonProperty('Province', StringConverter, true)
  Province: string = undefined;
  @JsonProperty('GlaccountCode', StringConverter, true)
  GlaccountCode: string = undefined;
  @JsonProperty('PopulateDefault', BooleanConverter, true)
  PopulateDefault: boolean = undefined;
  @JsonProperty('ProvinceCodeStandard', StringConverter, true)
  ProvinceCodeStandard: string = undefined;
  @JsonProperty('SortOrder', NumberConverter, true)
  SortOrder: number = undefined;
}

@JsonObject('TblRefEmailStatuses')
export class TblRefEmailStatuses{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('EMailStatus', StringConverter, true)
  EMailStatus: string = undefined;
  @JsonProperty('Selected', BooleanConverter, true)
  Selected: boolean = undefined;
  @JsonProperty('Selectable', BooleanConverter, true)
  Selectable: boolean = undefined;
  @JsonProperty('CountEntries', NumberConverter, true)
  CountEntries: number = undefined;
  @JsonProperty('IncludeInMailout', BooleanConverter, true)
  IncludeInMailout: boolean = undefined;
}

@JsonObject('TblRefStatusCodes')
export class TblRefStatusCodes{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('StatusCode', StringConverter, true)
  StatusCode: string = undefined;
  @JsonProperty('Status', StringConverter, true)
  Status: string = undefined;
  @JsonProperty('SortOrder', NumberConverter, true)
  SortOrder: number = undefined;
  @JsonProperty('StatusDescriptoin', StringConverter, true)
  StatusDescriptoin: string = undefined;
  @JsonProperty('StatusId', NumberConverter, true)
  StatusId: number = undefined;
}

@JsonObject('TblContactNotes')
export class TblContactNotes{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('ContactId', NumberConverter, true)
  ContactId: number = undefined;
  @JsonProperty('NoteDate', DateTimeConverter, true)
  NoteDate: Date = undefined;
  @JsonProperty('Note', StringConverter, true)
  Note: string = undefined;
  @JsonProperty('NoteCategory', StringConverter, true)
  NoteCategory: string = undefined;
  @JsonProperty('Ids', NumberConverter, true)
  Ids: number = undefined;
  @JsonProperty('ClientId', NumberConverter, true)
  ClientId: number = undefined;
  @JsonProperty('UpdatedById', NumberConverter, true)
  UpdatedById: number = undefined;
  @JsonProperty('UpdatedDate', DateTimeConverter, true)
  UpdatedDate: Date = undefined;
}

@JsonObject('TblWorkers')
export class TblWorkers{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('UserId', StringConverter, true)
  UserId: string = undefined;
  @JsonProperty('FirstName', StringConverter, true)
  FirstName: string = undefined;
  @JsonProperty('LastName', StringConverter, true)
  LastName: string = undefined;
  @JsonProperty('StatusCode', StringConverter, true)
  StatusCode: string = undefined;
  @JsonProperty('Password', StringConverter, true)
  Password: string = undefined;
  @JsonProperty('DefaultDirectory', StringConverter, true)
  DefaultDirectory: string = undefined;
  @JsonProperty('MyEmailAddress', StringConverter, true)
  MyEmailAddress: string = undefined;
  @JsonProperty('MyFolder', StringConverter, true)
  MyFolder: string = undefined;
  @JsonProperty('CurrentRefundCode', StringConverter, true)
  CurrentRefundCode: string = undefined;
  @JsonProperty('OftFilePath', StringConverter, true)
  OftFilePath: string = undefined;
  @JsonProperty('OftFileName', StringConverter, true)
  OftFileName: string = undefined;
  @JsonProperty('ContactFilterSetting', BooleanConverter, true)
  ContactFilterSetting: boolean = undefined;
  @JsonProperty('LastEmailTemplateUsed', StringConverter, true)
  LastEmailTemplateUsed: string = undefined;
  @JsonProperty('SignatureFileLocation', StringConverter, true)
  SignatureFileLocation: string = undefined;
}

@JsonObject('TblRefNoteCategories')
export class TblRefNoteCategories{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('NoteCategory', StringConverter, true)
  NoteCategory: string = undefined;
  @JsonProperty('StatusCode', StringConverter, true)
  StatusCode: string = undefined;
  @JsonProperty('CategoryDescription', StringConverter, true)
  CategoryDescription: string = undefined;
}

@JsonObject('TblSearchNote')
export class TblSearchNote{
  @JsonProperty('Id', NumberConverter, true)
  Id: number = undefined;
  @JsonProperty('ContactId', NumberConverter, true)
  ContactId: number = undefined;
  @JsonProperty('NoteDate', DateTimeConverter, true)
  NoteDate: Date = undefined;
  @JsonProperty('Note', StringConverter, true)
  Note: string = undefined;
  @JsonProperty('NoteCategory', StringConverter, true)
  NoteCategory: string = undefined;
  @JsonProperty('UpdatedDate', DateTimeConverter, true)
  UpdatedDate: Date = undefined;
  @JsonProperty('FirstName', StringConverter, true)
  FirstName: string = undefined;
  @JsonProperty('LastName', StringConverter, true)
  LastName: string = undefined;
  @JsonProperty('Company', StringConverter, true)
  Company: string = undefined;
  @JsonProperty('EMailStatusId',NumberConverter, true)
  EMailStatusId: number = undefined;
}