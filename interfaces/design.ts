export interface Design {
    _id?: string
    header: IHeader
    pages: IPage[]
    productPage: IProductPage
    categoryPage: ICategoryPage[]
    popup: IPopupWeb
}

export interface IHeader {
    topStrip: string
}

export interface IPage {
    _id?: string
    page: string
    slug: string
    header: boolean
    button?: boolean
    metaTitle?: string
    metaDescription?: string
    image?: string
    design: IDesign[]
}

export interface IProductPage {
    title: string
    text: string
    reviews: boolean
    design: IDesign[]
}

export interface ICategoryPage {
    design: IDesign[]
}

export interface IPopupWeb {
    active: boolean
    wait: number
    title: string
    description?: string
    content?: string
}

export interface IDesign {
    content: string
    info: IInfo
    meetings?: string[]
    meeting?: string
    form?: string
    service?: { service: string, plan?: string }
}

export interface IInfo {
    title?: string
    subTitle?: string
    description?: string
    image?: string
    titleForm?: string
    button?: string
    buttonLink?: string
    subTitle2?: string
    description2?: string
    button2?: string
    buttonLink2?: string
    subTitle3?: string
    description3?: string
    button3?: string
    buttonLink3?: string
    descriptionView?: boolean
    products?: string
    banner?: IBanner[]
    video?: string
    typeBackground?: string
    background?: string
    textColor?: string
}

export interface IBanner {
    title?: string
    description?: string
    button?: string
    buttonLink?: string
    image?: string
}