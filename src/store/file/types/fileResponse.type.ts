import {FileType} from '../../../types/file.type'

export type FileResponse = {
  files: {
    files: FileType[]
    meta: {
      page: number
      count: number
      lastPage: number
    }
  }
}
