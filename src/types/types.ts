export interface BookType {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfoType
    saleInfo: SaleInfoType
    accessInfo: AccessInfoType
    searchInfo: SearchInfoType
}

export interface VolumeInfoType {
    subtitle: string;
    publisher: string;
    title: string
    publishedDate: string
    description: string
    readingModes: ReadingModesType
    pageCount: number
    printType: string
    averageRating: number
    ratingsCount: number
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    imageLinks: ImageLinksType
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface ReadingModesType {
    text: boolean
    image: boolean
}

export interface ImageLinksType {
    smallThumbnail: string
    thumbnail: string
}

export interface SaleInfoType {
    country: string
    saleability: string
    isEbook: boolean
}

export interface AccessInfoType {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: EpubType
    pdf: PdfType
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}

export interface EpubType {
    isAvailable: boolean
}

export interface PdfType {
    isAvailable: boolean
}

export interface SearchInfoType {
    description: string;
    textSnippet: string
}
