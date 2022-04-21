/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-types */
import { Response, Request, NextFunction } from 'express';

// eslint-disable-next-line arrow-body-style
export const catchAsync = (callback: Function) => {
	// eslint-disable-next-line func-names
	return function (req: Request, res: Response, next: NextFunction) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		callback(req, res, next).catch(next);
	};
};
