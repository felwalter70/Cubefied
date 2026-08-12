import { Op } from 'sequelize';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';

import Customer from '../models/Customer';
import Contact from '../models/Contact';

class CustomersController {
    constructor() {
    }

    async index(req, res) {
        const {
            name, email, status, createdBefore,
            createdAfter, updatedBefore, updatedAfter, sort,
        } = req.query;

        const page = req.page || 1;
        const limit = req.limit || 25;

        let where = {};
        let order = [];

        if (name) {
            where = {
                ...where,
                name: {
                    [Op.iLike]: name,
                },
            };
        }

        if (email) {
            where = {
                ...where,
                email: {
                    [Op.iLike]: email,
                },
            };
        }

        if (status) {
            where = {
                ...where,
                status: {
                    [Op.in]: status.split(',').map(item => item.toUpperCase()),
                },
            };
        }

        if (createdBefore) {
            where = {
                ...where,
                createdAt: {
                    [Op.lte]: parseISO(createdBefore),
                },
            };
        }

        if (createdAfter) {
            where = {
                ...where,
                createdAt: {
                    [Op.gte]: parseISO(createdAfter),
                },
            };
        }

        if (updatedBefore) {
            where = {
                ...where,
                upadatedAt: {
                    [Op.lte]: parseISO(updatedBefore),
                },
            };
        }

        if (updatedAfter) {
            where = {
                ...where,
                updatedAt: {
                    [Op.gte]: parseISO(updatedAfter),
                },
            };
        }

        if (sort) {
            order = sort.split(',').map(item => item.split(':'));
        }

        const data = await Customer.findAll({
            where: where,
            order: order,
            limit: limit,
            offset: limit * page - limit,
            include: {
                model: Contact,
                attributes: ['id', 'status'],
            },
        });

        return res.json(data);
    }

    async show(req, res) {
        const id = req.params.id;
        const customer = await Customer.findByPk(id);

        if (!customer)
            return res.status(404).json();

        return res.json(customer);
    }

    async create(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            status: Yup.string().uppercase(),
        });

        if (!(await schema.isValid(req.body)))
            return res.status(400).json({ error: 'Error on validate schema' });

        const newCustomer = await Customer.create(req.body);

        return res.status(201).json(newCustomer);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            status: Yup.string().uppercase(),
        });

        if (!(await schema.isValid(req.body)))
            return res.status(400).json({ error: 'Error on validate schema' });

        const id = req.params.id;
        const customer = await Customer.findByPk(id);

        if (!customer)
            return res.status(404).json();

        await customer.update(req.body);

        return res.json(customer);
    }

    async destroy(req, res) {
        const id = req.params.id;
        const customer = await Customer.findByPk(id);

        if (!customer)
            return res.status(404).json();

        customer.destroy();

        return res.status(200).json();
    }
}

export default new CustomersController();
