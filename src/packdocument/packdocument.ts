
import fs from 'fs'
import archiver from 'archiver'

interface MetadataObject {
  title: string
}

/**
 * metadata
 */
export class Metadata {
  title: string;

  constructor(data: MetadataObject) {
    this.title = data.title
  }
}

/**
 * Equals the package element in Epub 3.2.
 */
export class Packdocument {
  metadata: Metadata;
  version: string;

  constructor(data: Metadata) {
    this.metadata = new Metadata(data)
    this.version = "3.0"
  }

  saveAsEpub() {
    let archive = archiver("zip", { zlib: { level: 9 } })
    let output = fs.createWriteStream('/mnt/d/Henry/md-contents/oo.zip');
    archive.pipe(output)
    //  if (self.options.verbose) {
    //    console.log("Zipping temp dir to", self.options.output);
    //  }

    // mimetype
    archive.append("application/epub+zip", {
      store: true,
      name: "mimetype"
    })

    archive.directory('/mnt/d/Henry/md-contents/src', 'pdir')

    archive.finalize()
  }

  test() {
    console.log('test title:. ', this.metadata.title)
  }
}
