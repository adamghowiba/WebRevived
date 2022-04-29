import { Project } from '@prisma/client';
import { Request } from 'express';
import { BodyRequest, QueryRequest } from './request';

export interface ProjectGetAll {
	account_id?: number;
	limit?: number;
	page?: number;
}

type ProjectPostMembers = { contact_ids: number[]; user_ids: number[] };
export type ProjectCreate = PartialExclude<Project, 'name' | 'type'> & ProjectPostMembers;
export type ProjectPostRequest = BodyRequest<ProjectCreate>;

export type ProjectGetRequest = QueryRequest<ProjectGetAll>;
