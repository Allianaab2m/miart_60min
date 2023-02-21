import { format } from "date-fns"

export default class Timer {
  private date: Date
  private formattedDay: string
  private tag: string

  constructor() {
    this.date = new Date()
    this.formattedDay = format(this.date, 'MMdd')
    this.tag = `#深夜の真剣お絵描き60分一本勝負_art_${this.formattedDay}`
  }

  public start() {
    return `
22時になりました!
今から60分間、みなさんの思い思いのイラストを描いて、このタグを付けて投稿してください!
タグが付いたノートは随時RNします!

${this.tag}
    `
  }

  public end() {
    return `
23時になりました!
参加されたみなさんお疲れ様でした!

引き続きイラストの投稿は受け付けていますので、いつでも投稿してください!

${this.tag}
    `
  }
}

