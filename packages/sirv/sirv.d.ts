declare namespace sirv {
	import type { Stats } from 'fs';
	import type { IncomingMessage, ServerResponse } from 'http';

	type Arrayable<T> = T | T[];
	export type NextHandler = VoidFunction | Promise<void>;
	export type RequestHandler = (req: IncomingMessage, res: ServerResponse, next?: NextHandler) => void;

	export interface Options {
		dev?: boolean;
		etag?: boolean;
		maxAge?: number;
		immutable?: boolean;
		single?: string | boolean;
		ignores?: false | Arrayable<string | RegExp>;
		extensions?: string[];
		dotfiles?: boolean;
		brotli?: boolean;
		gzip?: boolean;
		onNoMatch?: (req: IncomingMessage, res: ServerResponse) => void;
		setHeaders?: (res: ServerResponse, pathname: string, stats: Stats) => void;
	}

	function sirv(dir?: string, opts?: Options): RequestHandler;
}

export default sirv.sirv;
