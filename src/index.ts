import archiver from 'archiver'
import { Packdocument } from './packdocument/packdocument'

const metadata = {
  title: "custome title OKOK2w"
}
console.log('Hello')

const ep = new Packdocument(metadata)
ep.test()
ep.saveAsEpub()
