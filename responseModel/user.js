module.exports = {
    createUser: {
        200: {
            id: {
                type: 'number'
            },
            name: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            role: {
                type: 'string'
            },
            password: {
                type: 'string'
            },
            createdAt: {
                type: 'string',
                format: 'date-time'
            },
            updatedAt: {
                type: 'string',
                format: 'date-time'
            }
        },
        500: {
            internal: {
                type: 'string'
            }
        }
    },
    loginUser: {
        200: {
            
            message: {
                type: 'string'
            },
            token: {
                type: 'string'
            }
        },
        500: {
            internal: {
                type: 'string'
            }
        }
    },
};