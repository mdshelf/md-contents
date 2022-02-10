import { Epub } from './epub/epub'

const metadata = {
  title: "custome title"
}
console.log('Hello')

const ep = new Epub(metadata)
ep.test()
