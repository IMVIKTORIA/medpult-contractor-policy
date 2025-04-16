import {
  ItemData,
  ItemDataString,
} from "../../UIKit/CustomList/CustomListTypes";

export class PolicyListData {
  /** ФИО застрахованного */
  policy?: ItemData;
  /** Дата рождения */
  termPolicy?: ItemDataString;
  /** Телефон */
  productPolicy?: ItemData;
  files?: [];

  constructor({ policy, termPolicy, productPolicy }: PolicyListData) {
    this.policy = policy;
    this.termPolicy = termPolicy;
    this.productPolicy = productPolicy;
  }
}
