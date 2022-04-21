import { Project } from '@prisma/client';
import { ProjectGetAll, ProjectCreate } from '@type/project-api';
import { ValidateScehma } from '@type/validation';
import Joi from 'joi';

const createProject: ValidateScehma = {
	body: Joi.object<ProjectCreate>().keys({
		name: Joi.string().required(),
		type: Joi.string(),
		description: Joi.string().optional(),
		account_id: Joi.number(),
		contact_ids: Joi.array().items(Joi.number()),
		user_ids: Joi.array().items(Joi.number()),
		due_date: Joi.date()
	})
};

const getProjects: ValidateScehma = {
	query: Joi.object<ProjectGetAll>({
		account_id: Joi.number(),
		limit: Joi.number(),
		page: Joi.number()
	})
};

export default { getProjects, createProject };
