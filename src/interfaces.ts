import ts from 'typescript'

interface FileTypeCheckResult {
  correctCount: number
  totalCount: number
  anys: AnyInfo[]
}

export interface AnyInfo {
  file: string
  line: number
  character: number
  text: string
}

export interface FileContext {
  file: string
  sourceFile: ts.SourceFile
  typeCheckResult: FileTypeCheckResult
  debug: boolean
  detail: boolean
  strict: boolean
  checker: ts.TypeChecker
  ingoreMap: { [file: string]: Set<number> }
}

interface TypeCheckCache extends FileTypeCheckResult {
  file: string
  hash: string
}

export interface TypeCheckResult {
  cache: TypeCheckCache[]
}

export interface SourceFileInfo {
  file: string
  sourceFile: ts.SourceFile
  hash: string
  cache?: TypeCheckCache
}