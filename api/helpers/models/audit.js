module.exports = require('../models')('Audit', {
    objId         : { type: 'ObjectId', default: null, index: true },
    action        : { type: String, default: null },
    meta          : { type: String, default: null },

    addedBy       : { type: String, default: null },
    updatedBy     : { type: String, default: null },
    deletedBy     : { type: String, default: null },
    performedBy   : { type: String, default: null },

    // Permissions
    write         : [{ type: String, trim: true, default: '["project-system-admin"]' }],
    read          : [{ type: String, trim: true, default: '["project-system-admin"]' }],
    delete        : [{ type: String, trim: true, default: '["project-system-admin"]' }]
}, 'audit');