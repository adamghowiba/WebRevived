import { Form } from '@prisma/client';
import { Request } from 'express';


type FormPostBody = Pick<Form, 'name'> & { contactIds: number[] };

export type FormPostRequest = Request<{ websiteId: string }, any, FormPostBody>;
