
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
export class Epub {
  metadata: Metadata;
  version: string;

  constructor(data: Metadata) {
    this.metadata = new Metadata(data)
    this.version = "3.0"
  }

  test() {
    console.log('test title:. ', this.metadata.title)
  }
}

