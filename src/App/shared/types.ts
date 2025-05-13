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
  /** Файлы */
  files?: FilesData[];

  constructor({ policy, termPolicy, productPolicy }: PolicyListData) {
    this.policy = policy;
    this.termPolicy = termPolicy;
    this.productPolicy = productPolicy;
  }
}

/** Данные вложений */
export class FilesData {
	/** Идентификатор файла */
	id: string;
	/** Ссылка на скачивание файла */
	fileDownloadURL: string
	/** Дата файла */
	dateFiles: ItemDataString
	/** Название файла */
	nameFiles: ItemDataString
	/** Тип */
	documenType: ItemDataString

	constructor() {
		this.dateFiles = new ItemDataString('')
		this.nameFiles = new ItemDataString('')
		this.documenType = new ItemDataString('')
	}
}
