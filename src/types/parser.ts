export interface ParsedImage {
  url: string;
  width: number;
  height: number;
  format?: string;
}

export interface ParserSuccessResponse {
  success: true;
  image_count: number;
  images: ParsedImage[];
}

export interface ParserErrorResponse {
  success: false;
  message: string;
}

export type ParserResponse = ParserSuccessResponse | ParserErrorResponse;
